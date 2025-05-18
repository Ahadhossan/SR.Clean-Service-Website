/** @format */

import ButtonFill from "../Button/ButtonFill";
import { reasons, serviceSections, steps, uspList } from "../Data/utils";
import Footer from "../Helper/Footer/Footer";
import PageHeader from "../Helper/PageHeader/PageHeader";

const About = () => {
  return (
    <>
      {/* header section */}
      <PageHeader
        breadcrumb={[{ label: "Home", path: "/home" }, { label: "About" }]}
      />

      {/* page heading section */}
      <section className="bg-[#EFEDCE] py-16">
        <div className="max-w-8xl mx-auto px-4">
          <div className="text-start">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0F214D]">
              About Our Professional Housecleaners
            </h1>
          </div>
        </div>
      </section>

      {/* clean hose section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Text Content */}
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-[#00D47E]">
                We Clean Houses
              </h2>
              <div className="text-gray-700 text-base leading-relaxed">
                <p>
                  At SR.Clean, we specialize in providing professional, detailed
                  house cleaning services tailored to your unique needs. Our
                  trained and trusted cleaners use eco-friendly products and
                  proven methods to ensure your home is spotless, sanitized, and
                  refreshed. Whether it’s routine cleaning, deep cleaning, or
                  move-in/move-out service, we handle every task with care and
                  attention to detail. We understand that a clean home means a
                  peaceful life, which is why we offer flexible scheduling,
                  competitive pricing, and guaranteed satisfaction. From
                  kitchens to bathrooms and every corner in between, we clean
                  with pride so you can relax in a healthier, happier home.
                </p>
              </div>
              {/* Add CTA buttons here if needed */}
            </div>

            {/* Image Content */}
            <div className="md:w-1/2 flex flex-col items-center">
              <h2 className="text-2xl font-semibold text-center mb-4 md:hidden">
                We Clean Houses
              </h2>
              <div className="w-full max-w-md">
                <img
                  src="../../src/assets/blog-1.jpg"
                  alt="person with a pink glove and spray bottle"
                  loading="lazy"
                  className="rounded-lg shadow-md w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* quickclean trust section */}
      <section className="bg-[#EAE9E5] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col-reverse md:flex-row items-center gap-10">
            {/* Text Content */}
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                A <span className="text-[#00D47E]">SR.CLEAN</span> Service You
                Can Trust
              </h2>

              <div className="space-y-4 text-gray-700">
                <p>
                  A QUICKCLEAN service you can trust — designed for busy
                  lifestyles and high standards. Our professional cleaners are
                  thoroughly vetted, reliable, and equipped to handle every
                  corner of your home with care. From flexible scheduling to
                  eco-friendly products and consistent results, we ensure your
                  space is fresh, clean, and welcoming. Experience peace of mind
                  knowing your satisfaction is always our top priority.
                </p>

                <ul
                  className="list-disc pl-6 space-y-2 list-style: disc outside url(/brand/_assets/images/mly-list-checkmark.svg);
    padding: 0 0 0 1.5rem;"
                >
                  <a className="flex gap-4">
                    <img src="../../src/assets/download.png" alt="" /> Locally
                    owned.
                  </a>
                  <a className="flex gap-4">
                    <img src="../../src/assets/download.png" alt="" /> Supplies
                    provided.
                  </a>
                  <a className="flex gap-4">
                    <img src="../../src/assets/download.png" alt="" /> Equipment
                    provided.
                  </a>
                  <a className="flex gap-4">
                    <img src="../../src/assets/download.png" alt="" /> Fully
                    insured.
                  </a>
                  <a className="flex gap-4">
                    <img src="../../src/assets/download.png" alt="" /> No term
                    contracts.
                  </a>
                  <a className="flex gap-4">
                    <img src="../../src/assets/download.png" alt="" />
                    Neighborly Done Right Promise<sup>®</sup>.
                  </a>
                  <a className="flex gap-4">
                    <img src="../../src/assets/download.png" alt="" /> Trusted
                    and experienced.
                  </a>
                </ul>
              </div>
            </div>

            {/* Video Section */}
            <div className="md:w-1/2 w-full flex justify-center">
              <div className="w-full max-w-lg">
                <div className="relative pb-[56.25%] h-0 rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/aeeA31ViGjI?si=1EMkZ8cDbghpX3PD"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* booking steps */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-9xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">
            Book your <span className="text-[#00D47E]">SR.CLEAN</span> service
            in 3 easy steps
          </h2>

          {/* Steps Grid */}
          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-3 mb-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-14 h-14 mb-4"
                  loading="lazy"
                />
                <h3 className="text-xl font-semibold text-[#00D47E] mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm max-w-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <div className="flex flex-col items-center">
              <a href="#" className="px-6 py-3 ">
                <ButtonFill>Book Your Home Clean</ButtonFill>
              </a>
              <span className="text-sm text-gray-500 mt-2">
                34 cleans booked in the last 24 hours
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* section */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-10">
          {/* Left Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://cdn.prod.website-files.com/5f5be145dea76ffe978023b7/5f715d3186b23c020a92284f_Second%202.svg"
              alt="House cleaner illustration"
              className="w-full max-w-sm"
              loading="lazy"
            />
          </div>

          {/* Right Content */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">
              We hold our house cleaners to <br /> the highest standards
            </h2>

            <ul className="space-y-3 text-gray-700">
              {uspList.map((usp, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-600 mr-2 text-xl">✔</span>
                  <span>{usp}</span>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-6">
              <div>
                <a href="#" className="px-6 py-3">
                  <ButtonFill>Book Your Home Clean</ButtonFill>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 reasons section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">
            5 reasons to choose <span className="text-[#00D47E]">SR.CLEAN</span>
            , today
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <img
                  src={reason.img}
                  alt={reason.title}
                  className="w-16 h-16 mb-4"
                  loading="lazy"
                />
                <div className="text-gray-700 font-medium text-sm">
                  {reason.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* trust/security  section */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Your trust, security, and satisfaction are our top priorities
          </h2>

          {/* Service Categories */}
          <div className="grid gap-10 md:grid-cols-3">
            {serviceSections.map((section, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-64 object-cover rounded shadow mb-4 "
                  loading="lazy"
                />
                <h3 className="text-xl font-semibold text-[#00D47E] mb-4">
                  {section.title}
                </h3>
                <ul className="text-gray-700 space-y-2 text-sm text-left">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-green-600">✔</span>
                      <span>{item.replace("✔ ", "")}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*  */}
      <section className="w-full bg-white py-16 px-4">
        <div className="max-w-9xl mx-auto">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">
              Trusted by <span className="text-[#00D47E]">Thousands</span> of
              Families
            </h2>

            <div className="text-gray-700 text-base space-y-6 max-w-3xl mx-auto">
              <p>
                Hiring someone to clean your home can feel like a big decision.
                After all, not only do you want to hire the best house cleaning
                service you can, you want to make sure they’re professionals you
                can trust. SR.CLEAN is a well-known and established cleaning
                company—every franchise is fully insured, and every employee is
                fully vetted. That means you can rest easy with SR.CLEAN in your
                home.
              </p>
              <p>
                SR.CLEAN has always looked for ways to give back to our
                communities. Our locally owned and operated franchises are part
                of the communities they serve. Through the Ms.Foundation, we
                empower those communities to fight domestic violence and help
                give victims the opportunity to live happily. SR.CLEAN believes
                everyone deserves to feel comfortable and safe in their own
                homes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <Footer />
    </>
  );
};

export default About;
