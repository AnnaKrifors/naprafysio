export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-8 border-t border-gray-200 shadow-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left section - brand or logo */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-3xl font-semibold" style={{ color: "#0892a5" }}>
              Naprafysio
            </h2>
          </div>

          {/* Middle section - navigation links */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="/" className="text-gray-600 hover:text-gray-900 transition">
              Home
            </a>
            <a href="/about" className="text-gray-600 hover:text-gray-900 transition">
              About
            </a>
            <a href="/services" className="text-gray-600 hover:text-gray-900 transition">
              Services
            </a>
            <a href="/contact" className="text-gray-600 hover:text-gray-900 transition">
              Contact
            </a>
          </div>
        </div>

        {/* Bottom section - copyright */}
        <div className="mt-6 text-center text-sm text-gray-500">&copy; {new Date().getFullYear()} Naprafysio. All rights reserved.</div>
      </div>
    </footer>
  );
}
