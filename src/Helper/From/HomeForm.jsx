/** @format */

import { useEffect, useState } from "react";

const HomeForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error on change
  };

  const validate = () => {
    const newErrors = {};

    if (formData.name.trim().length < 2)
      newErrors.name = "Name must be at least 2 characters long.";

    if (!/^\d{11,}$/.test(formData.mobile))
      newErrors.mobile = "Mobile number must be at least 11 digits.";

    if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    )
      newErrors.email = "Invalid email address.";

    if (!formData.service)
      newErrors.service = "Please select a service.";

    if (formData.message.length > 500)
      newErrors.message = "Message cannot exceed 500 characters.";

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
      setFormData({
        name: "",
        mobile: "",
        email: "",
        service: "",
        message: "",
      });
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
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
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
      <h3 className="text-xl font-semibold mb-4 text-[#00D47E]">
        Get A Quote
      </h3>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-blue-950 text-black placeholder:text-gray-600"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-blue-950 text-black placeholder:text-gray-600"
          />
          {errors.mobile && (
            <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
          )}
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-blue-950 text-black placeholder:text-gray-600"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md text-black focus:outline-blue-950"
          >
            <option value="" className="text-[#00D47E]">
              Choose a service
            </option>
            <option value="Home Cleaning">Home Cleaning</option>
            <option value="Move Out Cleaning">Move Out Cleaning</option>
            <option value="Move In Cleaning">Move In Cleaning</option>
            <option value="Office Cleaning">Office Cleaning</option>
            <option value="Deep Cleaning">Deep Cleaning</option>
          </select>
          {errors.service && (
            <p className="text-red-500 text-sm mt-1">{errors.service}</p>
          )}
        </div>

        <div>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md resize-none focus:outline-blue-950 text-black placeholder:text-gray-600"
            rows="3"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default HomeForm;
