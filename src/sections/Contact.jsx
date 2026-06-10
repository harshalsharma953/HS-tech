import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import {
  staggerContainer,
  staggerItem,
  fadeInUp,
} from "../animations/variants";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [submitted, setSubmitted] = React.useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: <FiMail className="w-6 h-6" />,
      title: "Email",
      value: "hs.techind@gmail.com",
    },
    {
      icon: <FiPhone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 7024630069",
    },
    {
      icon: <FiMapPin className="w-6 h-6" />,
      title: "Address",
      value: "Indore - Betma - 453001, Madhya Pradesh, India",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-dark-secondary">
      <div className="section-container">
        {/* Header */}
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Have a project in mind? Let's connect and discuss your next big
            idea.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Contact Info */}
          <motion.div className="space-y-6" {...staggerContainer}>
            {contactInfo.map((info, idx) => (
              <motion.a
                key={idx}
                href="#"
                className="glass p-6 rounded-xl hover-lift flex gap-4 items-start group"
                variants={staggerItem}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl text-primary flex-shrink-0 mt-1">
                  {info.icon}
                </div>
                <div>
                  <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                    {info.title}
                  </h3>
                  <p className="text-secondary text-sm">{info.value}</p>
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
                href="https://wa.me/917024630069"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 btn-primary"
                variants={staggerItem}
                whileHover={{ scale: 1.05 }}
              >
                💬 WhatsApp Us
              </motion.a>
              <motion.a
                href="mailto:hs.techind@gmail.com"
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
              className="glass p-8 rounded-xl space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-4">
                {/* Name */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    className="w-full bg-dark-secondary border border-primary/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <span className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </span>
                  )}
                </motion.div>

                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: "Email is required" })}
                    className="w-full bg-dark-secondary border border-primary/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary transition-colors"
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </span>
                  )}
                </motion.div>
              </div>

              {/* Subject */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  {...register("subject", { required: "Subject is required" })}
                  className="w-full bg-dark-secondary border border-primary/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="Project inquiry"
                />
                {errors.subject && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.subject.message}
                  </span>
                )}
              </motion.div>

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  rows="5"
                  className="w-full bg-dark-secondary border border-primary/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
                {errors.message && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </span>
                )}
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {submitted ? "✓ Message Sent!" : "Send Message"}
              </motion.button>

              {/* Success Message */}
              {submitted && (
                <motion.p
                  className="text-center text-green-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Thank you! We'll get back to you soon.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <motion.div
          className="w-full h-96 rounded-xl overflow-hidden glass"
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
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
