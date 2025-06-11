// components/Testimonials.tsx
const testimonials = [
  {
    quote:
      "Working with PixelCraft was a fantastic experience. They revamped our site and improved our SEO — now our traffic has doubled.",
    name: "Jane Doe",
    title: "Founder, GreenLeaf Co.",
  },
  {
    quote:
      "Professional, responsive, and highly skilled. They delivered exactly what we needed, on time and beyond expectations.",
    name: "John Smith",
    title: "Marketing Director, Flowly",
  },
  {
    quote:
      "Our online store now looks amazing and runs fast. Sales have improved significantly since the redesign!",
    name: "Lena Park",
    title: "Owner, CraftyThings",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">What Clients Say</h2>
        <div className="grid gap-12 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-6 rounded-2xl text-left border"
            >
              <p className="text-gray-700 italic mb-4">“{t.quote}”</p>
              <div className="font-semibold text-blue-600">{t.name}</div>
              <div className="text-sm text-gray-500">{t.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
