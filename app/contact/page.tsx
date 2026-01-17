'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Utensils } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Header Section */}
      <section className="relative py-20 bg-[url('https://www.mashed.com/img/gallery/surprising-sides-you-can-find-at-almost-all-fast-food-restaurants/l-intro-1680842197.jpg')] bg-cover bg-center">
        <div className="absolute inset-0  "></div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-4"
          >
            <span className="bg-red-600 p-3 rounded-full shadow-lg shadow-red-600/20">
              <Utensils size={32} className="text-white" />
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-6xl md:text-7xl font-bold text-white uppercase italic tracking-tighter"
          >
            Get In <span className="text-yellow-400">Touch</span>
          </motion.h1>
          <p className="text-white mt-4 max-w-xl mx-auto text-lg">
            Have a question about our secret sauce or a bulk order? We're here to help you satisfy those cravings!
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Contact Info Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <h2 className="text-4xl font-black uppercase italic tracking-tight mb-8">
              Contact <span className="text-red-600 font-normal underline decoration-yellow-400">Details</span>
            </h2>

            {[
              { icon: MapPin, title: 'Our Kitchen', desc: '123 Food Street, Tasty City, TC 12345' },
              { icon: Phone, title: 'Call Center', desc: '(555) 123-4567' },
              { icon: Mail, title: 'Email Support', desc: 'hello@foodix.com' },
              { icon: Clock, title: 'Cooking Hours', desc: 'Mon - Sun: 10:00 AM - 11:00 PM' },
            ].map((item, index) => (
              <div key={index} className="flex items-center p-6 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-colors group">
                <div className="bg-yellow-400 p-4 rounded-2xl text-black mr-6 group-hover:rotate-12 transition-transform">
                  <item.icon size={24} strokeWidth={3} />
                </div>
                <div>
                  <p className="text-xs font-black text-gray-500 uppercase tracking-widest mb-1">{item.title}</p>
                  <p className="text-xl font-bold italic">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right Column: Premium Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-[3rem] p-10 md:p-14 shadow-2xl text-black">
              <h3 className="text-3xl font-black uppercase italic tracking-tight mb-8">
                Send us a <span className="text-red-600">Message</span>
              </h3>
              
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400">Your Name</label>
                  <input
                    type="text"
                    className="w-full px-6 py-4 bg-gray-100 border-none rounded-2xl focus:ring-4 focus:ring-yellow-400/20 transition-all placeholder:text-gray-400 font-bold"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-6 py-4 bg-gray-100 border-none rounded-2xl focus:ring-4 focus:ring-yellow-400/20 transition-all placeholder:text-gray-400 font-bold"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400">Subject</label>
                  <input
                    type="text"
                    className="w-full px-6 py-4 bg-gray-100 border-none rounded-2xl focus:ring-4 focus:ring-yellow-400/20 transition-all placeholder:text-gray-400 font-bold"
                    placeholder="How can we help?"
                  />
                </div>

                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400">Your Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-6 py-4 bg-gray-100 border-none rounded-3xl focus:ring-4 focus:ring-yellow-400/20 transition-all placeholder:text-gray-400 font-bold resize-none"
                    placeholder="Tell us about your order..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="md:col-span-2 bg-red-600 text-white py-5 rounded-2xl font-black uppercase italic tracking-widest shadow-xl shadow-red-600/20 hover:bg-black transition-all flex items-center justify-center gap-3 mt-4"
                >
                  Fire It Away <Send size={20} strokeWidth={3} />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Professional Google Maps integration style */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 rounded-[3rem] overflow-hidden border-8 border-white/5 shadow-2xl relative h-[450px]"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937611493!2d-73.98731968459391!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1625500000000!5m2!1sen!2sus"
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }} 
            allowFullScreen 
            loading="lazy"
          ></iframe>
          <div className="absolute top-10 left-10 bg-black p-6 rounded-3xl border border-white/10 shadow-2xl hidden md:block">
            <p className="text-yellow-400 font-black uppercase tracking-tighter italic text-xl">Visit Our Hub 🔥</p>
            <p className="text-gray-400 text-sm mt-1">See you soon!</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}