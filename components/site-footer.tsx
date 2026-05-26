'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://web.facebook.com/profile.php?id=61570263980470',
    Icon: Facebook,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/levinstoy_woodentoy/',
    Icon: Instagram,
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/',
    Icon: Youtube,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/',
    Icon: Linkedin,
  },
]

export function SiteFooter() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  const withBasePath = (path: string) => `${basePath}${path}`
  const contactEmail = 'hello@levinstoy.com'
  const phoneDisplay = '+94 74 017 7415'
  const phoneHref = 'tel:+94740177415'

  return (
    <footer
      className="mt-20 border-t"
      style={{
        borderColor: 'rgba(216, 195, 165, 0.25)',
        background: 'linear-gradient(145deg, #1f2928 0%, #163538 55%, #23483f 100%)',
        color: '#F8F5F1',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr] items-start">
          <div className="space-y-5">
            <Image
              src={withBasePath('/images/logo-full.png')}
              alt="Levin's Toy"
              width={160}
              height={58}
              className="object-contain"
            />
            <p className="max-w-md text-sm leading-7" style={{ color: 'rgba(248, 245, 241, 0.9)' }}>
              Premium handcrafted wooden toys designed for joyful, mindful play and lasting childhood memories.
            </p>
            <a
              href="https://alephcode.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full px-4 py-2 text-xs font-semibold tracking-[0.12em] uppercase transition"
              style={{
                border: '1px solid rgba(216, 195, 165, 0.45)',
                color: '#D8C3A5',
                backgroundColor: 'rgba(216, 195, 165, 0.08)',
              }}
            >
              Crafted by AlephCode Technologies
            </a>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-[0.16em] uppercase mb-4" style={{ color: '#D8C3A5' }}>
              Explore
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={withBasePath('/#features')} className="transition hover:opacity-80">
                  Why Us
                </a>
              </li>
              <li>
                <a href={withBasePath('/#products')} className="transition hover:opacity-80">
                  Products
                </a>
              </li>
              <li>
                <a href={withBasePath('/#story')} className="transition hover:opacity-80">
                  Our Story
                </a>
              </li>
              <li>
                <Link href="/contact" className="transition hover:opacity-80">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-[0.16em] uppercase mb-4" style={{ color: '#D8C3A5' }}>
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    border: '1px solid rgba(216, 195, 165, 0.45)',
                    backgroundColor: 'rgba(248, 245, 241, 0.08)',
                    color: '#F8F5F1',
                  }}
                >
                  <Icon size={17} strokeWidth={2.1} />
                </a>
              ))}
            </div>
            <div className="mt-5 space-y-2 text-sm">
              <a
                href={`mailto:${contactEmail}`}
                className="block transition hover:opacity-80"
                style={{ color: 'rgba(248, 245, 241, 0.9)' }}
              >
                {contactEmail}
              </a>
              <a
                href={phoneHref}
                className="block transition hover:opacity-80"
                style={{ color: 'rgba(248, 245, 241, 0.9)' }}
              >
                {phoneDisplay}
              </a>
            </div>
          </div>
        </div>

        <div
          className="mt-10 pt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-xs"
          style={{
            borderTop: '1px solid rgba(216, 195, 165, 0.2)',
            color: 'rgba(248, 245, 241, 0.72)',
          }}
        >
          <p>Handcrafting moments of joy, one toy at a time.</p>
          <p>© {new Date().getFullYear()} Levin&apos;s Toy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
