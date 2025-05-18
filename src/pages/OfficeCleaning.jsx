/** @format */

import { useState } from "react";
import { steps } from "../Data/move";
import Footer from "../Helper/Footer/Footer"
import { CheckCheck, Star, StarHalf } from "lucide-react";
import { capabilities, content, faqs } from "../Data/office";
import PageHeader from "../Helper/PageHeader/PageHeader";
import OfficeCleaningForm from "../Helper/From/OfficeCleaningForm";

const OfficeCleaning = () => {
    // faqs state
    const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  return (
    <>
      {/* header section */}
      <PageHeader
        breadcrumb={[{ label: "Home", path: "/home" }, { label: "Office Cleaning" }]}
      />

      {/* form section */}
      <section className="bg-[#EDFFF8] py-12 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              Office Cleaning
            </h1>

            {/* Rating */}
            <div className="flex items-center space-x-2 text-yellow-500">
              <Star />
              <Star />
              <Star />
              <Star />
              <StarHalf />
              <span className="ml-2 text-sm text-[#00D47E]">23 Reviews</span>
            </div>

            {/* Description */}
            <p className="text-gray-700">
              Finding the best office cleaning services in your area does not
              have to be a chore when you use Handy. Handy has been connecting
              customers with office cleaning professionals for years, ensuring
              that your professional space shines and impresses your clients and
              employees alike. Whether you run a small business or are part of a
              large corporation, ensuring that your offices are kept clean and
              tidy helps to create positive first impressions and improves
              employee morale. From ensuring that the coffee cups are washed and
              dried to cleaning the bathrooms, Handy can connect you with office
              cleaning services to handle all your cleaning tasks, large and
              small.
            </p>

            {/* Capabilities */}
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-start gap-2">
                <CheckCheck className="text-green-600" />
                Friendly 24/7 customer service.
              </li>
              <li className="flex items-start gap-2">
                <CheckCheck className="text-green-600" />
                Affordable, upfront pricing.
              </li>
              <li className="flex items-start gap-2">
                <CheckCheck className="text-green-600" />
                Book exact times—no vague windows.
              </li>
            </ul>
          </div>

          {/* Right: Form */}
          <OfficeCleaningForm/>
        </div>
      </section>

      {/* How it works section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-[#042222]">How <span className="text-[#00D47E]">SR.Clean</span> Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white border rounded-lg shadow-sm p-6 flex flex-col items-center text-center hover:shadow-md transition"
              >
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-20 h-20 mb-4 mx-auto rounded-full p-4 border-2 border-[#042222] hover:bg-black"
                  loading="lazy"
                />
                <h3 className="text-xl font-semibold mb-2 text-[#00D47E]">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TrustedOfficeCleaning section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-[#042222]">
            The Trusted Name in <span className="text-[#00D47E]">Office Cleaning</span> Referrals
          </h2>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            {capabilities.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition hover:bg-[#dcf3ea]"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img src={item.icon} alt={item.title} className="w-16 h-16 p-2 rounded-full border-2 border-[#042222] hover:bg-black hover:shadow-lg transition" />
                  <h4 className="text-xl font-semibold text-[#00D47E]">{item.title}</h4>
                </div>
                <div className="text-gray-700 text-sm leading-relaxed">
                  {typeof item.description === "string" ? (
                    <p>{item.description}</p>
                  ) : (
                    item.description
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OfficeServiceDescription section */}
      <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#042222]">
          The Best <span className="text-[#00D47E]">Office Cleaning</span> Referral Agency
        </h2>

        <div className="space-y-12">
          {content.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 items-start`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full lg:w-1/3 rounded-lg shadow-md object-cover"
                loading="lazy"
              />
              <div className="lg:w-2/3">
                <h3 className="text-xl font-semibold mb-2 text-[#00D47E]">{item.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* FAQ section */}
      <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 text-[#042222]">Frequently <span className="text-[#00D47E]">Asked</span> Questions</h2>

        <div className="space-y-4 text-left">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border rounded-md bg-white shadow-sm">
              <button
                onClick={() => toggle(idx)}
                className="w-full px-4 py-3 flex justify-between items-center text-left bg-[#AFF9C7] hover:bg-[#00D47E]"
              >
                <p className="text-gray-800 font-medium">{faq.question}</p>
                <span className="text-2xl text-black">{openIndex === idx ? "−" : "+"}</span>
              </button>
              {openIndex === idx && (
                <div className="px-4 text-[#042222] bg-[#dcf3ea] text-sm p-2 delay-200">
                  {typeof faq.answer === "string" ? (
                    <p>{faq.answer}</p>
                  ) : (
                    faq.answer
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* last section */}
    <section className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-start">
        <div className="text-gray-800 space-y-6">
          <h2 className="text-3xl font-bold">
            You Won’t Get This from an <span className="text-[#00D47E]">Office Cleaning</span> Company
          </h2>
          <p className="text-sm leading-relaxed">
            Offices come in all shapes and sizes—just like their demands.
            Don’t overspend on expensive cleaning companies. Book through
            SR.Clean and connect directly with the professionals who will
            clean your space. You can create a custom recurring schedule,
            select time preferences, and manage everything from our app or
            website. Whether it’s once a week or daily, we’ve got you covered.
          </p>

          <h2 className="text-3xl font-bold">
          <span className="text-[#00D47E]">Office Cleaning </span>Services That Won’t Clean Out Your Bank
          </h2>
          <p className="text-sm leading-relaxed">
            Looking for affordable office cleaning without sacrificing quality?
            SR.Clean has your back. Enter your postal code and job details to
            see transparent pricing—no surprises, no sticker shock. We believe
            in great service at the right price, and we let you choose from
            top-rated professionals who fit your budget and needs.
          </p>
        </div>
      </div>
    </section>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default OfficeCleaning