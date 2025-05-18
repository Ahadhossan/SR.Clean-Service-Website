/** @format */

import { useEffect, useState } from "react";
import ContactFooter from "../Helper/Footer/ContactFooter";
import PageHeader from "../Helper/PageHeader/PageHeader";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    type: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name || formData.name.length < 2) {
      newErrors.name = "Please enter a valid name.";
    }

    if (!/^\d{11,}$/.test(formData.number)) {
      newErrors.number = "Enter a valid number (min 11 digits).";
    }

    if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.type || formData.type.length < 3) {
      newErrors.type = "Please describe your problem briefly.";
    }

    if (formData.message.length < 5 || formData.message.length > 1000) {
      newErrors.message = "Message must be between 5 and 1000 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) return;

    setLoading(true);

    const formDataObj = new FormData();
    formDataObj.append("access_key", "276695ce-1e44-4cb0-bc1f-df51e6a92587");
    Object.entries(formData).forEach(([key, value]) =>
      formDataObj.append(key, value)
    );

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formDataObj,
    });

    const result = await response.json();

    if (result.success) {
      setSuccess("Message sent successfully!");
      setFormData({ name: "", email: "", number: "", type: "", message: "" });
    } else {
      setSuccess("Failed to send message. Please try again.");
    }

    setLoading(false);
  };

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(""), 4000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  return (
    <>
      <PageHeader
        breadcrumb={[{ label: "Home", path: "/home" }, { label: "Contact" }]}
      />

      <section className="bg-[#111] py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-10 bg-cyan-700 p-8 rounded-xl shadow-lg text-white">
            <div className="w-full lg:w-1/2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2348.290268266851!2d-73.6365533245197!3d45.50798983051696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc919bf1c09654f%3A0xd7dccd3c5ca8a38e!2s3105%20Chem.%20Bedford%20%238%2C%20Montreal%2C%20QC%20H3S%201G3%2C%20Canada!5e1!3m2!1sen!2sbd!4v1747569243983!5m2!1sen!2sbd"
                width="600"
                height="650"
                style={{ border: 0 }}
                className="w-full h-full rounded-lg shadow-lg"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="bg-white rounded-xl shadow-lg p-8 text-black">
                {success && (
                  <p
                    className={`text-center text-sm font-medium ${
                      success.includes("successfully")
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {success}
                  </p>
                )}
                <form onSubmit={onSubmit} className="space-y-4">
                  <div>
                    <label className="block mb-1 font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                      placeholder="Your Name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block mb-1 font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                      placeholder="Your Email"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block mb-1 font-medium text-gray-700">
                      Number
                    </label>
                    <input
                      type="tel"
                      name="number"
                      value={formData.number}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                      placeholder="Your Number"
                    />
                    {errors.number && (
                      <p className="text-red-500 text-sm">{errors.number}</p>
                    )}
                  </div>

                  <div>
                    <label className="block mb-1 font-medium text-gray-700">
                      Your Problem Type
                    </label>
                    <input
                      type="text"
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                      placeholder="Problem Name"
                    />
                    {errors.type && (
                      <p className="text-red-500 text-sm">{errors.type}</p>
                    )}
                  </div>

                  <div>
                    <label className="block mb-1 font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg resize-none focus:ring-2 focus:ring-blue-400 focus:outline-none"
                      placeholder="Your Message"
                      rows="4"
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-sm">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full font-semibold bg-[#00D47E] text-white py-2 rounded hover:bg-[#4ed39e] transition"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactFooter />
    </>
  );
};

export default Contact;
