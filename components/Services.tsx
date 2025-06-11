// components/Services.tsx
const services = [
  {
    title: 'Web Design',
    desc: 'Responsive, modern, and conversion-optimized websites.',
    icon: '🌐',
  },
  {
    title: 'SEO Optimization',
    desc: 'Rank higher and drive more organic traffic to your site.',
    icon: '🚀',
  },
  {
    title: 'Digital Marketing',
    desc: 'Targeted PPC & social media campaigns for ROI.',
    icon: '📈',
  },
];

export default function Services() {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-10">Services I Offer</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white shadow rounded-xl p-6 hover:shadow-lg transition">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
