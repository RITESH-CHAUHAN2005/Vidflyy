
import { Target, TrendingUp, Users, MessageCircle, Award, Zap } from "lucide-react";

const NewServices = () => {
  const services = [
    {
      icon: Target,
      title: "Precision Targeting",
      description: "Advanced demographic and interest-based targeting ensures your content reaches viewers most likely to subscribe.",
      features: ["Age & Gender Targeting", "Geographic Precision", "Interest-based Audiences"]
    },
    {
      icon: TrendingUp,
      title: "Growth Analytics",
      description: "Comprehensive analytics dashboard providing real-time data on campaign performance and audience behavior.",
      features: ["Real-time Metrics", "ROI Tracking", "Performance Insights"]
    },
    {
      icon: Users,
      title: "Organic Growth",
      description: "Build a loyal, engaged subscriber base through authentic promotion strategies that attract genuinely interested viewers.",
      features: ["Quality Subscribers", "Long-term Growth", "Engagement Focus"]
    },
    {
      icon: MessageCircle,
      title: "Campaign Management",
      description: "Professional campaign setup and optimization to maximize your video's reach and engagement potential.",
      features: ["Campaign Setup", "Optimization", "A/B Testing"]
    },
    {
      icon: Award,
      title: "Success Guarantee",
      description: "Money-back guarantee ensures you get the results you're looking for, or we'll refund your investment.",
      features: ["Results Guarantee", "Quality Assurance", "Full Support"]
    },
    {
      icon: Zap,
      title: "Fast Results",
      description: "See measurable improvements in your channel's performance within days, not months.",
      features: ["Quick Setup", "Rapid Growth", "Immediate Impact"]
    }
  ];

  return (
    <section className="py-20 bg-white font-montserrat relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-red-100 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-1/2 right-20 w-16 h-16 bg-red-200 rounded-full opacity-30 animate-bounce-slow"></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-red-50 rounded-full opacity-25 animate-pulse-slow"></div>
        <div className="absolute top-1/4 right-1/4 w-12 h-12 bg-red-300 rounded-full opacity-15 animate-rotate-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-18 h-18 bg-red-100 rounded-full opacity-20 animate-morph"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header with Animation */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-5 left-10 w-8 h-8 bg-red-500 rounded-full animate-scale-pulse"></div>
            <div className="absolute top-12 right-20 w-6 h-6 bg-red-600 rounded-full animate-float-delayed"></div>
            <div className="absolute bottom-5 left-32 w-10 h-10 bg-red-400 rounded-full animate-morph"></div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 relative z-10 animate-fade-in">
            Our Professional <span className="text-red-600 animate-gradient bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto relative z-10 animate-fade-in-delay">
            Comprehensive YouTube promotion services designed to accelerate your channel growth through strategic, data-driven campaigns.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-700 hover:scale-105 transform border border-gray-100 hover:border-red-200 relative overflow-hidden animate-card-rotate"
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              {/* Enhanced gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-50/0 to-red-100/0 group-hover:from-red-50/60 group-hover:to-red-100/40 transition-all duration-700 rounded-2xl animate-gradient-shift"></div>
              
              {/* Floating background elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-red-50 rounded-full opacity-0 group-hover:opacity-30 transition-all duration-500 animate-float"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-red-100 rounded-full opacity-0 group-hover:opacity-20 transition-all duration-500 animate-bounce-gentle"></div>
              
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-red-500 to-red-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg animate-icon-float">
                  <service.icon className="h-8 w-8 text-white animate-icon-pulse" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300 animate-text-slide-up">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed animate-text-fade-in">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-700 animate-feature-slide-in" style={{ animationDelay: `${(index * 0.1) + (featureIndex * 0.1)}s` }}>
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewServices;
