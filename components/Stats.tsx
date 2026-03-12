const stats = [
  { value: '500+', label: 'Homes Placed',        description: 'Families in their dream home' },
  { value: '15+',  label: 'Years of Experience', description: 'Serving MD & VA since 2009' },
  { value: '98%',  label: 'Client Satisfaction', description: 'Based on client reviews' },
  { value: '3',    label: 'States Served',        description: 'Maryland, Virginia & DC' },
]

export default function Stats() {
  return (
    <section className="bg-navy-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-navy-700">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center px-6">
              <span className="font-serif text-5xl font-bold text-gold-400 mb-1">{stat.value}</span>
              <span className="font-sans font-semibold text-white text-sm uppercase tracking-widest mt-1 mb-1">
                {stat.label}
              </span>
              <span className="font-sans text-navy-300 text-xs leading-relaxed">{stat.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
