/** @format */

import { useState } from "react";
import ButtonFill from "../Button/ButtonFill";
import Footer from "../Helper/Footer/Footer";
import { clients, features, services } from "../Data/utils";
import HomeForm from "../Helper/From/HomeForm";
import { FaStar, FaStarHalf } from "react-icons/fa";

const Hero = () => {
  const [selected, setSelected] = useState(clients[0]);

  return (
    <>
      {/* Hero Section */}
      <div className="w-full hero-bg py-24 px-4 md:px-12">
        <div className="max-w-8xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div>
            <h2 className="text-5xl font-semibold text-gray-900">
              Best & Trusted
            </h2>
            <h2 className="text-5xl font-bold text-[#EDEFC8] mt-1">SR.CLEAN</h2>
            <h2 className="text-5xl font-semibold text-[#e5e9a4] mt-1">
              <span className="text-gray-900">Cleaning</span> Service
            </h2>
            <p className="mt-4 text-[#EDFFF8] w-3/4">
              QuickClean is a fast, reliable, and affordable cleaning service
              designed for busy homes and offices. We deliver spotless results
              with flexible scheduling and trusted professionals—making
              cleanliness quick and hassle-free.
            </p>
            <a href="#" className="mt-6 inline-block">
              <ButtonFill>Explore Now</ButtonFill>
            </a>
          </div>

          {/* Right Side - Form */}
          <HomeForm />
        </div>
      </div>

      {/* Services Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-9xl mx-auto">
          {/* Heading */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold text-[#00D47E] hidden md:block">
                Cleaning Tasks
              </h2>
              <h2 className="text-3xl font-bold text-[#00D47E] md:hidden">
                Book Services
              </h2>
              <p className="text-gray-600 mt-2 max-w-xl">
                Instantly book highly rated pros for cleaning and handyman tasks
                at an upfront price.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <a
                href="/services"
                className="text-[#00D47E] hover:underline flex items-center gap-1 font-medium"
              >
                See All
              </a>
            </div>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <a
                key={idx}
                href={service.href}
                className="bg-white shadow-md hover:shadow-xl transition rounded-lg overflow-hidden group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-4 flex items-center justify-between">
                  <span className="text-gray-800 font-semibold">
                    {service.name}
                  </span>
                  <i className="fas fa-chevron-right text-gray-500" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
          {/* Left Section */}
          <div className="md:w-5/12">
            <div className="mb-6">
              <p className="text-[#00D47E] text-sm uppercase font-semibold">
                Why Choose Us
              </p>
              <h2 className="text-3xl font-bold text-gray-800 mt-2">
                Expert Cleaners and World Class Services
              </h2>
            </div>
            <p className="text-gray-600 mb-6">
              Experience top-tier cleaning with our expert team committed to
              excellence. We deliver world-class services with attention to
              detail, reliability, and care—ensuring your home or office stays
              spotless, fresh, and professionally maintained every time.
            </p>
            <a href="#" className="inline-block px-6 py-2">
              <ButtonFill>Learn More</ButtonFill>
            </a>
          </div>

          {/* Right Section */}
          <div className="md:w-7/12 flex flex-col gap-6">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center gap-4 bg-gray-50 p-4 rounded-lg shadow"
              >
                <div className="w-full sm:w-2/5">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-40 object-cover rounded-md"
                  />
                </div>
                <div className="w-full sm:w-3/5">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* vetted section */}
      <section className="bg-black py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* Icon and Title */}
            <div className="flex items-center gap-4">
              <img
                src="https://cache-landingpages.services.handy.com/assets/pages/home/vetted-pros-icon-3fd36f412a73566cd256ed1dc0c8d0b3addd067ff7d421e55d7b8b0b221ceaf0.svg"
                alt="Vetted Pros Icon"
                className="w-16 h-16"
              />
              <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                Vetted, Screened Professionals
              </h2>
            </div>

            {/* Description */}
            <p className="text-gray-700 mt-4 md:mt-0 md:ml-8 max-w-3xl">
              Cleaning and handyman tasks booked and paid for through Handy are
              performed by experienced, vetted providers who are highly rated by
              customers like you.{" "}
              <a
                href="/trust-and-safety"
                className="text-[#00D47E] hover:underline"
              >
                Learn more.
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* happiness section */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 items-center gap-10">
          {/* Left Content */}
          <div className="md:col-span-5 space-y-4">
            <h2 className="text-3xl font-bold text-gray-800">
              Are You a Five Star Pro?
            </h2>
            <p className="text-gray-700">
              From cleaners to handymen to smart home installers, Handy is
              always looking for service professionals who are experts in their
              trade and provide great service to their customers. The best home
              service professionals use Handy to find jobs with no lead fees and
              flexible scheduling.
            </p>
            <a href="#" className="inline-block px-6 py-2">
              <ButtonFill>Become a Pro</ButtonFill>
            </a>
          </div>

          {/* Right Image (or Background Photo Div) */}
          <div className="md:col-span-6 md:col-start-7 hidden md:block">
            <div className="h-80 w-full bg-[url('../../src/assets/become-pro.png')] bg-cover rounded-lg shadow-md"></div>
            {/* 🔁 Replace '/img/become-pro.jpg' with your actual image path in /public */}
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <div className="bg-[#EFEDCE] py-12 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#042222]">
            Our <span className="text-[#00D472]">Testimonials</span>
          </h2>
        </div>

        {/* Main layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left: Client List */}
          <div className="w-full lg:w-1/2 space-y-4 max-h-[500px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-green-400 hover:scrollbar-thumb-green-600 scrollbar-track-green-100">
            {clients.map((client, index) => (
              <div
                key={index}
                onClick={() => setSelected(client)}
                className={`flex items-start gap-4 p-4 rounded-lg cursor-pointer transition-all border ${
                  selected.name === client.name
                    ? "shadow-lg border-blue-500"
                    : "hover:shadow-md"
                }`}
              >
                <img
                  src={client.img}
                  alt={client.name}
                  className="w-16 h-16 rounded-full object-cover ring-2 ring-blue-100"
                />
                <div>
                  <h5 className="font-semibold text-gray-800">{client.name}</h5>
                  <p className="text-sm text-gray-500">{client.designation}</p>
                  <div className="flex items-center mt-1">
                    <div className="flex items-center">
                      <h5 className="font-semibold text-yellow-500"><FaStar/></h5>
                    <h5 className="font-semibold text-yellow-500"><FaStar/></h5>
                    <h5 className="font-semibold text-yellow-500"><FaStar/></h5>
                    <h5 className="font-semibold text-yellow-500"><FaStar/></h5>
                    <h5 className="font-semibold text-yellow-500"><FaStarHalf/></h5>
                    </div>
                    <div>
                      <span className="text-sm text-[#00D472] ml-2">
                        {client.rating}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mt-1 line-clamp-3">
                    {client.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Selected Testimonial */}
          <div className="w-full lg:w-1/2 h-1/4 p-4 sm:p-6 border rounded-lg shadow-md bg-gray-50 flex flex-col justify-between">
            <div className="flex items-center gap-4 mb-4">
              <img
                src={selected.img}
                alt={selected.name}
                className="w-20 h-20 rounded-full object-cover ring-2 ring-blue-100"
              />
              <div>
                <h4 className="text-xl font-bold text-gray-800">
                  {selected.name}
                </h4>
                <p className="text-sm text-gray-500">{selected.designation}</p>
                <div className="flex items-center mt-1">
                    <div className="flex items-center">
                      <h5 className="font-semibold text-yellow-500"><FaStar/></h5>
                    <h5 className="font-semibold text-yellow-500"><FaStar/></h5>
                    <h5 className="font-semibold text-yellow-500"><FaStar/></h5>
                    <h5 className="font-semibold text-yellow-500"><FaStar/></h5>
                    <h5 className="font-semibold text-yellow-500"><FaStarHalf/></h5>
                    </div>
                    <div>
                      <span className="text-sm text-[#00D472] ml-2">
                        {selected.rating}
                      </span>
                    </div>
                  </div>
              </div>
            </div>
            
            <p className="text-gray-700">{selected.description}</p>
          </div>
        </div>
      </div>

      {/* JoinTeamSection section */}
      <section className="bg-gray-50 py-16 px-4" id="join-our-team">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col lg:flex-row">
            {/* Image */}
            <div className="w-full lg:w-1/2 h-64 lg:h-auto">
              <img
                src="../../src/assets/joinourteam.jpg"
                alt="Smiling employee in uniform"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Text */}
            <div className="w-full lg:w-1/2 p-6 lg:p-10 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Join Our Team
              </h2>
              <p className="text-gray-700 mb-4">
                The moment you put on a{" "}
                <span className="text-[#00D47E]">SRCLEAN</span> uniform, you
                become part of a family—a team committed to supporting one
                another. Molly Maid offers more than just a job: it’s a career
                path built on respect, integrity, and fun.
              </p>
              <p className="text-gray-700 mb-6">
                Your local franchise owner will treat you like family and offer
                a work culture where you are truly valued.
              </p>

              <span className="block text-sm text-gray-600 italic mb-6">
                Start your career with us today. We offer exciting opportunities
                for growth and success!
              </span>

              <div>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3"
                >
                  <ButtonFill>View All Open Positions</ButtonFill>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Hero;
