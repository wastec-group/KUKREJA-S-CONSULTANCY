import React from 'react';
import { Link } from 'react-router-dom';

function AIAutomation() {
  const aiServices = [
    {
      icon: '🤖',
      title: 'Process Automation',
      description: 'Automate repetitive tasks and workflows to increase efficiency and reduce operational costs.',
      features: [
        'Robotic Process Automation (RPA)',
        'Workflow automation',
        'Document processing automation',
        'Data entry automation',
        'Email and communication automation',
        'Report generation automation'
      ],
      benefits: [
        'Reduce manual errors',
        'Save time and resources',
        'Increase productivity',
        '24/7 operation capability'
      ]
    },
    {
      icon: '💬',
      title: 'AI Chatbots & Virtual Assistants',
      description: 'Enhance customer service with intelligent chatbots and virtual assistants powered by AI.',
      features: [
        'Customer support chatbots',
        'Lead generation bots',
        'FAQ automation',
        'Natural language processing',
        'Multi-language support',
        'Integration with CRM systems'
      ],
      benefits: [
        'Instant customer responses',
        'Reduce support costs',
        'Improve customer satisfaction',
        'Collect valuable insights'
      ]
    },
    {
      icon: '📊',
      title: 'Data Analytics & Insights',
      description: 'Leverage AI-powered analytics to make data-driven decisions and gain competitive advantages.',
      features: [
        'Predictive analytics',
        'Customer behavior analysis',
        'Sales forecasting',
        'Trend analysis',
        'Real-time dashboards',
        'Business intelligence reporting'
      ],
      benefits: [
        'Better decision making',
        'Identify market opportunities',
        'Optimize operations',
        'Increase ROI'
      ]
    },
    {
      icon: '🎯',
      title: 'Marketing Automation',
      description: 'Automate and optimize your marketing campaigns with AI-driven tools and strategies.',
      features: [
        'Email marketing automation',
        'Social media automation',
        'Lead scoring and nurturing',
        'Personalized content delivery',
        'A/B testing automation',
        'Customer segmentation'
      ],
      benefits: [
        'Higher conversion rates',
        'Better customer targeting',
        'Increased engagement',
        'Improved marketing ROI'
      ]
    },
    {
      icon: '🔒',
      title: 'AI-Powered Security',
      description: 'Protect your business with AI-driven security solutions and threat detection.',
      features: [
        'Fraud detection',
        'Cybersecurity monitoring',
        'Anomaly detection',
        'Risk assessment',
        'Identity verification',
        'Access control automation'
      ],
      benefits: [
        'Enhanced security',
        'Reduced fraud losses',
        'Compliance automation',
        'Real-time threat response'
      ]
    },
    {
      icon: '🛠️',
      title: 'Custom AI Solutions',
      description: 'Tailored AI solutions designed specifically for your business needs and industry.',
      features: [
        'Custom machine learning models',
        'Industry-specific solutions',
        'Integration with existing systems',
        'Scalable architecture',
        'API development',
        'Ongoing support and optimization'
      ],
      benefits: [
        'Competitive advantage',
        'Unique business solutions',
        'Seamless integration',
        'Long-term value'
      ]
    }
  ];

  const industries = [
    { icon: '🏦', name: 'Finance & Banking' },
    { icon: '🏥', name: 'Healthcare' },
    { icon: '🛒', name: 'E-commerce & Retail' },
    { icon: '🏭', name: 'Manufacturing' },
    { icon: '📚', name: 'Education' },
    { icon: '🏨', name: 'Hospitality' },
    { icon: '🚚', name: 'Logistics' },
    { icon: '🏢', name: 'Real Estate' }
  ];

  const whyChooseUs = [
    'Experienced AI Professionals',
    'Industry-Specific Solutions',
    'Proven Track Record',
    'Cost-Effective Implementation',
    'Ongoing Support & Training',
    'Scalable Solutions'
  ];

  return (
    <div className="pt-32 pb-24 bg-gradient-to-b from-slate-50 via-white to-slate-100 relative min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(65,105,225,0.08),transparent)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-royal-800 via-royal-600 to-royal-500 bg-clip-text text-transparent">
            AI & Automation Services
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-royal-600 to-transparent mx-auto mb-6"></div>
          <p className="text-xl text-slate-800 max-w-4xl mx-auto leading-relaxed">
            Transform your business with cutting-edge AI and automation solutions. 
            Increase efficiency, reduce costs, and stay ahead of the competition with intelligent automation.
          </p>
        </div>

        {/* AI Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {aiServices.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-gradient-to-br from-white to-slate-50 p-8 rounded-2xl shadow-2xl hover:shadow-slate-300/50 transition-all duration-500 border border-slate-200 hover:border-slate-300 transform hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              <div className="relative z-10">
                <div className="text-slate-600 text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-700 group-hover:text-indigo-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-700 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-bold text-slate-700 mb-3">Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-slate-600 text-sm">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-slate-700 mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-slate-600 text-sm">
                        <span className="text-indigo-500 mr-2">★</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Industries We Serve */}
        <div className="bg-gradient-to-br from-white to-slate-50 p-12 rounded-3xl border-2 border-slate-200 shadow-2xl mb-20">
          <div className="text-center mb-10">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-royal-800 via-royal-600 to-royal-500 bg-clip-text text-transparent">
              Industries We Serve
            </h3>
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-royal-600 to-transparent mx-auto mb-4"></div>
            <p className="text-slate-800 text-lg">AI solutions tailored for various industries</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {industries.map((industry, index) => (
              <div 
                key={index} 
                className="group bg-gradient-to-br from-pastel-sky to-white p-6 rounded-xl border border-slate-200 hover:border-slate-300 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-300/50 text-center"
              >
                <div className="text-4xl mb-3">{industry.icon}</div>
                <span className="text-slate-700 font-medium text-sm">{industry.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gradient-to-br from-white to-slate-50 p-12 rounded-3xl border-2 border-slate-200 shadow-2xl mb-20">
          <div className="text-center mb-10">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-royal-800 via-royal-600 to-royal-500 bg-clip-text text-transparent">
              Why Choose Our AI Solutions?
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
              We deliver AI solutions that drive real business results and ROI.
            </p>
          </div>
        </div>

        {/* Implementation Process */}
        <div className="bg-gradient-to-br from-white to-slate-50 p-12 rounded-3xl border-2 border-slate-200 shadow-2xl mb-20">
          <div className="text-center mb-10">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-royal-800 via-royal-600 to-royal-500 bg-clip-text text-transparent">
              Our Implementation Process
            </h3>
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-royal-600 to-transparent mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { step: '1', title: 'Consultation', desc: 'Understand your business needs and goals' },
              { step: '2', title: 'Strategy', desc: 'Design customized AI solution roadmap' },
              { step: '3', title: 'Implementation', desc: 'Deploy and integrate AI systems' },
              { step: '4', title: 'Support', desc: 'Ongoing optimization and training' }
            ].map((phase, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-royal-700 to-royal-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold group-hover:scale-110 transition-transform">
                  {phase.step}
                </div>
                <h4 className="text-xl font-bold text-slate-700 mb-2">{phase.title}</h4>
                <p className="text-slate-600">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-royal-700 to-royal-500 p-12 rounded-3xl shadow-2xl">
          <h3 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how AI and automation can revolutionize your operations
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-white text-royal-700 font-bold py-4 px-10 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Schedule Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AIAutomation;
