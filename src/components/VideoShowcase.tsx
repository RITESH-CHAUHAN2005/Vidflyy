
import { Play, Users, TrendingUp, Youtube, Target, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const VideoShowcase = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917355518761', '_blank');
  };

  return (
    <section className="py-20 bg-white font-montserrat relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Get Started in <span className="text-red-600">3 Simple Steps</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined process makes growing your YouTube channel effortless
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Step 1 - Choose Your Video */}
          <div className="relative group">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
              <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                1
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center relative overflow-hidden group hover:scale-105 transition-all duration-500 pt-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Choose Your Video</h3>
              <p className="text-gray-600 mb-6">
                Select any video from your channel to promote and reach new audiences with targeted ads.
              </p>
              
              {/* Video Mock-up */}
              <div className="bg-gray-900 rounded-xl p-4 mb-4 mx-auto max-w-xs">
                <div className="bg-red-600 rounded-lg p-6 text-white text-center relative">
                  <Play className="h-8 w-8 mx-auto mb-2" />
                  <div className="text-sm font-medium">Your Channel Videos</div>
                  <div className="absolute top-2 right-2 bg-gray-700 rounded px-2 py-1 text-xs">
                    HD
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 - AI Finds Your Audience */}
          <div className="relative group">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
              <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                2
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8 text-center relative overflow-hidden group hover:scale-105 transition-all duration-500 pt-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI Finds Your Audience</h3>
              <p className="text-gray-600 mb-6">
                Our advanced AI analyzes your content and matches it to viewers most likely to subscribe.
              </p>
              
              {/* AI Targeting Mock-up */}
              <div className="bg-white rounded-xl p-4 mb-4 border-2 border-yellow-200">
                <div className="grid grid-cols-4 gap-2 mb-3">
                  <div className="w-8 h-8 bg-red-500 rounded-full"></div>
                  <div className="w-8 h-8 bg-red-500 rounded-full"></div>
                  <div className="w-8 h-8 bg-red-500 rounded-full"></div>
                  <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                  <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                  <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                  <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                  <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Target className="h-4 w-4 text-red-500" />
                  <span>AI Targeting Active</span>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 - Watch Your Growth */}
          <div className="relative group">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
              <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                3
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center relative overflow-hidden group hover:scale-105 transition-all duration-500 pt-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Watch Your Growth</h3>
              <p className="text-gray-600 mb-6">
                Sit back and watch as your subscriber count grows with real, engaged viewers.
              </p>
              
              {/* Growth Dashboard Mock-up */}
              <div className="bg-white rounded-xl p-4 mb-4 border-2 border-green-200">
                <div className="space-y-2">
                  <div className="bg-green-100 text-green-800 px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Campaign Live
                  </div>
                  <div className="bg-blue-100 text-blue-800 px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
                    <TrendingUp className="h-4 w-4" />
                    Subscribers +250
                  </div>
                  <div className="bg-red-100 text-red-800 px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
                    <BarChart3 className="h-4 w-4" />
                    Growing Fast
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button 
            onClick={handleWhatsAppClick}
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 text-lg font-bold transition-all duration-300 hover:scale-105 active:scale-95"
          >
            → Start Growing Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
