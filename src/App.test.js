import { render, screen, fireEvent, within, act } from '@testing-library/react';
import App from './App';

// jsdom cannot play audio, so simulate play/pause and their events.
beforeAll(() => {
  Object.defineProperty(HTMLMediaElement.prototype, 'paused', { configurable: true, get() { return !this._playing; } });
  HTMLMediaElement.prototype.play = function play() { this._playing = true; this.dispatchEvent(new Event('play')); return Promise.resolve(); };
  HTMLMediaElement.prototype.pause = function pause() { this._playing = false; this.dispatchEvent(new Event('pause')); };
});

beforeEach(() => {
  window.history.replaceState({}, '', '/');
  window.scrollTo = jest.fn();
  localStorage.clear();
  sessionStorage.clear();
});

test('the desk lamp reveals the name and tagline and can be switched off again', () => {
  render(<App />);
  const room = screen.getByRole('region', { name: /study room/ });
  expect(room).not.toHaveClass('is-lit');
  fireEvent.click(screen.getByRole('button', { name: 'Turn the desk lamp on' }));
  expect(room).toHaveClass('is-lit');
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Ajay Wagh');
  expect(within(room).getByText('Building with logic. Writing with imagination. Exploring beyond boundaries.')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'View my work' })).toHaveAttribute('href', '/projects');
  fireEvent.click(screen.getByRole('button', { name: 'Turn the desk lamp off' }));
  expect(room).not.toHaveClass('is-lit');
});

test('desk objects lead to their rooms, with a plain list as an alternative', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: 'Laptop: Development & projects' })).toHaveAttribute('href', '/projects');
  expect(screen.getByRole('link', { name: 'Journal: Poetry & stories' })).toHaveAttribute('href', '/writing');
  expect(screen.getByRole('link', { name: 'Camera: Travel diaries' })).toHaveAttribute('href', '/travel');
  const list = screen.getByRole('navigation', { name: 'Objects on the desk' });
  expect(list.querySelectorAll('a, button')).toHaveLength(5);
});

test('the record player plays music from the music folder and keeps playing across pages', async () => {
  render(<App />);
  const record = screen.getByRole('button', { name: 'Record player: Play music' });
  expect(record).toHaveAttribute('aria-pressed', 'false');
  expect(screen.queryByRole('region', { name: 'Music player' })).toBeNull();
  await act(async () => { fireEvent.click(record); });
  expect(screen.getByRole('button', { name: 'Record player: Pause music' })).toHaveAttribute('aria-pressed', 'true');
  const player = screen.getByRole('region', { name: 'Music player' });
  expect(within(player).getByText('United')).toBeInTheDocument();
  expect(document.querySelector('audio')).toHaveAttribute('preload', 'none');

  await act(async () => { fireEvent.click(within(player).getByRole('button', { name: 'Next track' })); });
  expect(within(player).getByText('Death Valley Waltz')).toBeInTheDocument();

  fireEvent.click(screen.getByRole('link', { name: 'Music' }));
  expect(await screen.findByRole('button', { name: 'Pause Death Valley Waltz' })).toBeInTheDocument();
  expect(within(screen.getByRole('region', { name: 'Music player' })).getByRole('button', { name: 'Pause music' })).toBeInTheDocument();

  await act(async () => { fireEvent.click(screen.getByRole('button', { name: 'Pause Death Valley Waltz' })); });
  expect(screen.getByRole('button', { name: 'Play Death Valley Waltz' })).toBeInTheDocument();
});

test('the laptop opens the work page and its project case study', async () => {
  render(<App />);
  fireEvent.click(screen.getByRole('link', { name: 'Laptop: Development & projects' }));
  expect(await screen.findByRole('heading', { level: 1 })).toHaveTextContent('Ideas into');
  fireEvent.click(screen.getByRole('link', { name: /Nirbhaya/ }));
  expect(await screen.findByRole('heading', { level: 1, name: 'Nirbhaya' })).toBeInTheDocument();
  expect(screen.getByText(/Commuters need a way/)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /View the code/ })).toHaveAttribute('href', 'https://github.com/Ajaywagh2298/Nirbhaya');
});

test('empty writing shows an honest placeholder and music lists the tracks without autoplay', async () => {
  window.history.replaceState({}, '', '/writing');
  render(<App />);
  expect(await screen.findByText('The journal is being written')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Read my writing on Pratilipi/ })).toHaveAttribute('href', 'https://english.pratilipi.com/user/ajay-wagh-58906v8114');
  fireEvent.click(screen.getByRole('link', { name: 'Music' }));
  expect(await screen.findByRole('button', { name: 'Play United' })).toBeInTheDocument();
  expect(document.querySelector('iframe')).toBeNull();
});

test('the contact form validates before preparing an email', async () => {
  window.history.replaceState({}, '', '/contact');
  render(<App />);
  fireEvent.click(await screen.findByRole('button', { name: /Prepare my email/ }));
  expect(screen.getByText('Please enter a valid email address.')).toBeInTheDocument();
  expect(screen.getByLabelText(/Email address/)).toHaveAttribute('aria-invalid', 'true');
  expect(screen.getByText(/Nothing is sent from this website/)).toBeInTheDocument();
  expect(within(screen.getByRole('main')).getByRole('link', { name: /LinkedIn/ })).toHaveAttribute('href', 'https://www.linkedin.com/in/ajaywagh2298/');
});

test('the about page shows the current role first and the old routes still work', async () => {
  window.history.replaceState({}, '', '/exp');
  render(<App />);
  expect(await screen.findByRole('heading', { level: 1 })).toHaveTextContent('Behind the code');
  const roles = screen.getAllByRole('heading', { level: 3 }).map(h => h.textContent);
  expect(roles).toContain('Junior Engineer ( Information Technology )');
  expect(screen.getByText('Now')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Download résumé/ })).toHaveAttribute('download');
});

test('mobile menu closes after navigating and the theme choice persists', async () => {
  render(<App />);
  const toggle = screen.getByRole('button', { name: 'Menu' });
  fireEvent.click(toggle);
  expect(toggle).toHaveAttribute('aria-expanded', 'true');
  fireEvent.click(screen.getByRole('button', { name: 'Switch to light theme' }));
  expect(document.documentElement).toHaveAttribute('data-theme', 'light');
  fireEvent.click(screen.getByRole('link', { name: 'Travel' }));
  expect(await screen.findByText('The first pages are still blank')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Menu' })).toHaveAttribute('aria-expanded', 'false');
  expect(localStorage.getItem('portfolio-theme')).toBe('light');
});
