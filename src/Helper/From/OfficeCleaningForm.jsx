/** @format */

import { useEffect, useState } from "react";

function OfficeCleaningForm() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    postal: "",
    hours: "",
    date: "",
    time: "",
    message: "",
    email: "",
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
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name || formData.name.trim().length < 2)
      newErrors.name = "Name must be at least 2 characters.";

    if (!/^\d{11,}$/.test(formData.number))
      newErrors.number = "Phone number must be at least 11 digits.";

    if (!formData.postal)
      newErrors.postal = "Postal code is required.";

    if (!formData.hours)
      newErrors.hours = "Please select the hours needed.";

    if (!formData.date)
      newErrors.date = "Please choose a preferred date.";

    if (new Date(formData.date) < new Date())
      newErrors.date = "Please select a future date.";

    if (!formData.time)
      newErrors.time = "Please choose a preferred time.";

    if (!formData.email || !emailRegex.test(formData.email))
      newErrors.email = "Enter a valid email address.";

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

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataObj,
      });

      const result = await response.json();

      if (result.success) {
        setSuccess("Message sent successfully!");
        setFormData({
          name: "",
          number: "",
          postal: "",
          hours: "",
          date: "",
          time: "",
          message: "",
          email: "",
        });
      } else {
        setSuccess("Failed to send message. Please try again.");
      }
    } catch {
      setSuccess("Error sending form. Try again later.");
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
    <div className="bg-[#001011] shadow-md p-6 rounded-lg">
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

      <form className="space-y-4" onSubmit={onSubmit}>
        <h3 className="text-xl font-semibold text-[#00D47E] mb-2">
          Book Your Office Cleaning
        </h3>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-2 border rounded px-4 py-2 focus:outline-blue-950 text-black"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div className="w-full">
            <input
              type="tel"
              name="number"
              placeholder="Phone Number"
              className="w-full p-2 border rounded px-4 py-2 focus:outline-blue-950 text-black"
              value={formData.number}
              onChange={handleChange}
            />
            {errors.number && <p className="text-red-500 text-sm">{errors.number}</p>}
          </div>
        </div>

        <div>
          <input
            type="text"
            name="postal"
            placeholder="Postal Code"
            className="w-full p-2 border rounded px-4 py-2 focus:outline-blue-950 text-black"
            value={formData.postal}
            onChange={handleChange}
          />
          {errors.postal && <p className="text-red-500 text-sm">{errors.postal}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-500">
            Hours Needed
          </label>
          <select
            name="hours"
            className="w-full p-2 border rounded mt-1 px-4 py-2 focus:outline-blue-950 text-black"
            value={formData.hours}
            onChange={handleChange}
          >
            <option value="">Select hours</option>
            {[...Array(15)].map((_, i) => {
              const h = 3 + i * 0.5;
              return (
                <option key={h} value={h}>
                  {h} hours
                </option>
              );
            })}
          </select>
          {errors.hours && <p className="text-red-500 text-sm">{errors.hours}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-500">
            Preferred Date
          </label>
          <input
            type="date"
            name="date"
            className="w-full p-2 border rounded mt-1 px-4 py-2 focus:outline-blue-950 text-black"
            value={formData.date}
            onChange={handleChange}
          />
          {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-500">
            Preferred Time
          </label>
          <input
            type="time"
            name="time"
            className="w-full p-2 border rounded mt-1 px-4 py-2 focus:outline-blue-950 text-black"
            value={formData.time}
            onChange={handleChange}
          />
          {errors.time && <p className="text-red-500 text-sm">{errors.time}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-500">
            Tell us about the job
          </label>
          <textarea
            name="message"
            className="w-full p-2 border rounded resize-none px-4 py-2 focus:outline-blue-950 text-black"
            placeholder="Details?"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full p-2 border rounded px-4 py-2 focus:outline-blue-950 text-black"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-[#00D47E] text-white py-2 rounded hover:bg-[#4ed39e] transition"
          disabled={loading}
        >
          {loading ? "Booking..." : "Book Now"}
        </button>
      </form>

      <p className="mt-4 text-xs text-gray-500">
        By clicking “Book Now,” you agree to our{" "}
        <a href="#" target="_blank" className="underline text-[#00D47E]">
          Terms
        </a>{" "}
        and{" "}
        <a href="#" target="_blank" className="underline text-[#00D47E]">
          Privacy Policy
        </a>
        . Messaging and data rates may apply.
      </p>
    </div>
  );
}

export default OfficeCleaningForm;
