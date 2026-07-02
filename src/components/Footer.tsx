function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#222] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-8">

        {/* Top */}
        <div className="grid md:grid-cols-4 gap-12">

          {/* Logo */}
          <div>
            <h2 className="text-4xl font-black">
              <span className="text-white">Bot</span>
              <span className="text-red-500">League</span>
            </h2>

            <p className="text-gray-400 mt-6 leading-7">
              India's National Robotics Sports Platform connecting students,
              schools, colleges and industries.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-red-500 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-red-500 transition">
                  Events
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-red-500 transition">
                  Categories
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-red-500 transition">
                  Rankings
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6">
              Resources
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-red-500 transition">
                  About
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-red-500 transition">
                  Contact
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-red-500 transition">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-red-500 transition">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6">
              Contact
            </h3>

            <p className="text-gray-400">
              📧 support@botleague.in
            </p>

            <p className="text-gray-400 mt-3">
              📞 +91 98765 43210
            </p>

            <p className="text-gray-400 mt-3">
              📍 Pune, Maharashtra
            </p>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-[#222] mt-12 pt-8 text-center">
          <p className="text-gray-500">
            © 2025 BotLeague. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;