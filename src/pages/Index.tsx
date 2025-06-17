
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import NewServices from "@/components/NewServices";
import VideoShowcase from "@/components/VideoShowcase";
import Stats from "@/components/Stats";
import ExampleCampaign from "@/components/ExampleCampaign";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import CampaignReports from "@/components/CampaignReports";
import OurWorks from "@/components/OurWorks";
import FeaturedPartners from "@/components/FeaturedPartners";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-montserrat">
      <Navbar />
      <Hero />
      <Stats />
      <ExampleCampaign />
      <VideoShowcase />
      <NewServices />
      <Pricing />
      <Testimonials />
      <CampaignReports />
      <OurWorks />
      <FeaturedPartners />
      <Footer />
    </div>
  );
};

export default Index;
