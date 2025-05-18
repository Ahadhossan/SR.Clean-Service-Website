/** @format */

import { useState } from "react";
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactFooter = () => {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail)) {
      setNewsletterSuccess("Please enter a valid email.");
      return;
    }

    // Replace this with actual email processing logic (e.g. Mailchimp / Web3Forms)
    setNewsletterSuccess("Thanks for subscribing!");
    setNewsletterEmail("");
    setTimeout(() => setNewsletterSuccess(""), 3000);
  };

  return (
    <footer className="bg-[#0F214D] text-white pt-12">
      <div className="max-w-8xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12">
        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-[#00D47E]">
            Get In Touch
          </h2>
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-[#00D47E]" /> 8-3105 ch de bedford <br />
            Montreal ,Qc H3S1G3
          </p>
          <p className="flex items-center gap-2 mt-2">
            <FaPhoneAlt className="text-[#00D47E]" /> +012 345 67890
          </p>
          <p className="flex items-center gap-2 mt-2">
            <FaEnvelope className="text-[#00D47E]" /> info@example.com
          </p>
          <div className="flex gap-4 mt-4">
            <a
              href="https://twitter.com"
              target="_blank"
              className="hover:text-blue-400"
            >
              <FaTwitter />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              className="hover:text-blue-500"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="hover:text-blue-300"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Useful Location */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-[#00D47E]">
            Useful Location
          </h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-[#00D47E]">
                Canada
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#00D47E]">
                Quebec
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#00D47E]">
                Montreal
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#00D47E]">
                Laval
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#00D47E]">
                Longueuil
              </a>
            </li>
          </ul>
        </div>

        {/* Useful Services */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-[#00D47E]">
            Useful Services
          </h2>
          <ul className="space-y-2">
            <li>
              <a href="/house" className="hover:text-[#00D47E]">
                House Cleaning
              </a>
            </li>
            <li>
              <a href="/moveinout" className="hover:text-[#00D47E]">
                Move In Out Cleaning
              </a>
            </li>
            <li>
              <a href="/office" className="hover:text-[#00D47E]">
                Office Cleaning
              </a>
            </li>
            <li>
              <a href="/deep" className="hover:text-[#00D47E]">
                Deep Cleaning
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-[#00D47E]">
            Stay Updated
          </h2>
          <p className="mb-4 text-sm">
            Submit your email now to receive any service or connect with us.
          </p>
          <form
            onSubmit={handleNewsletterSubmit}
            className="flex flex-col sm:flex-row gap-2"
          >
            <input
              type="email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="Email here"
              className="px-4 py-2 w-full text-black rounded"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white w-full sm:w-auto"
            >
              Submit
            </button>
          </form>
          {newsletterSuccess && (
            <p
              className={`text-sm mt-2 ${
                newsletterSuccess.includes("Thanks")
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {newsletterSuccess}
            </p>
          )}
        </div>
      </div>

      {/* Footer Menu */}
      <div className="border-t border-gray-700">
        <div className="max-w-8xl mx-auto px-4 py-4 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
          <a href="#" className="hover:text-[#00D47E]">
            Terms of Use
          </a>
          <a href="#" className="hover:text-[#00D47E]">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-[#00D47E]">
            Cookies
          </a>
          <a href="#" className="hover:text-[#00D47E]">
            Help & FAQs
          </a>
          <a href="/contact" className="hover:text-[#00D47E]">
            Contact Us
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700">
        <div className="max-w-8xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>
            &copy;{" "}
            <a href="#" className="text-[#00D47E]">
              @imranslab
            </a>
            , All Rights Reserved.
          </p>
          <p>
            Designed by{" "}
            <a href="#" className="text-[#00D47E]">
              Ahad Hossain
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
