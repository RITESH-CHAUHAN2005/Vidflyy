import { Play, ExternalLink } from "lucide-react";

const OurWorks = () => {
  const videos = [
    {
      title: "Paalnilaavin Video Song",
      thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=225&fit=crop",
      views: "2.5M",
      category: "Music"
    },
    {
      title: "Product Advertisement",
      thumbnail: "https://plus.unsplash.com/premium_photo-1742482666813-82d3db55f2bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UHJvZHVjdCUyMEFkdmVydGlzZW1lbnQlMjBncmFwaHxlbnwwfHwwfHx8MA%3D%3D",
      views: "1.8M",
      category: "Commercial"
    },
    {
      title: "Movie Official Trailer",
      thumbnail: "https://plus.unsplash.com/premium_photo-1748035806808-80c32ffc7430?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TW92aWUlMjBPZmZpY2lhbCUyMFRyYWlsZXJ8ZW58MHx8MHx8fDA%3D",
      views: "800K",
      category: "Entertainment"
    },
    {
      title: "Tech Review Content",
      thumbnail: "https://images.unsplash.com/photo-1633307057722-a4740ba0c5d0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VGVjaCUyMFJldmlldyUyMENvbnRlbnR8ZW58MHx8MHx8fDA%3D",
      views: "650K",
      category: "Technology"
    },
    {
      title: "Gaming Walkthrough",
      thumbnail: "https://plus.unsplash.com/premium_photo-1744139468667-404f5dae5341?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8R2FtaW5nJTIwV2Fsa3Rocm91Z2h8ZW58MHx8MHx8fDA%3D",
      views: "900K",
      category: "Gaming"
    },
    {
      title: "Educational Tutorial",
      thumbnail: "https://plus.unsplash.com/premium_photo-1661765677053-3e83770b25d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RWR1Y2F0aW9uYWwlMjBUdXRvcmlhbHxlbnwwfHwwfHx8MA%3D%3D",
      views: "450K",
      category: "Education"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 font-montserrat relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-red-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 right-20 w-16 h-16 bg-red-200 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-red-50 rounded-full opacity-25 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            OUR <span className="text-red-600">WORKS</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcase of successful video campaigns we've promoted across different niches and industries
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden">
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={`Thumbnail of ${video.title}`}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="bg-red-600 text-white rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                    <Play className="h-8 w-8" />
                  </div>
                </div>

                {/* Views Badge */}
                <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {video.views} views
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {video.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                  {video.title}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">Promoted Campaign</div>
                  <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-red-600 transition-colors duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-12 gap-2">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === 0 ? 'bg-red-600' : 'bg-gray-300'
              } hover:bg-red-500 cursor-pointer`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWorks;
