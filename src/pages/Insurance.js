import React from 'react';
import { Link } from 'react-router-dom';

function Insurance() {
  const insuranceTypes = [
    {
      icon: '❤️',
      title: 'Life Insurance',
      description: 'Secure your family\'s financial future with comprehensive life insurance coverage.',
      features: [
        'Term life insurance',
        'Whole life insurance',
        'Endowment plans',
        'ULIP (Unit Linked Insurance Plans)',
        'Money-back policies',
        'Child insurance plans'
      ],
      benefits: [
        'Financial security for loved ones',
        'Tax benefits under Section 80C',
        'Maturity benefits',
        'Flexibility in premium payment'
      ]
    },
    {
      icon: '🏥',
      title: 'Health Insurance',
      description: 'Protect yourself and your family from rising medical costs with comprehensive health coverage.',
      features: [
        'Individual health insurance',
        'Family floater plans',
        'Senior citizen health insurance',
        'Critical illness cover',
        'Top-up health plans',
        'Maternity coverage'
      ],
      benefits: [
        'Cashless hospitalization',
        'Pre and post-hospitalization coverage',
        'Day-care procedures',
        'No-claim bonus',
        'Tax benefits under Section 80D'
      ]
    },
    {
      icon: '🏠',
      title: 'General Insurance',
      description: 'Comprehensive protection for your assets and liabilities.',
      features: [
        'Home insurance',
        'Fire insurance',
        'Travel insurance',
        'Personal accident insurance',
        'Liability insurance',
        'Cyber insurance'
      ],
      benefits: [
        'Protection against theft and damage',
        'Natural calamity coverage',
        'Personal belongings coverage',
        'Third-party liability protection'
      ]
    },
    {
      icon: '🚗',
      title: 'Motor Insurance',
      description: 'Complete protection for your vehicles with comprehensive motor insurance.',
      features: [
        'Car insurance',
        'Two-wheeler insurance',
        'Commercial vehicle insurance',
        'Third-party liability coverage',
        'Comprehensive coverage',
        'Own damage cover'
      ],
      benefits: [
        'Protection against accidents',
        'Theft coverage',
        'Natural calamity protection',
        'Personal accident cover',
        'No-claim bonus',
        'Cashless garage facility'
      ]
    }
  ];

  const whyChooseUs = [
    'Unbiased Expert Advice',
    'Multiple Insurance Partners',
    'Best Premium Comparison',
    'Quick Policy Issuance',
    'Claim Settlement Support',
    'Lifetime Service'
  ];

  const insurancePartners = [
    'LIC', 'SBI Life', 'HDFC Life', 'ICICI Prudential', 'Max Life',
    'Bajaj Allianz', 'Star Health', 'HDFC ERGO', 'ICICI Lombard', 'Tata AIG',
    'Reliance General', 'New India Assurance', 'Oriental Insurance', 'United India Insurance'
  ];

  return (
    <div className="pt-32 pb-24 bg-gradient-to-b from-slate-50 via-white to-slate-100 relative min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(65,105,225,0.08),transparent)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-royal-800 via-royal-600 to-royal-500 bg-clip-text text-transparent">
            Insurance Services
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-royal-600 to-transparent mx-auto mb-6"></div>
          <p className="text-xl text-slate-800 max-w-4xl mx-auto leading-relaxed">
            Protect yourself, your family, and your assets with comprehensive insurance solutions from India's leading insurance providers. 
            Get expert advice and compare policies to find the perfect coverage for your needs.
          </p>
        </div>

        {/* Insurance Types Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {insuranceTypes.map((insurance, index) => (
            <div 
              key={index} 
              className="group relative bg-gradient-to-br from-white to-slate-50 p-8 rounded-2xl shadow-2xl hover:shadow-slate-300/50 transition-all duration-500 border border-slate-200 hover:border-slate-300 transform hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              <div className="relative z-10">
                <div className="text-slate-600 text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {insurance.icon}
                </div>
                <h3 className="text-3xl font-bold mb-4 text-slate-700 group-hover:text-blue-600 transition-colors">
                  {insurance.title}
                </h3>
                <p className="text-slate-700 mb-6 leading-relaxed text-lg">{insurance.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-bold text-slate-700 mb-3 text-lg">Coverage Options:</h4>
                  <ul className="space-y-2">
                    {insurance.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-slate-600">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-slate-700 mb-3 text-lg">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {insurance.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-slate-600">
                        <span className="text-blue-500 mr-2">★</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gradient-to-br from-white to-slate-50 p-12 rounded-3xl border-2 border-slate-200 shadow-2xl mb-20">
          <div className="text-center mb-10">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-royal-800 via-royal-600 to-royal-500 bg-clip-text text-transparent">
              Why Choose Us for Insurance?
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
              We help you choose the right insurance coverage at the best premium rates.
            </p>
          </div>
        </div>

        {/* Insurance Partners Section */}
        <div className="bg-gradient-to-br from-white to-slate-50 p-12 rounded-3xl border-2 border-slate-200 shadow-2xl mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-royal-800 via-royal-600 to-royal-500 bg-clip-text text-transparent">
              Our Insurance Partners
            </h3>
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-royal-600 to-transparent mx-auto mb-4"></div>
            <p className="text-slate-800 text-lg">Partnered with leading insurance providers</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {insurancePartners.map((partner, index) => (
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
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-royal-700 to-royal-500 p-12 rounded-3xl shadow-2xl">
          <h3 className="text-4xl font-bold text-white mb-4">Need Insurance Coverage?</h3>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to get expert advice and find the perfect insurance plan for you and your family
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-white text-royal-700 font-bold py-4 px-10 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Get Insurance Quote
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Insurance;
