import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import {
  staggerContainer,
  staggerItem,
  fadeInUp,
} from "../animations/variants";
import { FiPhone, FiMail, FiMapPin, FiGlobe } from "react-icons/fi";
import { COMPANY_INFO } from "../data/content";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (data) => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "f2ed87b7-085f-45b8-8dbc-298c276bbdcf",
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
          from_name: "HS Tech Website",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        reset();
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <FiMail className="w-6 h-6" />,
      title: "Email",
      value: COMPANY_INFO.email,
      href: `mailto:${COMPANY_INFO.email}`,
    },
    {
      icon: <FiMail className="w-6 h-6" />,
      title: "HR Department",
      value: "hr.hstechind@gmail.com",
      href: "mailto:hr.hstechind@gmail.com",
    },
    {
      icon: <FiPhone className="w-6 h-6" />,
      title: "Phone",
      value: COMPANY_INFO.phones.join(" / "),
      href: `tel:${COMPANY_INFO.phones[0].replace(/\s/g, "")}`,
    },
    {
      icon: <FiMapPin className="w-6 h-6" />,
      title: "Address",
      value: COMPANY_INFO.address,
      href: COMPANY_INFO.googleMaps,
    },
    {
      icon: <FiGlobe className="w-6 h-6" />,
      title: "Website",
      value: "hstechind.netlify.app",
      href: COMPANY_INFO.website,
    },
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-dark-secondary">
      <div className="section-container px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div className="text-center mb-10 sm:mb-12 md:mb-16" {...fadeInUp}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">Get In Touch</h2>
          <p className="text-secondary text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's connect and discuss your next big
            idea.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {/* Contact Info */}
          <motion.div className="space-y-4" {...staggerContainer}>
            {contactInfo.map((info, idx) => (
              <motion.a
                key={idx}
                href={info.href}
                target={info.href.startsWith("http") ? "_blank" : undefined}
                rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="glass p-4 sm:p-5 rounded-xl hover-lift flex gap-3 sm:gap-4 items-start group block"
                variants={staggerItem}
                whileHover={{ scale: 1.03 }}
              >
                <div className="text-xl text-primary flex-shrink-0 mt-1">
                  {info.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-sm sm:text-base mb-1 group-hover:text-primary transition-colors">
                    {info.title}
                  </h3>
                  <p className="text-secondary text-xs sm:text-sm">{info.value}</p>
                </div>
              </motion.a>
            ))}

            {/* CTA Buttons */}
            <motion.div
              className="space-y-3 pt-4"
              {...staggerContainer}
              transition={{ ...staggerContainer.transition, delay: 0.3 }}
            >
              <motion.a
                href={`https://wa.me/${COMPANY_INFO.phones[0].replace(/[+\s]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 btn-primary"
                variants={staggerItem}
                whileHover={{ scale: 1.05 }}
              >
                💬 WhatsApp Us
              </motion.a>
              <motion.a
                href={`mailto:${COMPANY_INFO.email}`}
                className="w-full flex items-center justify-center gap-2 btn-secondary"
                variants={staggerItem}
                whileHover={{ scale: 1.05 }}
              >
                📧 Send Email
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="glass p-5 sm:p-6 md:p-8 rounded-xl space-y-4 sm:space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    className="w-full bg-dark-secondary border border-primary/20 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 text-white text-sm focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <span className="text-red-500 text-xs mt-1 block">
                      {errors.name.message}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: "Email is required" })}
                    className="w-full bg-dark-secondary border border-primary/20 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 text-white text-sm focus:outline-none focus:border-primary transition-colors"
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <span className="text-red-500 text-xs mt-1 block">
                      {errors.email.message}
                    </span>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs sm:text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  {...register("subject", { required: "Subject is required" })}
                  className="w-full bg-dark-secondary border border-primary/20 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 text-white text-sm focus:outline-none focus:border-primary transition-colors"
                  placeholder="Project inquiry"
                />
                {errors.subject && (
                  <span className="text-red-500 text-xs mt-1 block">
                    {errors.subject.message}
                  </span>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs sm:text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  rows="5"
                  className="w-full bg-dark-secondary border border-primary/20 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 text-white text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
                {errors.message && (
                  <span className="text-red-500 text-xs mt-1 block">
                    {errors.message.message}
                  </span>
                )}
              </div>

              {/* Error Message */}
              {error && (
                <p className="text-center text-red-400 text-sm">{error}</p>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full btn-primary"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                disabled={loading}
              >
                {loading
                  ? "Sending..."
                  : submitted
                  ? "✓ Message Sent!"
                  : "Send Message"}
              </motion.button>

              {/* Success Message */}
              {submitted && (
                <motion.p
                  className="text-center text-green-400 text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Thank you! We'll get back to you soon.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>

        {/* Google Map */}
        <motion.div
          className="w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden glass"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.9097969046564!2d75.8739!3d22.7196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962e2b5e5e5e5e5%3A0x5e5e5e5e5e5e5e5e!2sIndore%2C%20Betma%2C%20Madhya%20Pradesh%20453001!5e0!3m2!1sen!2sin!4v1234567890"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="HS Tech Location"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
