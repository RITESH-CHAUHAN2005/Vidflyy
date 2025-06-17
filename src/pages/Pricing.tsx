
import Navbar from "@/components/Navbar";
import EstimateSection from "@/components/EstimateSection";
import PricingInfo from "@/components/PricingInfo";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { Check, Users, Eye, Heart, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingPage = () => {
  const subscriptionPlans = [
    {
      name: "Trial",
      price: "₹1199",
      period: "",
      description: "YouTube Advertising",
      subscribers: "100-120 SUBSCRIBERS",
      popular: false,
      badge: "POPULAR",
      features: [
        "Views",
        "Likes", 
        "Comments",
        "Subscribers",
        "Engagement"
      ]
    },
    {
      name: "Beginner",
      price: "₹2499",
      period: "",
      description: "YouTube Advertising",
      subscribers: "250-300 SUBSCRIBERS",
      popular: true,
      features: [
        "Views",
        "Likes",
        "Comments", 
        "Subscribers",
        "Engagement"
      ]
    },
    {
      name: "Expert",
      price: "₹8800",
      period: "",
      description: "YouTube Advertising",
      subscribers: "1000-1200 SUBSCRIBERS",
      popular: false,
      features: [
        "Views",
        "Likes",
        "Comments",
        "Subscribers", 
        "Engagement"
      ]
    }
  ];

  const monetizationPlans = [
    {
      name: "Beginner",
      price: "₹12000",
      period: "",
      description: "YouTube Advertising",
      watchHours: "4000 Watch Hours",
      popular: false,
      features: [
        "Likes",
        "Comments",
        "Subscribers",
        "Engagement"
      ]
    },
    {
      name: "Ultimate",
      price: "₹18000",
      period: "",
      description: "YouTube Advertising", 
      watchHours: "4000 Watch Hours + 1000 Subscribers",
      popular: true,
      badge: "25% OFF",
      features: [
        "Likes",
        "Comments",
        "Subscribers",
        "Engagement"
      ]
    }
  ];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917355518761', '_blank');
  };

  const PlanGrid = ({ plans, title }: { plans: any[], title: string }) => (
    <div className="mb-16">
      <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">{title}</h3>
      <div className={`grid ${plans.length === 2 ? 'md:grid-cols-2 max-w-4xl mx-auto' : 'md:grid-cols-3'} gap-8`}>
        {plans.map((plan, index) => (
          <div key={index} className={`bg-gradient-to-br from-red-50 via-white to-red-50 rounded-2xl p-8 shadow-lg relative animate-card-float border-2 border-red-100 hover:border-red-300 transition-all duration-500 hover:scale-105 ${plan.popular ? 'ring-2 ring-red-500 scale-105' : ''}`} style={{ animationDelay: `${index * 0.2}s` }}>
            {plan.badge && (
              <div className="absolute -top-4 right-4">
                <span className="bg-black text-white px-4 py-2 rounded-full text-sm font-bold rotate-12 animate-pulse">
                  {plan.badge}
                </span>
              </div>
            )}
            
            <div className="text-center mb-8">
              <div className="bg-red-600 text-white py-4 px-6 rounded-xl mb-4 animate-gradient-shift" style={{ background: 'linear-gradient(45deg, #dc2626, #ef4444, #dc2626)' }}>
                <h4 className="text-xl font-bold">{plan.name}</h4>
                <p className="text-red-100 text-sm">{plan.description}</p>
              </div>
              
              <div className="mb-4 animate-price-scale">
                <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
              </div>
              
              {plan.subscribers && (
                <div className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-bold mb-4">
                  {plan.subscribers}
                </div>
              )}
              
              {plan.watchHours && (
                <div className="text-gray-700 font-medium mb-4">
                  {plan.watchHours}
                </div>
              )}
            </div>
            
            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center gap-3 animate-feature-slide-in" style={{ animationDelay: `${(index * 0.1) + (featureIndex * 0.1)}s` }}>
                  <div className="flex items-center gap-2 text-gray-700">
                    {feature === 'Views' && <Eye className="h-4 w-4 text-gray-500" />}
                    {feature === 'Likes' && <Heart className="h-4 w-4 text-gray-500" />}
                    {feature === 'Comments' && <div className="h-4 w-4 rounded-full bg-gray-400"></div>}
                    {feature === 'Subscribers' && <Users className="h-4 w-4 text-gray-500" />}
                    {feature === 'Engagement' && <div className="h-4 w-4 rounded-full bg-gray-400 flex items-center justify-center"><span className="text-xs">+</span></div>}
                    <span>{feature}</span>
                  </div>
                </li>
              ))}
            </ul>
            
            <Button 
              onClick={handleWhatsAppClick}
              className={`w-full py-3 transition-all duration-300 hover:scale-105 active:scale-95 animate-button-pulse ${plan.popular ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-red-600 hover:bg-red-700 text-white'}`}
            >
              {title.includes('Subscription') ? 'BUY NOW' : 'CONTACT US'}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white font-montserrat">
      <Navbar />
      
      {/* Hero Section for Pricing Page */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Pricing <span className="text-red-600">Plans</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan to grow your YouTube channel and maximize your reach.
          </p>
        </div>
      </section>

      {/* Estimate Section with Campaign Performance */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Campaign Performance */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 animate-card-float">
              <div className="flex items-center gap-2 mb-6 p-3 bg-blue-50 rounded-lg">
                <div className="h-5 w-5 bg-blue-600 rounded-full"></div>
                <span className="text-blue-700 font-medium text-sm">You're protected by VIDFLYY's satisfaction guarantee!</span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Example Campaign Performance</h3>
              <p className="text-gray-600 mb-6">
                Curious about what VIDFLYY can do for your YouTube channel? Below are examples of potential reach from past campaigns at different budget levels.
              </p>

              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Enter budget (min. ₹500)</label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-semibold">₹</span>
                    <input
                      type="number"
                      placeholder="500"
                      min="500"
                      className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 transition-all duration-300 hover:scale-105">
                    Estimate
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Side - Estimated Reach */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-8 text-white animate-card-rotate">
              <h3 className="text-2xl font-bold mb-8">Estimated Potential Reach:</h3>
              
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 animate-float">
                  <div className="flex items-center gap-3 mb-3">
                    <Eye className="h-6 w-6 text-blue-200" />
                    <span className="text-lg font-medium">Potential Views*</span>
                  </div>
                  <div className="text-3xl font-bold">25K - 45K</div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 animate-float-delayed">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="h-6 w-6 text-red-300" />
                    <span className="text-lg font-medium">Potential Subscribers*</span>
                  </div>
                  <div className="text-3xl font-bold">2,000 - 3,200</div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 animate-bounce-gentle">
                  <div className="flex items-center gap-3 mb-3">
                    <Heart className="h-6 w-6 text-pink-300" />
                    <span className="text-lg font-medium">Potential Likes*</span>
                  </div>
                  <div className="text-3xl font-bold">1,500 - 2,250</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Subscription and Monetization Plans */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Choose Your <span className="text-red-600">Plan</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible pricing plans designed to fit every creator's needs and budget.
            </p>
          </div>
          
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Subscribers Plan</h3>
            <p className="text-center text-gray-600 mb-8 max-w-4xl mx-auto">We Advertise Your YouTube Video in Form Of True View Discovery Ad until The Channel Achieves Commited Target of Subscribers.</p>
            <PlanGrid plans={subscriptionPlans} title="" />
          </div>
          
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Monetization Plan</h3>
            <p className="text-center text-gray-600 mb-8 max-w-4xl mx-auto">We Achieve YouTube Watch Hour Criteria With The Help Of Ads Platform, We Reward People To Watch Your Video On Different Games & Websites</p>
            <PlanGrid plans={monetizationPlans} title="" />
          </div>
        </div>
      </section>

      <PricingInfo />
      <FAQ />
      <Footer />
    </div>
  );
};

export default PricingPage;
