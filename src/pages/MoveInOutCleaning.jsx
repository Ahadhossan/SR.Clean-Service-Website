/** @format */

import { useState } from "react";
import Footer from "../Helper/Footer/Footer";
import {CheckCheck, Star, StarHalf } from "lucide-react";
import { capabilities, content, faqs, steps } from "../Data/move";
import PageHeader from "../Helper/PageHeader/PageHeader";
import MoveInOutCleaningFrom from "../Helper/From/MoveInOutCleaningFrom";

const MoveInOutCleaning = () => {


  // faq section
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  return (
    <>
      {/* header section */}
      <PageHeader
        breadcrumb={[{ label: "Home", path: "/home" }, { label: "Move In Out Cleaning" }]}
      />

    {/* form section */}
      <section className="bg-[#EDFFF8] py-12 px-4" id="move-in-out">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Move Out Cleaning or Move In Cleaning
          </h1>

          {/* Rating */}
          <div className="flex items-center space-x-2 text-yellow-500">
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <StarHalf/>
            <span className="ml-2 text-sm text-[#00D47E]">
              23 Reviews
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-700">
            Whether you’re moving out and want your deposit back, or moving in
            and want a spotless start, SR.Clean helps you book trusted pros
            for detailed, deep cleaning.
          </p>

          {/* Capabilities */}
          <ul className="space-y-2 text-gray-700 text-sm">
            <li className="flex items-start gap-2">
            <CheckCheck className="text-green-600"/>
              Friendly 24/7 customer service.
            </li>
            <li className="flex items-start gap-2">
            <CheckCheck className="text-green-600"/>
              Affordable, upfront pricing.
            </li>
            <li className="flex items-start gap-2">
            <CheckCheck className="text-green-600"/>
              Book exact times—no vague windows.
            </li>
          </ul>
        </div>

        {/* Right: Form */}
        <MoveInOutCleaningFrom/>
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

    {/* capabilities section */}
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 text-[#042222]">
          The Trusted Name in <span className="text-[#00D47E]">Move Out or In Cleaning</span> Referrals
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
              <p className="text-gray-700 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* service section */}
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#042222]">
          The Best <span className="text-[#00D47E]">Move Out or In Cleaning</span> Referral Agency
        </h2>

        <div className="space-y-12">
          {content.map((item, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-start gap-8"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full lg:w-1/3 rounded-lg shadow-sm object-cover"
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
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 text-[#042222]">Frequently <span className="text-[#00D47E]">Asked</span> Questions</h2>

        <div className="space-y-4 text-left">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border rounded-md shadow-sm bg-white">
              <button
                onClick={() => toggle(idx)}
                className="w-full text-left px-4 py-3 flex justify-between items-center bg-[#AFF9C7] hover:bg-[#00D47E]"
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

    {/* last sections */}
    <section className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-start">
        <div className="space-y-8 text-gray-800">
          <h2 className="text-3xl font-bold">
            Outsource your stress with a <span className="text-[#00D47E]">move out cleaning</span>
          </h2>
          <p>
            Investing in a move out cleaning may be the single most important
            thing you do in those final days. Few things hurt more than finding
            out weeks later that your deposit isn’t coming back.
          </p>
          <p>
            Moving to a new home is one of life’s most stressful events. Between
            packing, hardware store runs, and hiring movers, cleaning can be
            overwhelming. Let SR.Clean help shoulder the load!
          </p>

          <h2 className="text-3xl font-bold">
          <span className="text-[#00D47E]">Move in cleaning</span> services are for landlords, too
          </h2>
          <p>
            For property owners, first impressions matter. Whether your unit will
            be shown soon or sit vacant, it needs to shine. A pristine look helps
            attract renters and justify top rental value.
          </p>
          <p>
            Even if a tenant cleaned before leaving, hidden mold or food waste
            could cause bigger issues. Professional move out cleaning prevents
            problems like pests or odors and protects your property long-term.
          </p>
          <p>
            Affordable cleaning now can mean fewer headaches later—and a great
            start with your new tenants.
          </p>
          <p>
            SR.Clean lets you book move in cleaning at any time that suits
            you—tomorrow or two weeks from now. You’re in full control.
          </p>
        </div>
      </div>
    </section>

      {/* Footer */}
      <Footer/>
    </>
  );
};

export default MoveInOutCleaning;
