import { useState, type FormEvent } from "react";
import { profile } from "../data/profile";
import "./contact.css";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${name || "website visitor"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="contact">
      <div className="container contact__grid">
        <div>
          <span className="eyebrow">Get in Touch</span>
          <h2 className="section-heading">Let's build something useful.</h2>
          <p className="section-lead">
            Open to Flutter, full-stack, and AI agent engineering opportunities. The fastest way
            to reach me is email.
          </p>
          <div className="contact__links">
            <a href={`mailto:${profile.email}`} className="focus-ring">{profile.email}</a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="focus-ring">GitHub ↗</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="focus-ring">LinkedIn ↗</a>
          </div>
        </div>

        <form className="card contact__form" onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
            />
          </label>
          <label>
            Email
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
          </label>
          <label>
            Message
            <textarea
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
          <button type="submit" className="btn btn-primary focus-ring">
            Open in Email Client
          </button>
          <p className="contact__hint">
            This opens your email client with the message pre-filled — there is no backend, so nothing is sent automatically.
          </p>
        </form>
      </div>
    </section>
  );
}
