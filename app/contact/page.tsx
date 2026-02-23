'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you shortly.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Navbar />
      
      <div className="pt-20">
        {/* Header Section */}
        <section className="relative bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 text-gray-900 py-28 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-dot-pattern opacity-40"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-block mb-6">
              <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                Get In Touch
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">Contact Us</h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get in touch with our expert team for all your AC and refrigerator repair needs
            </p>
          </div>
        </section>

        {/* Contact Information and Form Section */}
        <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-2">
                <div className="inline-block mb-6">
                  <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Contact Info
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Get In Touch</h2>
                <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                  Have a question or need immediate assistance? Reach out to us through any of the following channels, and we'll respond promptly.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group border-2 border-gray-200">
                    <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2 text-lg">Phone</h3>
                      <a href="tel:+919136705351" className="text-indigo-600 font-semibold text-xl hover:text-indigo-700 transition-colors">+91 91367 05351</a>
                      <p className="text-sm text-emerald-600 font-semibold mt-1">24/7 Emergency Service</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2 text-lg">Email</h3>
                      <a href="mailto:info@acfridgedoctors.com" className="text-indigo-600 font-semibold text-lg hover:text-indigo-700 transition-colors">info@acfridgedoctors.com</a>
                      <p className="text-sm text-emerald-600 font-semibold mt-1">We reply within 2 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2 text-lg">Service Area</h3>
                      <p className="text-gray-600 font-semibold">Serving all major cities</p>
                      <p className="text-sm text-indigo-600 font-semibold mt-1">Call to check availability</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <div className="bg-gradient-to-br from-amber-500 to-yellow-600 p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2 text-lg">Business Hours</h3>
                      <p className="text-gray-600 font-semibold">24/7 Emergency Service</p>
                      <p className="text-sm text-gray-600 mt-1">Mon-Sun: Always Available</p>
                    </div>
                  </div>
                </div>

                {/* Emergency Banner */}
                <div className="mt-8 bg-gradient-to-r from-red-50 to-rose-50 border-l-4 border-red-500 p-6 rounded-2xl shadow-lg">
                  <div className="flex items-center">
                    <div className="bg-red-500 p-3 rounded-xl mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-red-800 text-lg">Emergency Repairs?</h4>
                      <p className="text-red-700 font-semibold">Call us immediately at +91 91367 05351</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-3">
                <div className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-100">
                  <div className="inline-block mb-6">
                    <span className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Send Message
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-semibold mb-3 text-lg">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all text-gray-900 bg-gray-50 hover:bg-white"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-semibold mb-3 text-lg">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all text-gray-900 bg-gray-50 hover:bg-white"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-semibold mb-3 text-lg">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all text-gray-900 bg-gray-50 hover:bg-white"
                        placeholder="+91 91367 05351"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-gray-700 font-semibold mb-3 text-lg">
                        Service Needed *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all text-gray-900 bg-gray-50 hover:bg-white cursor-pointer"
                      >
                        <option value="">Select a service</option>
                        <option value="ac-repair">AC Repair</option>
                        <option value="ac-maintenance">AC Maintenance</option>
                        <option value="ac-installation">AC Installation</option>
                        <option value="fridge-repair">Refrigerator Repair</option>
                        <option value="fridge-maintenance">Refrigerator Maintenance</option>
                        <option value="emergency">Emergency Service</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-gray-700 font-semibold mb-3 text-lg">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all resize-none text-gray-900 bg-gray-50 hover:bg-white"
                        placeholder="Please describe your issue or requirements..."
                      />
                    </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-5 rounded-xl font-bold text-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02] flex items-center justify-center space-x-3"
                  >
                      <span>Send Message</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

