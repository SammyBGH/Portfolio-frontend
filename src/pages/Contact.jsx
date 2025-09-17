import React, { useState } from 'react';
import '../styles/Contact.css';

export default function Contact() {
  const [status, setStatus] = useState('');
  const [statusType, setStatusType] = useState('success');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    // Vite env variable
    const API_URL = import.meta.env.VITE_CONTACT_API;

    if (!API_URL) {
      console.error('API URL not defined. Set VITE_CONTACT_API in .env');
      setStatus('Configuration error. Contact admin.');
      setStatusType('error');
      setLoading(false);
      setTimeout(() => setStatus(''), 3000);
      return;
    }

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Failed to send message');

      setStatus('Message sent successfully!');
      setStatusType('success');
      e.target.reset();
    } catch (err) {
      console.error(err);
      setStatus('Error sending message. Try again.');
      setStatusType('error');
    } finally {
      setLoading(false);
      setTimeout(() => setStatus(''), 3000);
    }
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <form className="contact__form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required />
        <button type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Send'}
        </button>
        {status && (
          <div className={`contact__status ${statusType}`}>
            {status}
          </div>
        )}
      </form>
    </section>
  );
}
