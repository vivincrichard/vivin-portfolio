import {
  Github,
  Instagram,
  Linkedin,
  LocationEdit,
  Mail,
  Phone,
} from "lucide-react";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser"; 

export const Contact = () => {
  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const socialLinks = [
    {
      icon: <Linkedin />,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/vivin-christopher-3633a7202/",
    },
    {
      icon: <Github />,
      name: "GitHub",
      href: "https://github.com/vivincrichard",
    },
    { icon: <Instagram />, name: "Instagram", href: "https://instagram.com" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          toast.error("Failed to send message");
          console.error("EmailJS error:", error);
        }
      );
  };

  return (
    <section id="contact" className="min-h-[90vh] bg-gray-100 py-12 px-4">
      {/* Header */}
      <div className="text-center mb-10">
        <p className="text-3xl md:text-4xl font-bold text-gray-800">
          Get In Touch
        </p>
        <p className="text-gray-600 mt-3">
          Feel free to reach out. I'm always open to discussing new
          opportunities.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-center md:text-left">
            Contact Information
          </h2>

          {/* Email */}
          <div className="flex items-center gap-4 bg-white p-5 rounded-lg shadow hover:scale-105 transition">
            <Mail className="text-blue-600" />
            <div>
              <p className="font-semibold">Mail</p>
              <p className="text-gray-600">vivincrichard@gmail.com</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4 bg-white p-5 rounded-lg shadow hover:scale-105 transition">
            <Phone className="text-blue-600" />
            <div>
              <p className="font-semibold">Contact</p>
              <p className="text-gray-600">+91 90033 60649</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-4 bg-white p-5 rounded-lg shadow hover:scale-105 transition">
            <LocationEdit className="text-blue-600" />
            <div>
              <p className="font-semibold">Location</p>
              <p className="text-gray-600">Coimbatore, Tamil Nadu, India</p>
            </div>
          </div>

          {/* Social Media */}
          <div className="bg-white p-5 rounded-lg shadow text-center">
            <p className="font-semibold mb-3">Social Media</p>
            <div className="flex justify-center gap-6 text-gray-700">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition"
                  aria-label={item.name}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Form */}
        <div>
          <h2 className="text-2xl font-semibold text-center md:text-left mb-6">
            Send a Message
          </h2>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow space-y-5"
          >
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
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
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full border border-gray-300 px-4 py-2 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition font-semibold"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
