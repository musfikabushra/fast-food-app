'use client';

import { FormEvent, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setSubmitted(false);
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-[#fffdfa] pt-20 pb-12">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter italic">
            Get In <span className="text-red-600">Touch</span>
          </h1>
          <div className="h-2 w-24 bg-yellow-400 mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 mt-6 text-lg max-w-xl mx-auto">
            Have a question about our menu, catering, or just want to say hi? We'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 max-w-6xl mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100">
          
          {/* Contact Information Sidebar (2/5 Cols) */}
          <div className="lg:col-span-2 bg-slate-900 p-10 md:p-16 text-white flex flex-col justify-between relative overflow-hidden">
            {/* Decorative element */}
            <div className="absolute top-[-10%] right-[-10%] w-40 h-40 bg-red-600/20 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-10 tracking-tight">Contact Information</h2>
              
              <div className="space-y-10">
                <div className="flex items-start space-x-5">
                  <span className="text-3xl">📍</span>
                  <div>
                    <h3 className="font-bold text-yellow-400 uppercase text-sm tracking-widest mb-1">Visit Us</h3>
                    <p className="text-slate-300 leading-relaxed">123 Main Street, Foodville, CA 90210</p>
                  </div>
                </div>

                <div className="flex items-start space-x-5">
                  <span className="text-3xl">📞</span>
                  <div>
                    <h3 className="font-bold text-yellow-400 uppercase text-sm tracking-widest mb-1">Call Us</h3>
                    <p className="text-slate-300 font-medium text-lg hover:text-white transition">
                      <a href="tel:+1234567890">(123) 456-7890</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-5">
                  <span className="text-3xl">✉️</span>
                  <div>
                    <h3 className="font-bold text-yellow-400 uppercase text-sm tracking-widest mb-1">Email Us</h3>
                    <p className="text-slate-300 truncate hover:text-white transition">
                      <a href="mailto:info@fastfoodhaven.com">hello@fastfood.com</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-5">
                  <span className="text-3xl">🕐</span>
                  <div>
                    <h3 className="font-bold text-yellow-400 uppercase text-sm tracking-widest mb-1">Working Hours</h3>
                    <p className="text-slate-300 text-sm">Mon-Fri: 10am - 10pm</p>
                    <p className="text-slate-300 text-sm">Sat-Sun: 11am - 11pm</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-800 flex space-x-6 relative z-10">
              {['FB', 'TW', 'IG', 'YT'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-600 transition duration-300 font-bold text-xs">
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form (3/5 Cols) */}
          <div className="lg:col-span-3 bg-white p-10 md:p-16">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full flex flex-col items-center justify-center text-center space-y-6"
                >
                  <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-5xl animate-bounce">
                    ✓
                  </div>
                  <h2 className="text-4xl font-black text-slate-900 uppercase">Message Sent!</h2>
                  <p className="text-gray-500 text-lg">Our team will get back to you faster than our delivery!</p>
                </motion.div>
              ) : (
                <motion.form 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-500 pl-1">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-red-600 transition outline-none placeholder:text-slate-300 font-medium"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-500 pl-1">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-red-600 transition outline-none placeholder:text-slate-300 font-medium"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-500 pl-1">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-red-600 transition outline-none placeholder:text-slate-300 font-medium"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-500 pl-1">Subject</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-red-600 transition outline-none font-medium appearance-none"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="feedback">Feedback</option>
                        <option value="catering">Catering Request</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-500 pl-1">Your Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-5 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-red-600 transition outline-none placeholder:text-slate-300 font-medium resize-none"
                      placeholder="Tell us everything..."
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-red-600 text-white font-black py-5 rounded-2xl shadow-xl shadow-red-200 hover:bg-slate-900 transition-all duration-300 uppercase tracking-widest italic"
                  >
                    Send Delicious Message 🚀
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}