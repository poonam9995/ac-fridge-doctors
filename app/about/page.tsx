import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function AboutPage() {
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
                About Us
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">About AC-Fridge Doctors</h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your trusted partner for all AC and refrigerator repair needs
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="animate-slide-up">
                <div className="inline-block mb-6">
                  <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Our Story
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">Building Trust Through Excellence</h2>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  AC-Fridge Doctors was founded with a simple mission: to provide fast, reliable, and professional 
                  repair services for air conditioners and refrigerators. With over 3+ years of combined experience 
                  in the industry, our team has helped thousands of customers keep their homes and businesses cool 
                  and comfortable.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  We understand how critical it is to have functioning cooling systems, especially during hot summer 
                  months or when storing perishable goods. That's why we offer 24/7 emergency service and guarantee 
                  same-day appointments when possible.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Our certified technicians are trained to work on all major brands and models, ensuring that 
                  whatever cooling equipment you have, we can fix it efficiently and effectively.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-indigo-200 to-purple-200 rounded-3xl"></div>
                <div className="relative bg-gradient-to-br from-indigo-50 to-purple-50 p-10 rounded-3xl shadow-2xl border-2 border-indigo-100">
                  <div className="space-y-6">
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200">
                      <div className="flex items-center space-x-4">
                        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-4 rounded-2xl shadow-lg">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">3+</p>
                          <p className="text-gray-600 font-semibold">Years Experience</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                      <div className="flex items-center space-x-4">
                        <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-4 rounded-2xl shadow-lg">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">1000+</p>
                          <p className="text-gray-600 font-semibold">Happy Customers</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                      <div className="flex items-center space-x-4">
                        <div className="bg-gradient-to-br from-amber-500 to-yellow-600 p-4 rounded-2xl shadow-lg">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">99%</p>
                          <p className="text-gray-600 font-semibold">Satisfaction Rate</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white relative">
          <div className="absolute inset-0 bg-dot-pattern opacity-30"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Our Values
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Drives Us</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center group hover:shadow-2xl transition-all duration-300 card-hover">
                <div className="bg-gradient-to-br from-sky-100 to-blue-100 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <span className="text-4xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Excellence</h3>
                <p className="text-gray-600 leading-relaxed">
                  We strive for excellence in every repair, ensuring top-quality workmanship on every job.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg text-center group hover:shadow-2xl transition-all duration-300 card-hover">
                <div className="bg-gradient-to-br from-emerald-100 to-teal-100 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <span className="text-4xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Integrity</h3>
                <p className="text-gray-600 leading-relaxed">
                  Honest pricing and transparent service. We'll never recommend repairs you don't need.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg text-center group hover:shadow-2xl transition-all duration-300 card-hover">
                <div className="bg-gradient-to-br from-amber-100 to-yellow-100 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <span className="text-4xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Speed</h3>
                <p className="text-gray-600 leading-relaxed">
                  Fast response times and efficient repairs to get your systems running quickly.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg text-center group hover:shadow-2xl transition-all duration-300 card-hover">
                <div className="bg-gradient-to-br from-rose-100 to-pink-100 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <span className="text-4xl">💙</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Care</h3>
                <p className="text-gray-600 leading-relaxed">
                  We treat every customer like family and every home with respect and care.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 p-3 rounded-lg flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Licensed & Insured</h3>
                  <p className="text-gray-600">
                    All our technicians are fully licensed, certified, and insured for your peace of mind.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 p-3 rounded-lg flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">24/7 Availability</h3>
                  <p className="text-gray-600">
                    Emergency service available around the clock. We're here when you need us most.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-amber-500 to-yellow-600 p-4 rounded-xl flex-shrink-0 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Upfront Pricing</h3>
                  <p className="text-gray-600 leading-relaxed">
                    No hidden fees or surprises. You'll know the cost before we start any work.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-4 rounded-xl flex-shrink-0 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Warranty on Repairs</h3>
                  <p className="text-gray-600 leading-relaxed">
                    All our repairs come with a warranty. We stand behind our work 100%.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-4 rounded-xl flex-shrink-0 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Expert Technicians</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our team has extensive training and experience with all brands and models.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-br from-rose-500 to-red-600 p-4 rounded-xl flex-shrink-0 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Customer Satisfaction</h3>
                  <p className="text-gray-600 leading-relaxed">
                    99% customer satisfaction rate. Your happiness is our priority.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block mb-4">
                <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Our Commitment
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Building Lasting Relationships</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We're committed to providing exceptional service and building lasting relationships with our customers
              </p>
            </div>
            <div className="bg-white p-10 md:p-12 rounded-3xl shadow-2xl border border-gray-100">
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  At AC-Fridge Doctors, we don't just fix appliances – we build relationships. Our commitment goes 
                  beyond the repair itself. We educate our customers on proper maintenance, offer preventive care 
                  tips, and ensure you understand exactly what we're doing and why.
                </p>
                <p>
                  We invest in ongoing training for our technicians to stay current with the latest technology and 
                  repair techniques. This means we can handle everything from vintage models to the newest smart 
                  appliances with equal expertise.
                </p>
                <p>
                  Our goal is simple: to be the repair service you trust and recommend to friends and family. 
                  Every interaction, every repair, and every customer matters to us.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-slate-100 via-gray-100 to-zinc-100 text-gray-900 overflow-hidden">
          <div className="absolute inset-0 bg-dot-pattern opacity-30"></div>
          <div className="absolute top-10 left-10 w-64 h-64 bg-indigo-300/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Experience the AC-Fridge Doctors Difference</h2>
            <p className="text-xl md:text-2xl mb-10 text-gray-600">
              Join thousands of satisfied customers who trust us with their cooling needs
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <a
                href="tel:+919136705351"
                className="group bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-12 py-5 rounded-full font-bold text-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center justify-center space-x-3 shadow-2xl hover:shadow-indigo-500/50 hover:scale-105"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>Call Now</span>
              </a>
              <Link
                href="/contact"
                className="group bg-white text-gray-900 px-12 py-5 rounded-full font-bold text-xl hover:bg-gray-50 transition-all duration-300 inline-flex items-center justify-center space-x-3 shadow-2xl hover:scale-105 border-2 border-gray-300"
              >
                <span>Contact Us</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

