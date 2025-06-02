// components/Subfooter.tsx
export default function Subfooter() {
  return (
    <div className="bg-gray-900 text-gray-400 py-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div>
          <h3 className="text-white font-semibold mb-3">About Us</h3>
          <p className="text-sm">
            We are dedicated to providing the best services and solutions to our customers.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/services" className="hover:text-white">Services</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>123 Main Street</li>
            <li>City, State, 12345</li>
            <li>Email: info@yoursite.com</li>
            <li>Phone: (123) 456-7890</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Follow Us</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Facebook</a></li>
            <li><a href="#" className="hover:text-white">Twitter</a></li>
            <li><a href="#" className="hover:text-white">Instagram</a></li>
            <li><a href="#" className="hover:text-white">LinkedIn</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
