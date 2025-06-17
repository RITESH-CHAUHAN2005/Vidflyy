import { Play, TrendingUp, Users, Youtube, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917355518761', '_blank');
  };

  const handleWatchDemo = () => {
    navigate('/success-stories');
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-red-50 to-white py-20 lg:py-32 font-montserrat overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-bounce-gentle">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              #1 YouTube Growth Platform
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Boost Your Channel with
              <span className="text-red-600 block animate-text-gradient">Smart Video Marketing</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed animate-fade-in-delay">
              Reach real viewers and potential subscribers with VIDFLYY's advanced YouTube ad targeting. Get guaranteed results or your money back.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                onClick={handleWhatsAppClick} 
                size="lg" 
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-lg animate-button-bounce"
              >
                <Play className="mr-2 h-5 w-5" />
                Start Growing Now
              </Button>
              <Button 
                onClick={handleWatchDemo} 
                size="lg" 
                variant="outline" 
                className="border-red-600 text-red-600 hover:bg-red-50 px-8 py-4 text-lg transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-lg"
              >
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="space-y-3 animate-fade-in-delay-2">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-700">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Choose Your Video, We'll Create the YouTube Ads</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-700">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>100% Real Engagement — No Bots, Ever!</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-700">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Love Our Service or Your Money Back</span>
              </div>
            </div>
          </div>
          
          {/* Right Content - YouTube Video Preview */}
          <div className="relative animate-fade-in-delay">
            <div className="bg-gray-900 rounded-2xl shadow-2xl p-4 transform hover:scale-105 transition-transform duration-500 group">
              {/* Browser Bar */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="bg-gray-800 rounded px-3 py-1 text-white text-sm flex-1 text-center">
                  youtube.com/watch?v=your-video
                </div>
              </div>

              {/* Video Container */}
              <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-4 left-4">
                  <span className="bg-yellow-500 text-black px-2 py-1 rounded text-xs font-bold">
                    Promoted
                  </span>
                </div>
                
                <div className="text-center">
                  <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Play className="h-8 w-8 text-white ml-1" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Your Amazing Content</h3>
                  <p className="text-purple-200 text-sm">Ready to reach millions</p>
                  
                  <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 px-2 py-1 rounded text-xs">
                    5:32
                  </div>
                </div>
              </div>

              {/* Channel Info */}
              <div className="bg-white rounded-xl p-4 mt-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
                    Y
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Your Channel Name</div>
                    <div className="text-gray-600 text-sm">1.2M subscribers</div>
                  </div>
                </div>
                <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        @keyframes text-gradient {
          0%, 100% { color: #dc2626; }
          50% { color: #b91c1c; }
        }
        @keyframes button-bounce {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        .animate-bounce-gentle { animation: bounce-gentle 3s ease-in-out infinite; }
        .animate-text-gradient { animation: text-gradient 2s ease-in-out infinite; }
        .animate-button-bounce { animation: button-bounce 2s ease-in-out infinite; }
        .animate-fade-in { opacity: 0; animation: fadeIn 1s ease-out forwards; }
        .animate-fade-in-delay { opacity: 0; animation: fadeIn 1s ease-out 0.3s forwards; }
        .animate-fade-in-delay-2 { opacity: 0; animation: fadeIn 1s ease-out 0.6s forwards; }
        @keyframes fadeIn {
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default Hero;