import EventsSection from "./components/EventsSection";
import Footer from "./components/Footer";
import GallerySection from "./components/GallerySection";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import HistorySection from "./components/HistorySection";
import LocationSection from "./components/LocationSection";
import MenuSection from "./components/MenuSection";
import NoticeBar from "./components/NoticeBar";

export default function App() {
  return (
    <div className="min-h-screen bg-[#FFF8F0] text-[#1B3A6B]">
      <Header />
      <HeroSection />
      <NoticeBar />
      <HistorySection />
      <GallerySection />
      <MenuSection />
      <EventsSection />
      <LocationSection />
      <Footer />
    </div>
  );
}