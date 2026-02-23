import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import Link from 'next/link';

export default function ServicesPage() {
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
                Our Services
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">Professional Repair Solutions</h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Professional repair, maintenance, and installation services for all your cooling needs
            </p>
          </div>
        </section>

        {/* Main Services Section */}
        <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white relative">
          <div className="absolute inset-0 bg-dot-pattern opacity-30"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What We Offer</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive solutions for all your cooling system needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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

        {/* Detailed Services Section */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Service Details</h2>
              <p className="text-xl text-gray-600">Everything you need to know about our services</p>
            </div>
            
            <div className="space-y-12">
              {/* AC Services */}
              <div className="relative bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-10 rounded-3xl shadow-xl border-2 border-indigo-200 overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-200/30 rounded-full blur-3xl"></div>
                
                <div className="relative z-10">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 flex items-center">
                    <span className="bg-gradient-to-br from-indigo-500 to-purple-600 p-3 rounded-2xl mr-4 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </span>
                    Air Conditioning Services
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
                      <h4 className="font-bold text-indigo-900 mb-4 text-xl">Common AC Repairs:</h4>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start group">
                          <span className="text-indigo-600 mr-3 mt-1 font-bold">✓</span>
                          <span className="group-hover:text-indigo-700 transition-colors">Not cooling properly or no cold air</span>
                        </li>
                        <li className="flex items-start group">
                          <span className="text-sky-600 mr-3 mt-1 font-bold">✓</span>
                          <span className="group-hover:text-sky-700 transition-colors">Refrigerant leaks and recharging</span>
                        </li>
                        <li className="flex items-start group">
                          <span className="text-sky-600 mr-3 mt-1 font-bold">✓</span>
                          <span className="group-hover:text-sky-700 transition-colors">Compressor issues and replacement</span>
                        </li>
                        <li className="flex items-start group">
                          <span className="text-sky-600 mr-3 mt-1 font-bold">✓</span>
                          <span className="group-hover:text-sky-700 transition-colors">Fan motor problems</span>
                        </li>
                        <li className="flex items-start group">
                          <span className="text-sky-600 mr-3 mt-1 font-bold">✓</span>
                          <span className="group-hover:text-sky-700 transition-colors">Thermostat issues</span>
                        </li>
                        <li className="flex items-start group">
                          <span className="text-sky-600 mr-3 mt-1 font-bold">✓</span>
                          <span className="group-hover:text-sky-700 transition-colors">Strange noises or odors</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
                      <h4 className="font-bold text-indigo-900 mb-4 text-xl">AC Maintenance Includes:</h4>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start group">
                          <span className="text-sky-600 mr-3 mt-1 font-bold">✓</span>
                          <span className="group-hover:text-sky-700 transition-colors">Filter cleaning and replacement</span>
                        </li>
                        <li className="flex items-start group">
                          <span className="text-sky-600 mr-3 mt-1 font-bold">✓</span>
                          <span className="group-hover:text-sky-700 transition-colors">Coil cleaning and inspection</span>
                        </li>
                        <li className="flex items-start group">
                          <span className="text-sky-600 mr-3 mt-1 font-bold">✓</span>
                          <span className="group-hover:text-sky-700 transition-colors">Refrigerant level check</span>
                        </li>
                        <li className="flex items-start group">
                          <span className="text-sky-600 mr-3 mt-1 font-bold">✓</span>
                          <span className="group-hover:text-sky-700 transition-colors">Electrical connections inspection</span>
                        </li>
                        <li className="flex items-start group">
                          <span className="text-sky-600 mr-3 mt-1 font-bold">✓</span>
                          <span className="group-hover:text-sky-700 transition-colors">Performance optimization</span>
                        </li>
                        <li className="flex items-start group">
                          <span className="text-sky-600 mr-3 mt-1 font-bold">✓</span>
                          <span className="group-hover:text-sky-700 transition-colors">Energy efficiency assessment</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Refrigerator Services */}
              <div className="relative bg-gradient-to-br from-cyan-50 via-teal-50 to-emerald-50 p-10 rounded-3xl shadow-xl border border-cyan-200 overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-200/30 rounded-full blur-3xl"></div>
                
                <div className="relative z-10">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 flex items-center">
                    <span className="bg-gradient-to-br from-cyan-500 to-teal-600 p-3 rounded-2xl mr-4 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </span>
                    Refrigerator Services
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
                      <h4 className="font-bold text-cyan-900 mb-4 text-xl">Common Fridge Repairs:</h4>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start group">
                          <span className="text-cyan-600 mr-3 mt-1 font-bold">✓</span>
                          <span className="group-hover:text-cyan-700 transition-colors">Not cooling or freezing properly</span>
                        </li>
                        <li className="flex items-start group">
                          <span className="text-cyan-600 mr-3 mt-1 font-bold">✓</span>
                          <span className="group-hover:text-cyan-700 transition-colors">Water leakage issues</span>
                        </li>
                        <li className="flex items-start group">
                          <span className="text-cyan-600 mr-3 mt-1 font-bold">✓</span>
                          <span className="group-hover:text-cyan-700 transition-colors">Ice maker not working</span>
                        </li>
                        <li className="flex items-start group">
                          <span className="text-cyan-600 mr-3 mt-1 font-bold">✓</span>
                          <span className="group-hover:text-cyan-700 transition-colors">Door seal replacement</span>
                        </li>
                        <li className="flex items-start group">
                          <span className="text-cyan-600 mr-3 mt-1 font-bold">✓</span>
                          <span className="group-hover:text-cyan-700 transition-colors">Compressor and motor repairs</span>
                        </li>
                        <li className="flex items-start group">
                          <span className="text-cyan-600 mr-3 mt-1 font-bold">✓</span>
                          <span className="group-hover:text-cyan-700 transition-colors">Temperature control problems</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
                      <h4 className="font-bold text-cyan-900 mb-4 text-xl">We Service All Types:</h4>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start group">
                          <span className="text-cyan-600 mr-3 mt-1 font-bold">✓</span>
                          <span className="group-hover:text-cyan-700 transition-colors">Side-by-side refrigerators</span>
                        </li>
                        <li className="flex items-start group">
                          <span className="text-cyan-600 mr-3 mt-1 font-bold">✓</span>
                          <span className="group-hover:text-cyan-700 transition-colors">French door models</span>
                        </li>
                        <li className="flex items-start group">
                          <span className="text-cyan-600 mr-3 mt-1 font-bold">✓</span>
                          <span className="group-hover:text-cyan-700 transition-colors">Top and bottom freezer units</span>
                        </li>
                        <li className="flex items-start group">
                          <span className="text-cyan-600 mr-3 mt-1 font-bold">✓</span>
                          <span className="group-hover:text-cyan-700 transition-colors">Built-in refrigerators</span>
                        </li>
                        <li className="flex items-start group">
                          <span className="text-cyan-600 mr-3 mt-1 font-bold">✓</span>
                          <span className="group-hover:text-cyan-700 transition-colors">Commercial refrigerators</span>
                        </li>
                        <li className="flex items-start group">
                          <span className="text-cyan-600 mr-3 mt-1 font-bold">✓</span>
                          <span className="group-hover:text-cyan-700 transition-colors">Wine coolers and mini fridges</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brands We Service */}
        <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                All Major Brands
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Brands We Service</h2>
            <p className="text-xl text-gray-600 mb-16">We repair and service all major brands with expertise</p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {['LG', 'Samsung', 'Whirlpool', 'GE', 'Frigidaire', 'Bosch', 'Kenmore', 'Maytag', 'Electrolux', 'Haier', 'Panasonic', 'Daikin'].map((brand) => (
                <div key={brand} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group card-hover">
                  <p className="font-bold text-gray-700 text-lg group-hover:text-sky-600 transition-colors">{brand}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-slate-100 via-gray-100 to-zinc-100 text-gray-900 overflow-hidden">
          <div className="absolute inset-0 bg-dot-pattern opacity-30"></div>
          <div className="absolute top-10 left-10 w-64 h-64 bg-indigo-300/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Ready to Get Your Appliances Fixed?</h2>
            <p className="text-xl md:text-2xl mb-10 text-gray-600">
              Contact us today for fast, reliable service from experienced technicians
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
                <span>Request Service</span>
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

