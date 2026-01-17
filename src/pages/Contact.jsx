import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hi Ajay, I’d like to connect.\n\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
    window.open(
      `https://wa.me/918287727391?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-125 h-125 bg-indigo-500/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-125 h-125 bg-violet-500/20 blur-[120px] rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full max-w-4xl"
      >
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-6xl font-bold text-zinc-100">
            Let’s build something
          </h1>
          <p className="mt-6 text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Whether you have a project idea, a collaboration in mind, or just
            want to say hello — my inbox is always open.
          </p>
        </div>

        {/* Quick contact actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <ContactCard
            icon={Mail}
            title="Email"
            value="dev8.ajay@gmail.com"
          />
          <ContactCard
            icon={Phone}
            title="Phone"
            value="+91 82877 27391"
          />
          <ContactCard
            icon={MapPin}
            title="Location"
            value="Gurugram, India"
          />
        </div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          viewport={{ once: true }}
          className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-10"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Input
              label="Your Name"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
            />
            <Input
              label="Your Email"
              name="email"
              type="email"
              placeholder="john@email.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-8">
            <label className="block text-sm text-zinc-400 mb-2">
              Message
            </label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your idea or project…"
              className="w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:border-indigo-400 transition resize-none"
              required
            />
          </div>

          <button
            type="submit"
            className="group w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-indigo-500 text-white font-semibold hover:bg-indigo-600 transition-all"
          >
            Send via WhatsApp
            <ArrowUpRight
              size={18}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition"
            />
          </button>
        </motion.form>
      </motion.div>
    </section>
  );
};

/* Reusable components */

const ContactCard = ({ icon: Icon, title, value }) => (
  <motion.div
    whileHover={{ y: -6 }}
    className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-center"
  >
    <Icon size={28} className="mx-auto mb-3 text-indigo-400" />
    <h3 className="text-zinc-200 font-medium">{title}</h3>
    <p className="mt-1 text-sm text-zinc-400">{value}</p>
  </motion.div>
);

const Input = ({ label, ...props }) => (
  <div>
    <label className="block text-sm text-zinc-400 mb-2">{label}</label>
    <input
      {...props}
      required
      className="w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:border-indigo-400 transition"
    />
  </div>
);

export default Contact;
