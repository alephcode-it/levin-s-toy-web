'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SiteFooter } from '@/components/site-footer';

export default function Contact() {
  const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
  const WEB3FORMS_ACCESS_KEY = 'b38aa93f-61ab-403d-bc6d-dccd70693419';
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const withBasePath = (path: string) => `${basePath}${path}`;
  const contactEmail = 'hello@levinstoy.com';
  const phoneDisplay = '+94 74 017 7415';
  const phoneHref = 'tel:+94740177415';
  const whatsappHref = 'https://wa.me/94740177415';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const flashTimerRef = useRef<number | null>(null);

  const clearFlashTimer = () => {
    if (flashTimerRef.current !== null) {
      window.clearTimeout(flashTimerRef.current);
      flashTimerRef.current = null;
    }
  };

  const queueFlashClear = () => {
    clearFlashTimer();
    flashTimerRef.current = window.setTimeout(() => {
      setIsSubmitted(false);
      setError('');
      flashTimerRef.current = null;
    }, 5000);
  };

  useEffect(() => {
    return () => {
      clearFlashTimer();
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (isSubmitted) {
      setIsSubmitted(false);
    }
    if (error) {
      setError('');
    }
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedPhone = formData.phone.trim();
    const trimmedSubject = formData.subject.trim();
    const trimmedMessage = formData.message.trim();

    if (trimmedName.length < 2) {
      return 'Please enter your full name.';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(trimmedEmail)) {
      return 'Please enter a valid email address.';
    }

    if (trimmedPhone && !/^[+\d\s()-]{7,20}$/.test(trimmedPhone)) {
      return 'Please enter a valid phone number.';
    }

    if (!trimmedSubject) {
      return 'Please select a subject.';
    }

    if (trimmedMessage.length < 10) {
      return 'Please write at least 10 characters in your message.';
    }

    return '';
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElement = e.currentTarget;
    const validationError = validateForm();
    if (validationError) {
      setIsSubmitted(false);
      setError(validationError);
      queueFlashClear();
      return;
    }

    setIsLoading(true);
    setIsSubmitted(false);
    setError('');

    try {
      const submission = new FormData(formElement);
      const name = formData.name.trim();
      const email = formData.email.trim();
      const phone = formData.phone.trim();
      const subject = formData.subject.trim();
      const message = formData.message.trim();

      const themedMessage = [
        "LEVIN'S TOY - NEW WEBSITE INQUIRY",
        '==================================================',
        `Submitted At: ${new Date().toLocaleString('en-LK', { hour12: true })}`,
        `Inquiry Type: ${subject}`,
        '==================================================',
        'CUSTOMER DETAILS',
        `Name   : ${name}`,
        `Email  : ${email}`,
        `Phone  : ${phone || 'Not provided'}`,
        '==================================================',
        'MESSAGE',
        message,
        '==================================================',
        'Brand: Levin\'s Toy',
        'Source: Website Contact Page',
      ].join('\n');

      submission.set('access_key', WEB3FORMS_ACCESS_KEY);
      submission.set('name', name);
      submission.set('email', email);
      submission.set('phone', phone || 'Not provided');
      submission.set('from_name', `Levin's Toy Contact Form - ${name}`);
      submission.set('replyto', email);
      submission.set('subject', `Levin's Toy Inquiry - ${subject}`);
      submission.set('message', themedMessage);

      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        body: submission,
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Failed to submit form. Please try again.');
      }

      setError('');
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      formElement.reset();
      queueFlashClear();
    } catch (err: unknown) {
      setIsSubmitted(false);
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      queueFlashClear();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main style={{ backgroundColor: '#F8F5F1' }}>
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass shadow-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
          <Link href="/" className="flex items-center hover:opacity-90 transition">
            <div className="relative flex-shrink-0" style={{ width: '180px', height: 'auto' }}>
              <Image
                src={withBasePath('/images/logo-full.png')}
                alt="Levin's Joy Logo"
                width={180}
                height={70}
                className="object-contain"
                priority
              />
            </div>
          </Link>
          <div className="hidden md:flex gap-8 items-center">
            <a href={withBasePath('/#features')} className="text-sm font-medium hover:text-opacity-80 transition" style={{ color: '#2B2B2B' }}>
              Why Us
            </a>
            <a href={withBasePath('/#products')} className="text-sm font-medium hover:text-opacity-80 transition" style={{ color: '#2B2B2B' }}>
              Products
            </a>
            <a href={withBasePath('/#story')} className="text-sm font-medium hover:text-opacity-80 transition" style={{ color: '#2B2B2B' }}>
              Our Story
            </a>
            <a href={withBasePath('/contact/')} className="text-sm font-bold transition" style={{ color: '#8B5E3C' }}>
              Contact
            </a>
          </div>
          <a
            href={phoneHref}
            className="px-6 py-2 rounded-full font-medium text-white transition-all hover-lift"
            style={{ backgroundColor: '#8B5E3C' }}
          >
            Order Now
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-4">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute top-20 left-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
            style={{ backgroundColor: '#D8C3A5' }}
          />
          <div
            className="absolute bottom-20 right-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
            style={{ backgroundColor: '#A3B18A' }}
          />
        </div>

        <div className="max-w-4xl mx-auto w-full relative z-10">
          <div className="text-center mb-12 fade-up space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-balance" style={{ color: '#2B2B2B' }}>
              Get in Touch
            </h1>
            <p className="text-xl text-opacity-80" style={{ color: '#2B2B2B' }}>
              Have questions about our toys? We&apos;d love to hear from you. Reach out and let&apos;s start a conversation.
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-premium shadow-premium p-8 md:p-12 fade-up" style={{ animationDelay: '0.1s' }}>
            {isSubmitted && (
              <div className="mb-8 p-4 rounded-lg flex items-center gap-3" style={{ backgroundColor: '#A3B18A', color: 'white' }}>
                <span>✓</span>
                <p className="font-medium">Thank you! Your inquiry was sent successfully to {contactEmail}. We&apos;ll get back to you soon.</p>
              </div>
            )}

            {error && (
              <div className="mb-8 p-4 rounded-lg flex items-center gap-3" style={{ backgroundColor: '#ff6b6b', color: 'white' }}>
                <span>✕</span>
                <p className="font-medium">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#2B2B2B' }}>
                    Name <span style={{ color: '#8B5E3C' }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    minLength={2}
                    maxLength={80}
                    className="w-full px-4 py-3 rounded-lg border transition"
                    style={{ borderColor: '#E8E6E1', color: '#2B2B2B' }}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#2B2B2B' }}>
                    Email <span style={{ color: '#8B5E3C' }}>*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    maxLength={120}
                    className="w-full px-4 py-3 rounded-lg border transition"
                    style={{ borderColor: '#E8E6E1', color: '#2B2B2B' }}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#2B2B2B' }}>
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    inputMode="tel"
                    maxLength={20}
                    className="w-full px-4 py-3 rounded-lg border transition"
                    style={{ borderColor: '#E8E6E1', color: '#2B2B2B' }}
                    placeholder="+94 74 017 7415"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#2B2B2B' }}>
                    Subject <span style={{ color: '#8B5E3C' }}>*</span>
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border transition"
                    style={{ borderColor: '#E8E6E1', color: '#2B2B2B' }}
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Product Question">Product Question</option>
                    <option value="Bulk Order">Bulk Order</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Feedback">Feedback</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#2B2B2B' }}>
                  Message <span style={{ color: '#8B5E3C' }}>*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                    minLength={10}
                    maxLength={2000}
                  className="w-full px-4 py-3 rounded-lg border transition resize-none"
                  style={{ borderColor: '#E8E6E1', color: '#2B2B2B' }}
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 rounded-lg font-semibold text-white transition-all hover-lift disabled:opacity-50"
                style={{ backgroundColor: '#8B5E3C' }}
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Other Ways to Contact */}
      <section className="py-16 px-4 md:py-20 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-balance" style={{ color: '#2B2B2B' }}>
          Other Ways to Reach Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Email */}
          <div className="bg-white rounded-premium shadow-soft p-8 hover-lift transition-all">
            <div className="text-4xl mb-4">✉️</div>
            <h3 className="text-xl font-bold mb-2" style={{ color: '#2B2B2B' }}>
              Email
            </h3>
            <p className="mb-4" style={{ color: '#2B2B2B' }}>
              Send us an email anytime
            </p>
            <a
              href={`mailto:${contactEmail}`}
              className="font-semibold transition-all"
              style={{ color: '#8B5E3C' }}
            >
              {contactEmail}
            </a>
          </div>

          {/* WhatsApp */}
          <div className="bg-white rounded-premium shadow-soft p-8 hover-lift transition-all">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl font-bold mb-2" style={{ color: '#2B2B2B' }}>
              WhatsApp
            </h3>
            <p className="mb-4" style={{ color: '#2B2B2B' }}>
              Chat with us on WhatsApp
            </p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold transition-all"
              style={{ color: '#8B5E3C' }}
            >
              Start Chat
            </a>
          </div>

          {/* Phone */}
          <div className="bg-white rounded-premium shadow-soft p-8 hover-lift transition-all">
            <div className="text-4xl mb-4">📞</div>
            <h3 className="text-xl font-bold mb-2" style={{ color: '#2B2B2B' }}>
              Phone
            </h3>
            <p className="mb-4" style={{ color: '#2B2B2B' }}>
              Call us during business hours
            </p>
            <a
              href={phoneHref}
              className="font-semibold transition-all"
              style={{ color: '#8B5E3C' }}
            >
              {phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 md:py-20 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-balance" style={{ color: '#2B2B2B' }}>
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {[
            {
              q: 'What age are your toys suitable for?',
              a: 'Our toys are designed for children ages 6 months to 8 years, with specific collections for different developmental stages.'
            },
            {
              q: 'Are your toys safe for babies?',
              a: 'Yes, all our toys meet or exceed international safety standards. We use non-toxic finishes and ensure no small parts for children under 3.'
            },
            {
              q: 'How long does shipping take?',
              a: 'We typically ship within 3-5 business days. Shipping times depend on your location, usually 5-14 business days.'
            },
            {
              q: 'Do you offer bulk or school orders?',
              a: 'Yes! We offer special discounts for bulk orders and schools. Please contact us directly for a custom quote.'
            },
            {
              q: 'What is your return policy?',
              a: 'We offer a 30-day return policy for items in original condition. Refunds are processed within 5-7 business days.'
            },
            {
              q: 'Are your toys sustainably sourced?',
              a: 'Absolutely. We use responsibly sourced wood from certified forests and eco-friendly, non-toxic finishes.'
            }
          ].map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-6 shadow-soft hover:shadow-medium transition-all" 
            >
              <h3 className="font-bold text-lg mb-2" style={{ color: '#2B2B2B' }}>
                {faq.q}
              </h3>
              <p style={{ color: '#2B2B2B' }}>
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Back to Home Button */}
      <section className="py-16 px-4 text-center">
        <Link href="/">
          <button
            className="px-8 py-3 rounded-full font-semibold text-white transition-all hover-lift"
            style={{ backgroundColor: '#8B5E3C' }}
          >
            Back to Home
          </button>
        </Link>
      </section>

      <SiteFooter />
    </main>
  );
}
