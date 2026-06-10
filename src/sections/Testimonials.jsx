import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "../animations/variants";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Patel",
      company: "Rajmani Jewellers",
      text: "HS Tech transformed our business with an amazing mobile app. The quality and professionalism exceeded our expectations!",
      rating: 5,
      avatar: "👔",
    },
    {
      name: "Priya Singh",
      company: "Property Bazar",
      text: "Outstanding team that delivers results. Their expertise in real estate tech is unmatched. Highly recommend!",
      rating: 5,
      avatar: "👩‍💼",
    },
    {
      name: "Amit Kumar",
      company: "Second Income",
      text: "The best decision we made was partnering with HS Tech. Our fintech platform is now industry-leading.",
      rating: 5,
      avatar: "👨‍💻",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="section-container px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-10 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            What Clients Say
          </h2>
          <p className="text-secondary text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
            Hear from our satisfied clients about their experience working with
            us
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          {...staggerContainer}
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              className="glass p-8 rounded-xl hover-lift"
              variants={staggerItem}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">
                    ⭐
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-secondary mb-6 italic">"{testimonial.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-secondary">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
