import React from 'react';
import { Link } from 'react-router-dom';

function Loans() {
  const loanServices = [
    {
      icon: '🏠',
      title: 'Home Loan',
      description: 'Buying your dream home? We help you get the most competitive interest rates with flexible repayment options.',
      features: [
        'Loan up to 90% of property value',
        'Tenure up to 30 years',
        'Balance transfer facility',
        'Top-up loan available',
        'Attractive interest rates',
        'Quick processing & doorstep service'
      ],
      route: '/home-loan'
    },
    {
      icon: '🏢',
      title: 'Loan Against Property',
      description: 'Unlock the value of your residential or commercial property to meet personal or business needs.',
      features: [
        'High loan amount',
        'Lower interest rates than personal loans',
        'Flexible tenure up to 15–20 years',
        'Suitable for business expansion, education, medical needs'
      ],
      route: '/loan-against-property'
    },
    {
      icon: '💼',
      title: 'Business Loan',
      description: 'Fuel your business growth with collateral-free funding options.',
      features: [
        'Unsecured loans available',
        'Fast approval',
        'Minimal documentation',
        'Flexible repayment terms',
        'Ideal for expansion, machinery purchase, inventory'
      ],
      route: '/business-loan'
    },
    {
      icon: '💳',
      title: 'Personal Loan',
      description: 'Meet your urgent financial needs without collateral.',
      features: [
        'Quick disbursal',
        'No security required',
        'Tenure up to 5 years'
      ],
      route: '/personal-loan'
    },
    {
      icon: '🚗',
      title: 'Vehicle Loan',
      description: 'Get easy financing for new vehicles.',
      features: [
        'Competitive interest rates',
        'Up to 100% on-road funding',
        'Flexible EMI options',
        'Fast approval process'
      ],
      route: '/vehicle-loan'
    },
    {
      icon: '🚘',
      title: 'Used Car Loan',
      description: 'Planning to buy a pre-owned car? We offer hassle-free used car financing.',
      features: [
        'Attractive rates',
        'Loan available for cars up to certain age limits',
        'Quick documentation',
        'Flexible repayment options'
      ],
      route: '/used-car-loan'
    },
    {
      icon: '🎓',
      title: 'Education Loan',
      description: 'Invest in your future with education funding for studies in India or abroad.',
      features: [
        'Moratorium period available',
        'Long repayment tenure',
        'Competitive interest rates',
        'Covers tuition, living expenses, travel & equipment'
      ],
      route: '/education-loan'
    },
    {
      icon: '🏭',
      title: 'Working Capital Finance',
      description: 'Manage daily business operations smoothly.',
      features: [
        'Cash Credit',
        'Overdraft',
        'Bill Discounting',
        'Short-term business loans',
        'Perfect for maintaining cash flow'
      ],
      route: '/working-capital-finance'
    },
    {
      icon: '📈',
      title: 'Loan Against Shares',
      description: 'Get funds by pledging your shares, mutual funds, or securities.',
      features: [
        'Quick processing',
        'Lower interest than unsecured loans',
        'Retain ownership of investments',
        'Overdraft facility available'
      ],
      route: '/loan-against-shares'
    }
  ];

  const whyChooseUs = [
    '100+ Lending Partners',
    'Best Rate Comparison',
    'Expert Financial Consultation',
    'Fast Processing',
    'Transparent Process',
    'End-to-End Support'
  ];

  const popularPartners = [
    'SBI', 'HDFC Bank', 'ICICI Bank', 'Axis Bank', 'Kotak Mahindra',
    'PNB', 'Bank of Baroda', 'IDFC First Bank', 'Yes Bank', 'IndusInd Bank',
    'Bajaj Finserv', 'Tata Capital', 'IIFL', 'L&T Financial Services', 'HSBC',
    'Standard Chartered', 'Federal Bank', 'RBL Bank', 'Bandhan Bank', 'Muthoot Finance'
  ];

  return (
    <div className="pt-32 pb-24 bg-gradient-to-b from-slate-50 via-white to-slate-100 relative min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(65,105,225,0.08),transparent)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-royal-800 via-royal-600 to-royal-500 bg-clip-text text-transparent">
            Loan Services
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-royal-600 to-transparent mx-auto mb-6"></div>
          <p className="text-xl text-slate-800 max-w-4xl mx-auto leading-relaxed">
            India's Largest Loan Distributor offering comprehensive loan solutions through 100+ trusted banking and NBFC partners. 
            Get the best loan offers with minimum documentation, faster approval, and expert guidance.
          </p>
        </div>

        {/* Loan Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {loanServices.map((service, index) => (
            <Link 
              key={index} 
              to={service.route} 
              className="group relative bg-gradient-to-br from-white to-slate-50 p-8 rounded-2xl shadow-2xl hover:shadow-slate-300/50 transition-all duration-500 border border-slate-200 hover:border-slate-300 transform hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              <div className="relative z-10">
                <div className="text-slate-600 text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-700 group-hover:text-purple-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-700 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-slate-600 text-sm">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 flex items-center text-slate-700 font-semibold group-hover:text-purple-600 transition-colors">
                  View Details <span className="ml-2">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gradient-to-br from-white to-slate-50 p-12 rounded-3xl border-2 border-slate-200 shadow-2xl mb-20">
          <div className="text-center mb-10">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-royal-800 via-royal-600 to-royal-500 bg-clip-text text-transparent">
              Why Choose Us for Loans?
            </h3>
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-royal-600 to-transparent mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="flex items-center group">
                <span className="text-slate-600 text-2xl mr-4 group-hover:scale-125 transition-transform">✔</span>
                <span className="text-slate-800 text-lg group-hover:text-slate-700 transition-colors">{reason}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-xl text-slate-800 font-light">
              We ensure you get the right loan solution tailored to your needs.
            </p>
          </div>
        </div>

        {/* Our Lending Partners Section */}
        <div className="bg-gradient-to-br from-white to-slate-50 p-12 rounded-3xl border-2 border-slate-200 shadow-2xl">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-royal-800 via-royal-600 to-royal-500 bg-clip-text text-transparent">
              Popular Lending Partners
            </h3>
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-royal-600 to-transparent mx-auto mb-4"></div>
            <p className="text-slate-800 text-lg">Partnered with 100+ trusted banks and NBFCs</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-7xl mx-auto">
            {popularPartners.map((partner, index) => (
              <div 
                key={index} 
                className="group bg-gradient-to-br from-pastel-sky to-white p-5 rounded-xl border border-slate-200 hover:border-slate-300 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-300/50 flex items-center justify-center"
              >
                <span className="text-slate-700 group-hover:text-slate-700 transition-colors text-sm text-center font-medium leading-tight">
                  {partner}
                </span>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              to="/all-partners" 
              className="inline-block bg-gradient-to-r from-royal-700 to-royal-500 text-gray-800 font-bold py-3 px-8 rounded-full hover:shadow-lg hover:shadow-slate-300/50 transition-all duration-300 transform hover:scale-105"
            >
              View All 100+ Partners
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-r from-royal-700 to-royal-500 p-12 rounded-3xl shadow-2xl">
          <h3 className="text-4xl font-bold text-white mb-4">Ready to Get Your Loan?</h3>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Fill out our quick inquiry form and our experts will help you find the best loan option
          </p>
          <Link 
            to="/loan-inquiry" 
            className="inline-block bg-white text-royal-700 font-bold py-4 px-10 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Loans;
