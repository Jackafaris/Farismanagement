import Link from 'next/link'
import { Phone, Mail } from 'lucide-react'

export default function ContactCTA() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-navy-900 to-navy-800
                     shadow-2xl px-8 py-16 text-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=60)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-navy-900/85" />

          <div className="relative z-10">
            <span className="inline-block bg-gold-500/20 border border-gold-500/40 text-gold-300 rounded-full
                             px-4 py-1.5 text-xs font-sans font-semibold tracking-widest uppercase mb-6">
              Ready to Get Started?
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Let&apos;s Find Your<br />
              <span className="text-gold-400 italic">Dream Home</span>
            </h2>
            <p className="font-sans text-white/70 text-lg max-w-xl mx-auto mb-10">
              Whether you&apos;re buying, renting, or just exploring your options — we&apos;re here to help.
              Reach out and let&apos;s start the conversation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="btn-secondary px-8 py-4 text-base">
                Schedule a Consultation
              </Link>
              <a href="tel:+13015550100" className="btn-outline-white px-8 py-4 text-base flex items-center gap-2">
                <Phone size={16} />
                (301) 555-0100
              </a>
            </div>

            <div className="flex items-center justify-center gap-2 mt-8 text-white/50 font-sans text-sm">
              <Mail size={14} />
              <a href="mailto:info@farismanagement.com" className="hover:text-gold-400 transition-colors">
                info@farismanagement.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
