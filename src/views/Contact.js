import React, { useState } from 'react';
import { PageHero, External, Arrow } from '../components/ui';
import { profile, socials } from '../content';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  function submit(e) {
    e.preventDefault();
    const values = Object.fromEntries(new FormData(e.currentTarget));
    const next = {};
    if (!String(values.name || '').trim()) next.name = 'Please tell me your name.';
    if (!emailPattern.test(String(values.email || ''))) next.email = 'Please enter a valid email address.';
    if (String(values.message || '').trim().length < 10) next.message = 'Please write at least a sentence.';
    setErrors(next);
    if (Object.keys(next).length) { setStatus('idle'); return; }
    // No mail backend is configured, so the form prepares an email in the visitor's own mail app.
    const subject = encodeURIComponent(`Portfolio enquiry from ${values.name}`);
    const body = encodeURIComponent(`${values.message}\n\nFrom: ${values.name}\nEmail: ${values.email}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus('drafted');
  }

  const field = (name, label, props, Tag = 'input') => (
    <label className={errors[name] ? 'has-error' : ''}>
      {label}
      <Tag name={name} aria-invalid={Boolean(errors[name])} aria-describedby={errors[name] ? `${name}-error` : undefined} {...props} />
      {errors[name] && <span id={`${name}-error`} className="field-error">{errors[name]}</span>}
    </label>
  );

  return (
    <div className="page">
      <PageHero eyebrow="Contact" title="Great things start" accent="with a conversation.">
        <p>Have a project, an opportunity, or just a good idea? I’d love to hear from you.</p>
      </PageHero>
      <section className="section contact-layout">
        <div className="contact-details">
          <div className="mini-profile">
            {profile.image && <img src={profile.image} alt="" />}
            <div><h2 className="h3">{profile.shortName}</h2><span>{profile.position}</span></div>
          </div>
          <p className="eyebrow">Drop me a line</p>
          {profile.email && <a className="email-link" href={`mailto:${profile.email}`}>{profile.email}</a>}
          {profile.location && <p>{profile.location}</p>}
          <ul className="social-list">{socials.map(s => <li key={s.name}><External href={s.url}>{s.name} <Arrow /></External></li>)}</ul>
        </div>
        <form className="contact-form" onSubmit={submit} noValidate>
          {field('name', 'Your name', { autoComplete: 'name', placeholder: 'What should I call you?' })}
          {field('email', 'Email address', { type: 'email', autoComplete: 'email', placeholder: 'you@example.com' })}
          {field('message', 'What’s on your mind?', { rows: 5, placeholder: 'Tell me a little about your idea…' }, 'textarea')}
          <button className="btn btn-gold" type="submit">Prepare my email <Arrow /></button>
          <p className={`form-note ${status === 'drafted' ? 'is-success' : ''}`} role="status">
            {status === 'drafted'
              ? 'Your email is ready in your mail app — press send there to reach me. If nothing opened, use the email address alongside.'
              : 'This opens your own email app with your message ready to send. Nothing is sent from this website.'}
          </p>
        </form>
      </section>
    </div>
  );
}
