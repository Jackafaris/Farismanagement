import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Faris Management. We are here to help you find your perfect home in Maryland and Virginia.',
}

const contactInfo = [
  {
    Icon: Phone,
    label: 'Phone',
    value: '(301) 555-0100',
    href: 'tel:+13015550100',
  },
  {
    Icon: Mail,
    label: 'Email',
    value: 'info@farismanagement.com',
    href: 'mailto:info@farismanagement.com',
  },
  {
    Icon: MapPin,
    label: 'Office',
    value: '123 Commerce Blvd, Suite 200\nBethesda, MD 20814',
    href: 'https://maps.google.com',
  },
  {
    Icon: Clock,
    label: 'Office Hours',
    value: 'Mon–Fri: 9am – 6pm\nSat: 10am – 4pm',
    href: null,
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <div className="bg-navy-900 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-0.5 bg-gold-500 rounded-full" />
            <span className="font-sans text-xs font-semibold text-gold-400 tracking-[0.2em] uppercase">
              Get In Touch
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white">
            Contact Us
          </h1>
          <p className="font-sans text-navy-300 mt-3 text-base max-w-xl">
            Ready to find your dream home? Have questions about a listing? Our team is here to help.
          </p>
        </div>
      </div>

      {/* Main content */}
      <section className="bg-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* Left: info cards */}
            <div className="flex flex-col gap-6">

              {/* CEO intro card */}
              <div className="bg-navy-900 rounded-2xl p-7 text-white">
                <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center mb-4">
                  <span className="font-serif text-gold-400 font-bold text-lg">SF</span>
                </div>
                <p className="font-serif text-xl font-bold mb-1">Shirine Faris</p>
                <p className="font-sans text-gold-400 text-sm font-semibold tracking-wide mb-4">Chief Executive Officer</p>
                <p className="font-sans text-navy-300 text-sm leading-relaxed">
                  &ldquo;Whether you&apos;re buying your first home or your forever home, I&apos;m personally committed to making
                  the process smooth, transparent, and rewarding.&rdquo;
                </p>
              </div>

              {/* Contact details */}
              <div className="bg-white rounded-2xl border border-navy-50 p-7 shadow-sm">
                <h3 className="font-serif text-lg font-bold text-navy-900 mb-5">Contact Information</h3>
                <div className="flex flex-col gap-5">
                  {contactInfo.map(({ Icon, label, value, href }) => (
                    <div key={label} className="flex items-start gap-4">
                      <div className="w-9 h-9 bg-gold-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon size={15} className="text-gold-600" />
                      </div>
                      <div>
                        <p className="font-sans text-xs font-semibold text-navy-400 uppercase tracking-wide mb-0.5">
                          {label}
                        </p>
                        {href ? (
                          <a
                            href={href}
                            target={href.startsWith('http') ? '_blank' : undefined}
                            rel={href.startsWith('http') ? 'noreferrer' : undefined}
                            className="font-sans text-sm text-navy-700 hover:text-gold-600 transition-colors whitespace-pre-line"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="font-sans text-sm text-navy-700 whitespace-pre-line">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Areas served */}
              <div className="bg-white rounded-2xl border border-navy-50 p-7 shadow-sm">
                <h3 className="font-serif text-lg font-bold text-navy-900 mb-3">Areas We Serve</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Bethesda', 'Silver Spring', 'Potomac', 'Rockville',
                    'Chevy Chase', 'Gaithersburg', 'McLean', 'Fairfax',
                    'Alexandria', 'Great Falls',
                  ].map((area) => (
                    <span key={area} className="bg-navy-50 text-navy-700 font-sans text-xs px-3 py-1.5 rounded-lg">
                      {area}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right: form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
