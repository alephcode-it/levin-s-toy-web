'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SiteFooter } from '@/components/site-footer';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState('');
  const [activeTab, setActiveTab] = useState('quality');
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const withBasePath = (path: string) => `${basePath}${path}`;
  const phoneHref = 'tel:+94740177415';
  const whatsappHref = 'https://wa.me/94740177415';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['features', 'products', 'story'];
      const current = sections.findLast((sectionId) => {
        const sectionEl = document.getElementById(sectionId);
        if (!sectionEl) {
          return false;
        }
        return window.scrollY + 140 >= sectionEl.offsetTop;
      });

      setActiveNav(current || '');
    };

    const handleHashChange = () => {
      const nextHash = window.location.hash.replace('#', '');
      if (['features', 'products', 'story'].includes(nextHash)) {
        setActiveNav(nextHash);
      }
    };

    handleHashChange();
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <main style={{ backgroundColor: '#F8F5F1' }}>
      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass shadow-soft'
            : 'bg-white/80 backdrop-blur-sm shadow-[0_4px_24px_rgba(0,0,0,0.06)] border-b border-black/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex justify-between items-center">
          <Link href="/" className="flex items-center hover:opacity-90 transition">
            <div className="relative flex-shrink-0" style={{ width: '150px', height: 'auto' }}>
              <Image
                src={withBasePath('/images/logo-full.png')}
                alt="Levin's Joy Logo"
                width={150}
                height={56}
                className="object-contain"
                priority
              />
            </div>
          </Link>
          <div className="hidden md:flex gap-8 items-center">
            <a
              href="#features"
              onClick={() => setActiveNav('features')}
              className="text-sm font-medium transition"
              style={{ color: activeNav === 'features' ? '#8B5E3C' : '#2B2B2B' }}
            >
              Why Us
            </a>
            <a
              href="#products"
              onClick={() => setActiveNav('products')}
              className="text-sm font-medium transition"
              style={{ color: activeNav === 'products' ? '#8B5E3C' : '#2B2B2B' }}
            >
              Products
            </a>
            <a
              href="#story"
              onClick={() => setActiveNav('story')}
              className="text-sm font-medium transition"
              style={{ color: activeNav === 'story' ? '#8B5E3C' : '#2B2B2B' }}
            >
              Our Story
            </a>
            <Link href="/contact" className="text-sm font-medium hover:text-opacity-80 transition" style={{ color: '#2B2B2B' }}>
              Contact
            </Link>
          </div>
          <a
            href={phoneHref}
            className="px-6 py-1.5 rounded-full font-medium text-white transition-all hover-lift"
            style={{ backgroundColor: '#8B5E3C' }}
          >
            Order Now
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-start md:items-center justify-center pt-28 md:pt-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute top-20 left-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
            style={{ backgroundColor: '#D8C3A5' }}
          />
          <div
            className="absolute top-40 right-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
            style={{ backgroundColor: '#A3B18A' }}
          />
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-12 items-center relative z-10">
          <div className="space-y-8 fade-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-balance" style={{ color: '#2B2B2B' }}>
              Handcrafted Excellence for Little Hands
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-opacity-80" style={{ color: '#2B2B2B' }}>
              Premium wooden toys inspired by Montessori principles. Each piece is thoughtfully crafted to nurture creativity, learning, and wonder in every moment of play.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="#gallery"
                className="px-8 py-4 rounded-full font-semibold text-white transition-all hover-lift shadow-soft"
                style={{ backgroundColor: '#8B5E3C' }}
              >
                Explore Collection
              </a>
              <a
                href="#story"
                className="px-8 py-4 rounded-full font-semibold border-2 transition-all hover-lift"
                style={{
                  borderColor: '#8B5E3C',
                  color: '#8B5E3C',
                  backgroundColor: 'transparent',
                }}
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="relative h-96 md:h-full fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-full h-96 rounded-premium overflow-hidden shadow-premium hover-scale">
              <Image
                src={withBasePath('/images/cover1.jpg')}
                alt="Levin's Toy Premium Collection"
                fill
                className="image-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance" style={{ color: '#2B2B2B' }}>
              Why Parents Love Us
            </h2>
            <p className="text-xl text-opacity-80" style={{ color: '#2B2B2B' }}>
              The perfect blend of education, safety, and pure joy
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Montessori Inspired',
                description: 'Designed with Montessori principles to encourage self-directed learning and natural exploration.',
                icon: '🌿',
              },
              {
                title: 'Eco-Friendly Materials',
                description: 'Sustainably sourced wood and non-toxic finishes that are safe for your children.',
                icon: '♻️',
              },
              {
                title: 'Handcrafted Quality',
                description: 'Each toy is meticulously handmade with attention to every detail and finish.',
                icon: '✨',
              },
              {
                title: 'Child-Safe Design',
                description: 'Thoroughly tested and certified for safety. No small parts, no rough edges.',
                icon: '🛡️',
              },
              {
                title: 'Timeless Beauty',
                description: 'Natural wood aesthetic that grows more beautiful with every moment of play.',
                icon: '🎨',
              },
              {
                title: 'Cognitive Development',
                description: 'Encourage problem-solving, fine motor skills, and creative imagination.',
                icon: '🧠',
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="p-8 rounded-premium shadow-soft hover-lift hover:shadow-medium transition-all duration-300"
                style={{ backgroundColor: 'white' }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#8B5E3C' }}>
                  {feature.title}
                </h3>
                <p className="text-opacity-80" style={{ color: '#2B2B2B' }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance" style={{ color: '#2B2B2B' }}>
              Featured Collection
            </h2>
            <p className="text-xl text-opacity-80" style={{ color: '#2B2B2B' }}>
              Discover our most loved toys, crafted with passion and purpose
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              { image: 'cover2.jpg', title: 'Wooden Block Set', desc: 'Premium building blocks for endless creativity' },
              { image: 'cover3.jpg', title: 'Shape Sorter', desc: 'Educational learning through playful exploration' },
            ].map((product, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-premium shadow-medium hover-lift">
                <div className="relative h-96 w-full">
                  <Image
                    src={withBasePath(`/images/${product.image}`)}
                    alt={product.title}
                    fill
                    className="image-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8"
                  style={{
                    background: 'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))',
                  }}
                >
                  <h3 className="text-2xl font-bold text-white mb-2">{product.title}</h3>
                  <p className="text-white/90">{product.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <a
              href="#gallery"
              className="px-8 py-4 rounded-full font-semibold text-white transition-all hover-lift shadow-soft"
              style={{ backgroundColor: '#8B5E3C' }}
            >
              View All Products
            </a>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section id="story" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-up">
              <div className="relative h-96 rounded-premium overflow-hidden shadow-premium">
                <Image
                  src={withBasePath('/images/image6.jpg')}
                  alt="Levin's Toy Craftsmanship"
                  fill
                  className="image-cover"
                />
              </div>
            </div>

            <div className="space-y-6 fade-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-4xl font-bold text-balance" style={{ color: '#2B2B2B' }}>
                Our Story
              </h2>
              <p className="text-lg leading-relaxed text-opacity-80" style={{ color: '#2B2B2B' }}>
                Levin&apos;s Toy was born from a simple belief: every child deserves toys that spark joy, encourage learning, and celebrate the beauty of natural materials.
              </p>
              <p className="text-lg leading-relaxed text-opacity-80" style={{ color: '#2B2B2B' }}>
                Each wooden toy is hand-selected and crafted with the utmost care. We believe in Montessori principles—allowing children to lead their own learning journey through play that&apos;s both engaging and meaningful.
              </p>
              <p className="text-lg leading-relaxed text-opacity-80" style={{ color: '#2B2B2B' }}>
                Sustainability is at our core. We partner with responsible suppliers for ethically sourced wood and use only non-toxic, child-safe finishes. Because the best gift for our children is also a gift to our planet.
              </p>
              <div className="pt-4">
                <a
                  href="#story-details"
                  className="px-8 py-4 rounded-full font-semibold text-white transition-all hover-lift shadow-soft"
                  style={{ backgroundColor: '#A3B18A' }}
                >
                  Read Full Story
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="story-details" className="py-16 px-4 md:py-20">
        <div className="max-w-5xl mx-auto bg-white rounded-premium shadow-soft p-8 md:p-12 space-y-6">
          <h3 className="text-3xl md:text-4xl font-bold text-balance" style={{ color: '#2B2B2B' }}>
            The Full Story Behind Levin&apos;s Toy
          </h3>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: '#2B2B2B' }}>
            Levin&apos;s Toy started as a small family workshop with one simple goal: create toys that children love and parents trust. Every design is inspired by real play moments and built to support imagination, problem-solving, and independence.
          </p>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: '#2B2B2B' }}>
            We work with natural wood, child-safe finishes, and careful hand-finishing to make each toy durable and beautiful. Our collections are influenced by Montessori principles, so children can explore at their own pace with confidence and joy.
          </p>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: '#2B2B2B' }}>
            As we grow, our mission stays the same: bring meaningful, screen-light play into modern homes while honoring craftsmanship, sustainability, and timeless design.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance" style={{ color: '#2B2B2B' }}>
              Moments of Joy
            </h2>
            <p className="text-xl text-opacity-80" style={{ color: '#2B2B2B' }}>
              See how children around the world are discovering wonder with Levin&apos;s Toys
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              'image1.jpg',
              'image3.jpg',
              'image4.jpg',
              'image5.jpg',
              'image7.jpg',
              'immage2.jpg',
            ].map((image, idx) => (
              <div key={idx} className="group relative h-64 rounded-premium overflow-hidden shadow-soft hover-scale">
                <Image
                  src={withBasePath(`/images/${image}`)}
                  alt={`Gallery ${idx + 1}`}
                  fill
                  className="image-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto relative rounded-premium overflow-hidden shadow-premium">
          <div className="absolute inset-0">
            <Image
              src={withBasePath('/images/image5.jpg')}
              alt="CTA Banner"
              fill
              className="image-cover brightness-50"
            />
          </div>

          <div className="relative z-10 py-20 px-8 md:px-16 text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-balance">
              Ready to Spark Wonder?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Join families worldwide who trust Levin&apos;s Toys for meaningful play and beautiful moments.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button
                className="px-8 py-4 rounded-full font-semibold text-white transition-all hover-lift"
                style={{ backgroundColor: '#8B5E3C' }}
              >
                Shop Now
              </button>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full font-semibold border-2 border-white text-white transition-all hover-lift bg-white/10"
              >
                Order via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
