import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

export default function HeroSection() {
  const [searchData, setSearchData] = useState({
    location: "",
    propertyType: "",
    priceRange: ""
  });

  const handleSearch = () => {
    // This would typically filter properties or navigate to search results
    console.log("Search data:", searchData);
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
          <p className="text-xl md:text-2xl mb-8 text-neutral-200 max-w-3xl mx-auto">
            Discover exceptional properties with Centre Point Homes - your trusted partner in real estate excellence.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-6 text-neutral-800">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Location</label>
                <Input
                  type="text"
                  placeholder="Enter city or ZIP code"
                  value={searchData.location}
                  onChange={(e) => setSearchData(prev => ({ ...prev, location: e.target.value }))}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Property Type</label>
                <Select onValueChange={(value) => setSearchData(prev => ({ ...prev, propertyType: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="single-family">Single Family</SelectItem>
                    <SelectItem value="condo">Condo</SelectItem>
                    <SelectItem value="townhouse">Townhouse</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Price Range</label>
                <Select onValueChange={(value) => setSearchData(prev => ({ ...prev, priceRange: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Any Price" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any Price</SelectItem>
                    <SelectItem value="200-400">$200K - $400K</SelectItem>
                    <SelectItem value="400-600">$400K - $600K</SelectItem>
                    <SelectItem value="600+">$600K+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-end">
                <Button 
                  onClick={handleSearch}
                  className="w-full bg-primary text-white hover:bg-blue-700 transition-colors font-medium"
                >
                  <Search className="w-4 h-4 mr-2" />
                  Search Properties
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
