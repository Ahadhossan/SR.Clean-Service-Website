/** @format */
import { useState } from "react";
import Footer from "../Helper/Footer/Footer";
import { worksteps } from "../Data/utils";
import { benefits, cleaningSections, faqs, features } from "../Data/house";
import ButtonFill from "../Button/ButtonFill";
import PageHeader from "../Helper/PageHeader/PageHeader";
import { CheckCheck, Star, StarHalf } from "lucide-react";
import HouseCleaningFrom from "../Helper/From/HouseCleaningForm";

const HouseCleaning = () => {

  // faq section
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* header section */}
      <PageHeader
        breadcrumb={[{ label: "Home", path: "/home" }, { label: "House Cleaning" }]}
      />

      {/* form section */}
      <section className="bg-[#EDFFF8] py-12 px-4" id="move-in-out">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            House Cleaning
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
            Whether you are moving in or out, SR.Clean connects you with trusted professionals for thorough, detailed house cleaning—ensuring a spotless start or a stress-free move-out that helps you secure your deposit. Book hassle-free, top-rated cleaning today.
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
        <HouseCleaningFrom/>
      </div>
    </section>

      {/* works */}
      <div className="w-full py-12 bg-[#EDFFF8]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold border-b-2 inline-block border-[#042222] text-[#042222] pb-1">
              How <span className="text-[#00D47E]">SR.CLEAN</span> Works
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row justify-center gap-8">
            {worksteps.map((step, index) => (
              <div
                key={index}
                className="text-center flex-1 bg-white border rounded-lg shadow-sm p-6 flex flex-col items-center hover:shadow-md transition "
              >
                <img
                  src={step.img}
                  alt={step.title}
                  className="mx-auto mb-4 w-20 h-20 rounded-full p-4 border-2 border-[#042222] hover:bg-black"
                />
                <h3 className="text-xl font-semibold mb-2 text-[#00D47E]">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Most Reliable section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#042222]">
              The Most Reliable Way to Book a <span className="text-[#00D47E]">House Cleaning</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Here how it works -- just go to our website or app and tell us
              your postalcode and how big your house, apartment, or flat is. Handy
              will then connect you with a top-rated home cleaning professional
              to help take the stress out of your life.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-start gap-4 bg-white border rounded-lg shadow-sm p-6 hover:shadow-md transition hover:bg-[#dcf3ea]"
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="shrink-0 mx-auto mb-4 w-20 h-20 rounded-full p-4 border-2 border-[#042222] hover:bg-black hover:shadow-lg transition"
                />
                <div>
                  <h4 className="text-xl font-semibold mb-1 text-[#00D47E]">{item.title}</h4>
                  <p className="text-gray-700 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Included section */}
      <section className="py-16 bg-[#F8FBFF]">
        <div className="text-center mb-12 px-4 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-[#042222]">
            What Included in a <span className="text-[#00D47E]">House Cleaning</span>?
          </h2>
          <h4 className="text-gray-600 text-lg">
            Here is what you can generally expect from a house cleaning booked
            through SR.Clean. Use our app to share your specific needs with
            your cleaner!
          </h4>
        </div>

        <div className="space-y-16">
          {cleaningSections.map((section, idx) => (
            <div
              key={idx}
              className={`bg-fit ${section.bg} flex flex-col md:flex-row ${
                section.side === "right" ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="md:w-1/2"></div>
              <div
                className={`bg-white/90 p-8 md:w-1/2 flex flex-col justify-center`}
              >
                <h4 className="text-2xl font-semibold mb-4 text-[#00D47E]">{section.title}</h4>
                {section.description && (
                  <p className="text-gray-700 mb-4">{section.description}</p>
                )}
                <ul className="list-none list-inside text-gray-700 space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex gap-2"><img src="../../src/assets/arrows.png" alt="" className="w-6" />{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Faq's section */}
      <section className="bg-[#EDFFF8] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#042222]">
            Frequently <span className="text-[#00D47E]">Asked</span> Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-md shadow-sm"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center px-4 py-3 text-left text-gray-800 font-medium bg-[#AFF9C7] hover:bg-[#00D47E]"
                >
                  <span>{faq.question}</span>
                  <span className="text-xl">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
                {openIndex === index && (
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

      {/* Why QuickClean section */}
      <section className="bg-[#F8FBFF] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#042222]">
            Here Why <span className="text-[#00D47E]">SR.Clean</span> is the Best Way to Book a House Cleaning
          </h2>

          <div className="space-y-10">
            {benefits.map((item, index) => (
              <div key={index}>
                <h4 className="text-xl font-semibold mb-2 text-[#042222]">{item.title}</h4>
                <p className="text-gray-700 text-sm">
                  {typeof item.description === "string"
                    ? item.description
                    : item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="px-6 py-3">
              <ButtonFill>Get Started</ButtonFill>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default HouseCleaning;
