/** @format */

import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const footerLinks = {
    Company: [
      { name: "About", href: "/about" },
      { name: "Services", href: "#" },
      { name: "Our Team", href: "#" },
      { name: "Contact Us", href: "/contact" },
    ],
    Locations: [
      { name: "Canada", href: "#" },
      { name: "Quebec", href: "#" },
      { name: "Montreal", href: "#" },
      { name: "Laval", href: "#" },
      { name: "Longueuil", href: "#" },
    ],
    Services: [
      { name: "House Cleaning", href: "/house" },
      { name: "Move In Out Cleaning", href: "/moveinout" },
      { name: "Office Cleaning", href: "/office" },
      { name: "Deep Cleaning", href: "/deep" },
    ],
    Support: [
      { name: "FAQ", href: "#" },
      { name: "24/7 Support", href: "#" },
      { name: "Privacy Policy", href: "#" },
    ],
  };

  return (
    <footer className="bg-[rgb(15,33,77)] text-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-6">
              <img
                src="../../../src/assets/logo.png" // Ensure your image is in /public/assets/
                alt="logo"
                className="w-10 h-10 rounded-full"
              />
              <h1 className="text-2xl font-bold text-[#ecd9d9]">
                SR.<span className="text-[#00D47E]">CLEAN</span>
              </h1>
            </div>
            <p className="text-sm">
              QuickClean delivers fast, reliable, and affordable cleaning services for homes and offices across Canada.
            </p>
            <div className="flex mt-4 gap-4">
              <a href="https://facebook.com" target="_blank" className="w-10 h-10 flex items-center justify-center bg-[#fff2d0] text-gray-800 rounded-full hover:bg-blue-600 hover:text-white transition">
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" className="w-10 h-10 flex items-center justify-center bg-[#fff2d0] text-gray-800 rounded-full hover:bg-blue-400 hover:text-white transition">
                <FaTwitter className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com"target="_blank" className="w-10 h-10 flex items-center justify-center bg-[#fff2d0] text-gray-800 rounded-full hover:bg-blue-700 hover:text-white transition">
                <FaLinkedinIn className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-lg font-bold mb-4 text-[#00D47E]">{title}</h3>
                <ul className="space-y-2 text-sm">
                  {links.map((link, i) => (
                    <li key={i}>
                      <a href={link.href} className="hover:text-[#00D47E] transition">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Created by{" "}
            <a href="#" className="text-[#00D47E] font-bold">@imranslab Team</a>{" "}
            <img
              src="https://img.icons8.com/emoji/48/man-technologyst.png"
              alt="Developer"
              className="w-5 h-5 inline-block ml-1"
            />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
