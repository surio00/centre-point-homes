import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Bed, Bath, Square, Play, X } from "lucide-react";

const properties = [
  {
    id: 1,
    title: "Luxury Family Home",
    price: "₹5,20,00,000",
    address: "Koregaon Park, Pune, Maharashtra",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2400,
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    videoId: "YOUR_GDRIVE_FILE_ID_1" // Replace with actual Google Drive file ID
  },
  {
    id: 2,
    title: "Downtown Condo",
    price: "₹3,40,00,000",
    address: "Baner Road, Pune, Maharashtra",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1200,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    videoId: "YOUR_GDRIVE_FILE_ID_2" // Replace with actual Google Drive file ID
  },
  {
    id: 3,
    title: "Suburban Retreat",
    price: "₹4,28,00,000",
    address: "Wakad, Pune, Maharashtra",
    bedrooms: 3,
    bathrooms: 2.5,
    sqft: 1800,
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    videoId: "YOUR_GDRIVE_FILE_ID_3" // Replace with actual Google Drive file ID
  }
];

export default function FeaturedProperties() {
  const [selectedProperty, setSelectedProperty] = useState<any>(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const viewProperty = (id: number) => {
    const property = properties.find(p => p.id === id);
    if (property) {
      setSelectedProperty(property);
      setIsVideoOpen(true);
    }
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
    setSelectedProperty(null);
  };

  const getGoogleDriveEmbedUrl = (fileId: string) => {
    return `https://drive.google.com/file/d/${fileId}/preview`;
  };

  const viewAllProperties = () => {
    console.log("View all properties");
  };

  return (
    <section id="properties" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">Featured Properties</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium properties, each offering unique features and exceptional value.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <Card key={property.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white/20 backdrop-blur-sm border border-white/30">
              <div className="aspect-video overflow-hidden relative group">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                {/* Video Play Button Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    onClick={() => viewProperty(property.id)}
                    className="bg-white text-black hover:bg-gray-100 rounded-full p-4"
                    size="icon"
                  >
                    <Play className="w-8 h-8" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="mb-3">
                  <div className="flex justify-between items-start gap-3">
                    <h3 className="text-xl font-semibold text-neutral-800 flex-1 leading-tight">{property.title}</h3>
                    <span className="text-2xl font-bold text-primary flex-shrink-0">{property.price}</span>
                  </div>
                </div>
                <p className="text-neutral-600 mb-4">{property.address}</p>
                <div className="flex items-center space-x-4 mb-4 text-sm text-neutral-500">
                  <span className="flex items-center">
                    <Bed className="w-4 h-4 mr-1" />
                    {property.bedrooms} Beds
                  </span>
                  <span className="flex items-center">
                    <Bath className="w-4 h-4 mr-1" />
                    {property.bathrooms} Baths
                  </span>
                  <span className="flex items-center">
                    <Square className="w-4 h-4 mr-1" />
                    {property.sqft.toLocaleString()} sq ft
                  </span>
                </div>
                <Button 
                  onClick={() => viewProperty(property.id)}
                  className="w-full bg-primary text-white hover:bg-blue-700 transition-colors font-medium flex items-center justify-center gap-2"
                >
                  <Play className="w-4 h-4" />
                  Watch Property Video
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* <div className="text-center mt-12">
          <Button 
            onClick={viewAllProperties}
            className="bg-secondary text-white py-3 px-8 rounded-md hover:bg-red-700 transition-colors font-medium text-lg"
          >
            View All Properties
          </Button>
        </div> */}
      </div>

      {/* Video Dialog */}
      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="max-w-4xl w-full h-[80vh]">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              {selectedProperty?.title} - Property Video
              <Button
                onClick={closeVideo}
                variant="ghost"
                size="icon"
                className="h-6 w-6"
              >
                <X className="h-4 w-4" />
              </Button>
            </DialogTitle>
          </DialogHeader>
          <div className="flex-1 w-full h-full">
            {selectedProperty?.videoId && (
              <iframe
                src={getGoogleDriveEmbedUrl(selectedProperty.videoId)}
                className="w-full h-full rounded-lg"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title={`${selectedProperty.title} Property Video`}
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
