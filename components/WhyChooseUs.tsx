import { Award, HandshakeIcon, MapPin, TrendingUp } from 'lucide-react'

const reasons = [
  {
    icon: Award,
    title: 'Trusted Since 2009',
    description:
      'Over 15 years of dedicated service to Maryland and Virginia families. Our track record speaks for itself.',
  },
  {
    icon: HandshakeIcon,
    title: 'Client-First Philosophy',
    description:
      'We listen before we recommend. Your needs, timeline, and budget always come first — no pressure, ever.',
  },
  {
    icon: MapPin,
    title: 'Local Market Experts',
    description:
      'Deep knowledge of MD & VA neighborhoods, school districts, and market trends. We know where the value is.',
  },
  {
    icon: TrendingUp,
    title: 'Full-Service Support',
    description:
      'From your first showing to closing day and beyond, we\'re with you at every step of your real estate journey.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-navy-900 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-navy-800 rounded-full -translate-y-1/2 translate-x-1/3 opacity-50" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-500/10 rounded-full translate-y-1/2 -translate-x-1/4" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="gold-divider" />
            <span className="font-sans text-xs font-semibold text-gold-400 tracking-[0.2em] uppercase">
              Why Choose Us
            </span>
            <div className="gold-divider" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            The Faris Difference
          </h2>
          <p className="font-sans text-navy-300 text-lg max-w-2xl mx-auto">
            We combine local expertise with personal service to deliver an experience unlike any other real estate firm.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-navy-800/60 border border-navy-700 rounded-2xl p-7 flex flex-col gap-4
                         hover:bg-navy-800 hover:border-gold-500/40 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-gold-500/15 rounded-xl flex items-center justify-center
                              group-hover:bg-gold-500/25 transition-colors duration-300">
                <Icon size={22} className="text-gold-400" />
              </div>
              <h3 className="font-serif text-white font-bold text-xl">{title}</h3>
              <p className="font-sans text-navy-300 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
