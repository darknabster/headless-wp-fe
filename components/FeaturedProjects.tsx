// components/FeaturedProjects.tsx
const projects = [
  {
    title: 'Modern Coffee Shop Website',
    image: '/portfolio/coffee.jpg',
    link: '/portfolio/coffee-shop',
  },
  {
    title: 'SaaS Landing Page',
    image: '/portfolio/saas.jpg',
    link: '/portfolio/saas-landing',
  },
  {
    title: 'eCommerce Store Design',
    image: '/portfolio/ecommerce.jpg',
    link: '/portfolio/ecommerce-store',
  },
];

export default function FeaturedProjects() {
  return (
    <section className="w-full py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              className="block bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
