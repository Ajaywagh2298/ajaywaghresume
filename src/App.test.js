import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
beforeEach(() => {
  window.history.replaceState({}, '', '/');
  window.scrollTo = jest.fn();
  localStorage.clear();
});
test('desk lamp reveals the developer and can be switched off', () => {
  render(<App />);
  expect(screen.getByRole('heading', {
    level: 1
  })).toHaveTextContent('Ajay Wagh');
  fireEvent.click(screen.getByRole('button', {
    name: 'Turn desk lamp on'
  }));
  expect(screen.getByRole('heading', {
    level: 1
  })).toHaveTextContent('Ajay Wagh');
  expect(screen.getByText('Lights on. Ideas flowing.')).toBeInTheDocument();
  expect(screen.getByRole('button', {
    name: 'Turn desk lamp off'
  })).toHaveAttribute('aria-pressed', 'true');
  fireEvent.click(screen.getByRole('button', {
    name: 'Turn desk lamp off'
  }));
  expect(screen.getByRole('heading', {
    level: 1
  })).toHaveTextContent('Ajay Wagh');
});
test('navigation opens work and contact pages with usable destinations', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('link', {
    name: 'Work'
  }));
  expect(screen.getByRole('heading', {
    level: 1
  })).toHaveTextContent('Ideas into');
  expect(screen.getByRole('link', {
    name: /Explore the code/
  })).toHaveAttribute('href', 'https://github.com/Ajaywagh2298/Nirbhaya');
  fireEvent.click(screen.getByRole('link', {
    name: /Let’s talk/
  }));
  expect(screen.getByLabelText('Email address')).toHaveAttribute('type', 'email');
  expect(screen.getByLabelText('What’s on your mind?')).toBeRequired();
  expect(screen.getByText(/This opens your email app/)).toBeInTheDocument();
});
test('mobile navigation closes after selecting a route', () => {
  render(<App />);
  const toggle = screen.getByRole('button', {
    name: 'Menu +'
  });
  fireEvent.click(toggle);
  expect(toggle).toHaveAttribute('aria-expanded', 'true');
  fireEvent.click(screen.getByRole('link', {
    name: 'About'
  }));
  expect(toggle).toHaveAttribute('aria-expanded', 'false');
  expect(screen.getByRole('link', {
    name: /Download résumé/
  })).toHaveAttribute('download');
});

test('technology filters show the requested group', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: 'Data & cloud' }));
  expect(screen.getByRole('button', { name: 'Data & cloud' })).toHaveAttribute('aria-pressed', 'true');
  expect(screen.getByText('PostgreSQL')).toBeInTheDocument();
  expect(screen.queryByText('Sequelize')).not.toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'All' }));
  expect(screen.getByText('Sequelize')).toBeInTheDocument();
});

test('theme preference persists across navigation', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: 'Switch to light theme' }));
  expect(document.documentElement).toHaveAttribute('data-theme', 'light');
  expect(localStorage.getItem('portfolio-theme')).toBe('light');
  fireEvent.click(screen.getByRole('link', { name: 'Gallery' }));
  expect(document.documentElement).toHaveAttribute('data-theme', 'light');
  expect(screen.getAllByRole('button', { name: /Open gallery item/ }).length).toBeGreaterThan(0);
});

test('identity card flips to reveal contact links and home shows stats and workflow', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: 'Flip card for contact links' }));
  expect(screen.getByRole('button', { name: 'Show portrait' })).toHaveAttribute('aria-pressed', 'true');
  expect(screen.getByRole('link', { name: 'Instagram ↗' })).toBeInTheDocument();
  expect(screen.getByText('Companies')).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /From idea to release/ })).toBeInTheDocument();
});
