export function WhatsAppFloatingCTA() {
  const whatsappHref = 'https://wa.me/94740177415?text=Hello%20Levin%27s%20Toy%2C%20I%20would%20like%20to%20place%20an%20order.'

  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
      className="fixed right-3 bottom-4 md:right-6 md:bottom-6 z-[60] group"
    >
      <span className="flex flex-col items-center gap-2.5 select-none">
        <span
          className="relative w-14 h-14 md:w-[58px] md:h-[58px] rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-105"
          style={{
            background: 'radial-gradient(circle at 30% 20%, #29e676 0%, #25D366 45%, #1ea653 100%)',
            border: '3px solid rgba(255, 255, 255, 0.88)',
            boxShadow: '0 14px 34px rgba(37, 211, 102, 0.45)',
          }}
        >
          <svg viewBox="0 0 32 32" className="w-7 h-7 md:w-8 md:h-8" aria-hidden="true" fill="none">
            <path
              d="M16 3.2c-7 0-12.6 5.6-12.6 12.5 0 2.2.6 4.4 1.7 6.2L3 28.8l7.2-2.1c1.8 1 3.8 1.5 5.8 1.5 6.9 0 12.5-5.6 12.5-12.5S22.9 3.2 16 3.2Z"
              stroke="white"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M12.2 11.1c.3-.8.6-.8.9-.8h.8c.3 0 .6.1.7.4l1.2 2.9c.1.3.1.6-.1.8l-.8 1c-.2.2-.2.4-.1.6.6 1.2 1.6 2.3 2.9 3 .3.2.5.1.7-.1l1-.9c.2-.2.5-.2.8-.1l2.7 1.3c.3.1.5.4.4.7v.8c0 .3 0 .7-.8 1-1.1.5-2.4.6-3.6.3-1.3-.3-2.5-.9-3.5-1.8-1-.8-1.9-1.8-2.6-3-.7-1.2-1.1-2.5-1.2-3.9 0-1 .2-1.9.6-2.8Z"
              fill="white"
            />
          </svg>
        </span>

        <span
          className="px-4 py-2 rounded-full text-white text-xs md:text-sm font-medium tracking-[0.01em] transition-all duration-300 group-hover:-translate-y-0.5"
          style={{
            background: 'linear-gradient(90deg, #F79B16 0%, #FFA318 40%, #F48A00 100%)',
            boxShadow: '0 10px 24px rgba(244, 138, 0, 0.38)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
          }}
        >
          Talk to an Expert
        </span>
      </span>
    </a>
  )
}
