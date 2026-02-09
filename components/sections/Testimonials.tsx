export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "I was looking for a reliable investment institution and I got the best. Handsbrew Forte is that place I get better investment options compared to others. The easy save scheme helped facilitate my vacation.",
      author: 'Mrs. Kaothar Agbaje',
      initials: 'KA',
    },
    {
      quote:
        "Getting more value for my money has been one thing I have always wanted and Handsbrew Forte made this possible with ease. I started saving with the company and saw the difference in my finances.",
      author: 'Miss Ifeoluwa Omosule',
      initials: 'IO',
    },
    {
      quote:
        "I started doing business with Handsbrew Forte Limited on a very light note, let's just say I was testing the waters but the way they catered to my smallest financial need convinced me to stay.",
      author: 'Mr. Oluwaseun Oladiti',
      initials: 'OO',
    },
  ]

  return (
    <section className="py-24 bg-background-light dark:bg-slate-900">
      <div className="max-w-[1300px] mx-auto px-[clamp(16px,4vw,32px)]">
        <div className="mb-16">
          <h3 className="text-secondary font-semibold tracking-wider uppercase mb-2">What Our Clients Say</h3>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Testimonials</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 relative ${
                index === 1 ? 'transform md:-translate-y-4' : ''
              }`}
            >
              <span className="material-icons text-4xl text-secondary absolute top-6 left-6 opacity-20">format_quote</span>
              <p className="text-slate-600 dark:text-slate-300 italic mb-8 relative z-10 pt-4">{testimonial.quote}</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-secondary bg-slate-200">
                  <div className="w-full h-full flex items-center justify-center bg-slate-300 text-slate-500 font-bold">
                    {testimonial.initials}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">{testimonial.author}</h4>
                  <div className="text-xs text-secondary flex items-center gap-1">
                    <span className="material-icons text-[10px]">star</span> Client
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
