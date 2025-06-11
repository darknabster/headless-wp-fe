// components/WhyChooseMe.tsx
const reasons = [
  {
    title: '15+ Years of Experience',
    desc: 'A deep understanding of design and development best practices.',
    icon: '🎯',
  },
  {
    title: 'Client-Centered Approach',
    desc: 'I listen to your needs and deliver tailored solutions.',
    icon: '💬',
  },
  {
    title: 'Results-Driven Design',
    desc: 'Focused on boosting conversions and business growth.',
    icon: '📊',
  },
];

export default function WhyChooseMe() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">Why Choose Me?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((item, idx) => (
            <div key={idx} className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-lg transition">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
