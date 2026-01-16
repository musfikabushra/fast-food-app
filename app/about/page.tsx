'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

// Animation Variants
const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#fffdfa] text-slate-900">
      
      {/* 1. Hero Section with Parallax Effect */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=2070" 
          alt="Restaurant Kitchen"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter"
          >
            Our <span className="text-yellow-400 font-outline-2">Story</span>
          </motion.h1>
          <p className="text-white text-xl mt-4 font-medium max-w-xl mx-auto drop-shadow-md">
            Serving up joy, one bite at a time, since 2020.
          </p>
        </div>
      </section>

      {/* 2. Mission & Vision - Two Column Grid */}
      <section className="py-24 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeIn}>
            <h2 className="text-4xl font-black mb-6 uppercase border-b-4 border-red-600 inline-block">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Welcome to <span className="text-red-600 font-bold">FastFood Haven</span>, where quality meets convenience. 
              We believe that fast food doesn't have to compromise on quality or taste.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our mission is to provide exceptional fast food experiences with 
              <span className="font-semibold text-slate-800"> fresh ingredients, innovative recipes</span>, and outstanding customer service.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, rotate: 5 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image 
              src="https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&q=80&w=2070"
              alt="Fresh Salad"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* 3. Why Choose Us - Dark Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3">
              <h2 className="text-5xl font-black uppercase leading-none mb-6">
                Why <br /><span className="text-yellow-400">Choose Us?</span>
              </h2>
              <p className="text-slate-400">We don't just make food; we create experiences that keep you coming back.</p>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Locally Sourced", desc: "Farm-to-table ingredients every day." },
                { title: "Lightning Fast", desc: "Preparation and delivery in record time." },
                { title: "Affordable", desc: "Premium taste at prices you'll love." },
                { title: "Sustainable", desc: "Eco-friendly packaging and practices." }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ backgroundColor: "#ef4444" }}
                  className="p-8 border border-slate-700 rounded-2xl transition-colors group"
                >
                  <h3 className="text-xl font-bold mb-2 group-hover:text-white uppercase">{item.title}</h3>
                  <p className="text-slate-400 group-hover:text-red-50">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Statistics - Floating Cards */}
      <section className="py-20 -mt-10 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "500+", label: "Happy Customers Daily", icon: "😊" },
              { number: "50+", label: "Menu Items", icon: "🍕" },
              { number: "5+", label: "Years in Business", icon: "🏆" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-[2rem] shadow-xl text-center border-b-8 border-red-600"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <h3 className="text-4xl font-black text-slate-900 mb-2">{stat.number}</h3>
                <p className="text-gray-500 font-medium uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Our Team Section */}
      <section className="py-24 container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 {...fadeIn} className="text-5xl font-black mb-6 uppercase">The Dream Team</motion.h2>
          <p className="text-lg text-gray-600">
            Our passionate team consists of experienced chefs, dedicated staff, and food enthusiasts 
            who are committed to delivering the best experience to every customer.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <motion.div 
              key={i} 
              whileHover={{ scale: 1.05 }}
              className="group relative h-80 rounded-3xl overflow-hidden shadow-lg bg-gray-200"
            >
              <Image 
                src={`https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&fit=crop`} 
                alt="Chef"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div className="text-white">
                  <p className="font-bold text-lg">Master Chef</p>
                  <p className="text-yellow-400 text-sm italic">Culinary Expert</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}