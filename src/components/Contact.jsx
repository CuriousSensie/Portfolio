import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const emailParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        emailParams,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        (response) => {
          setIsSubmitting(false);
          setStatusMessage("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            message: "",
          });

          // Clear status message after 3 seconds
          setTimeout(() => setStatusMessage(""), 3000);
        },
        (error) => {
          setIsSubmitting(false);
          setStatusMessage("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <motion.div id="contact" className="border-b border-neutral-700 py-20">
      <div className="container mx-auto px-6 lg:flex lg:flex-row-reverse">
        {/* Title Section */}
        <motion.h1
          className="text-3xl md:text-4xl lg:text-5xl font-thin tracking-tight mb-8 text-center lg:text-left"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get in Touch
        </motion.h1>

        <motion.div
          className="text-center lg:text-left max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <p className="text-lg mb-6">
            I'd love to hear from you! Whether you have a question, want to
            collaborate, or just want to say hi, feel free to send me a message.
          </p>

          {/* Status message with animation */}
          {statusMessage && (
            <motion.div className="mb-4 text-sm text-green-500">
              {statusMessage}
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="flex-1">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 ml-2 text-left"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-neutral-800 text-white rounded-lg border border-neutral-700 focus:ring-2 focus:ring-purple-600 mb-2"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 ml-2 text-left"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-neutral-800 text-white rounded-lg border border-neutral-700 focus:ring-2 focus:ring-purple-600"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2 ml-2 text-left"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="w-full px-4 py-2 bg-neutral-800 text-white rounded-lg border border-neutral-700 focus:ring-2 focus:ring-purple-600"
                placeholder="Your Message"
                required
              />
            </div>
            {/* Animated Send Button */}
            <motion.button
              type="submit"
              className={`w-full py-3 px-6 bg-purple-700 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 hover:bg-purple-600 ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
              whileTap={{ scale: 0.95 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
