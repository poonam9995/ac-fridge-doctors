import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ServiceCard from './components/ServiceCard';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 text-gray-900 pt-32 pb-24 px-4 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-dot-pattern opacity-40"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <div className="inline-block mb-6">
                <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  🏆 #1 Rated Service Provider
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Expert AC & Fridge <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Repair Services</span>
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-gray-600 leading-relaxed">
                Fast, reliable, and professional repair solutions for all your cooling needs. Available 24/7 for emergency repairs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a
                  href="tel:+919136705351"
                  className="group bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 text-center shadow-xl hover:shadow-2xl flex items-center justify-center space-x-3 btn-shine"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>Call Now</span>
                </a>
                <Link
                  href="/contact"
                  className="group bg-white text-gray-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-50 transition-all duration-300 text-center shadow-xl flex items-center justify-center space-x-3 border-2 border-gray-200"
                >
                  <span>Get a Quote</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-3 bg-white px-5 py-3 rounded-xl border-2 border-gray-200 shadow-md">
                  <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-2 rounded-lg">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-semibold text-gray-800">24/7 Emergency</span>
                </div>
                <div className="flex items-center space-x-3 bg-white px-5 py-3 rounded-xl border-2 border-gray-200 shadow-md">
                  <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-2 rounded-lg">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-semibold text-gray-800">Licensed Pros</span>
                </div>
                <div className="flex items-center space-x-3 bg-white px-5 py-3 rounded-xl border-2 border-gray-200 shadow-md">
                  <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-2 rounded-lg">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-semibold text-gray-800">100% Guarantee</span>
                </div>
              </div>
            </div>
            <div className="hidden lg:block animate-float">
              <div className="relative">
                <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-gray-200">
                  <div className="grid grid-cols-2 gap-5">
                    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 text-center transform hover:scale-105 transition-transform duration-300 shadow-lg border border-indigo-100">
                      <div className="text-5xl mb-3">❄️</div>
                      <div className="text-gray-900 font-bold text-lg">AC Repair</div>
                      <div className="text-indigo-600 text-sm mt-1">All Brands</div>
                    </div>
                    <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl p-8 text-center transform hover:scale-105 transition-transform duration-300 shadow-lg border border-cyan-100">
                      <div className="text-5xl mb-3">🧊</div>
                      <div className="text-gray-900 font-bold text-lg">Fridge Repair</div>
                      <div className="text-cyan-600 text-sm mt-1">Expert Service</div>
                    </div>
                    <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8 text-center transform hover:scale-105 transition-transform duration-300 shadow-lg border border-amber-100">
                      <div className="text-5xl mb-3">⚡</div>
                      <div className="text-gray-900 font-bold text-lg">Fast Service</div>
                      <div className="text-amber-600 text-sm mt-1">Same Day</div>
                    </div>
                    <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 text-center transform hover:scale-105 transition-transform duration-300 shadow-lg border border-emerald-100">
                      <div className="text-5xl mb-3">✅</div>
                      <div className="text-gray-900 font-bold text-lg">Warranty</div>
                      <div className="text-emerald-600 text-sm mt-1">Guaranteed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16 md:h-24 fill-current text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="absolute inset-0 bg-dot-pattern opacity-40"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Our Expertise
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive repair and maintenance solutions for all major brands of air conditioners and refrigerators
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              }
              title="AC Repair & Service"
              description="Complete air conditioning repair, maintenance, and installation services. We fix all brands and models quickly and efficiently."
            />
            
            <ServiceCard
              icon={
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              }
              title="Refrigerator Repair"
              description="Expert fridge repair services including cooling issues, ice maker problems, and compressor repairs for all refrigerator types."
            />

            <ServiceCard
              icon={
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
              title="Emergency Service"
              description="24/7 emergency repair service available. No matter when your AC or fridge breaks down, we're here to help immediately."
            />

            <ServiceCard
              icon={
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              title="Preventive Maintenance"
              description="Regular maintenance plans to keep your cooling systems running efficiently and prevent costly breakdowns."
            />

            <ServiceCard
              icon={
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              }
              title="Installation Services"
              description="Professional installation of new AC units and refrigerators with proper setup and configuration."
            />

            <ServiceCard
              icon={
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              }
              title="Free Consultation"
              description="Get expert advice and free estimates for all your AC and refrigerator repair and maintenance needs."
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-4 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Why Us
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Why Choose AC-Fridge Doctors?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're committed to providing the best repair services with unmatched customer satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-sky-100 to-blue-100 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl">
                <span className="text-5xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Fast Response</h3>
              <p className="text-gray-600 leading-relaxed">Same-day service available. We arrive promptly and get to work immediately.</p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-emerald-100 to-teal-100 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl">
                <span className="text-5xl">👨‍🔧</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Expert Technicians</h3>
              <p className="text-gray-600 leading-relaxed">Certified and experienced professionals with years of expertise in repairs.</p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-amber-100 to-yellow-100 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl">
                <span className="text-5xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Affordable Pricing</h3>
              <p className="text-gray-600 leading-relaxed">Transparent pricing with no hidden fees. Get quality service at fair rates.</p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl">
                <span className="text-5xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Warranty Guaranteed</h3>
              <p className="text-gray-600 leading-relaxed">All repairs come with a warranty. Your satisfaction is guaranteed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4 bg-gradient-to-br from-slate-100 via-gray-100 to-zinc-100 text-gray-900 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-dot-pattern opacity-30"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-64 h-64 bg-indigo-300/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-red-500 to-rose-600 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse">
              🚨 Emergency Service Available Now
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
            Need Immediate Repair Service?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-gray-600 leading-relaxed">
            Don't wait! Our expert technicians are ready to help you 24/7. Call now for fast, reliable service.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a
              href="tel:+919136705351"
              className="group bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-12 py-5 rounded-full font-bold text-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center justify-center space-x-3 shadow-2xl hover:shadow-indigo-500/50 hover:scale-105"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>+91 91367 05351</span>
            </a>
            <Link
              href="/contact"
              className="group bg-white text-gray-900 px-12 py-5 rounded-full font-bold text-xl hover:bg-gray-50 transition-all duration-300 inline-flex items-center justify-center space-x-3 shadow-2xl hover:scale-105 border-2 border-gray-300"
            >
              <span>Schedule Service</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </Link>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg">
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">1000+</div>
              <div className="text-gray-600 font-semibold">Happy Customers</div>
            </div>
            <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg">
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">15+</div>
              <div className="text-gray-600 font-semibold">Years Experience</div>
            </div>
            <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg">
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">24/7</div>
              <div className="text-gray-600 font-semibold">Available Support</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
