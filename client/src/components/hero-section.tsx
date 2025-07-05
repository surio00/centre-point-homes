import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const handleContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-neutral-800 text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Find Your Perfect Home
          </h1>
          <p className="text-xl md:text-2xl text-neutral-200 max-w-3xl mx-auto">
            Discover exceptional properties with Centre Point Homes - your trusted partner in real estate excellence.
          </p>
        </div>
      </div>
    </section>
  );
}
