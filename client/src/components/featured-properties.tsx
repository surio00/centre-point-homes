import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Bed, Bath, Square } from "lucide-react";

const properties = [
  {
    id: 1,
    title: "Luxury Family Home",
    price: "$650,000",
    address: "123 Maple Street, Springfield",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2400,
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 2,
    title: "Downtown Condo",
    price: "$425,000",
    address: "456 Urban Avenue, Downtown",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1200,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 3,
    title: "Suburban Retreat",
    price: "$535,000",
    address: "789 Oak Lane, Riverside",
    bedrooms: 3,
    bathrooms: 2.5,
    sqft: 1800,
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  }
];

export default function FeaturedProperties() {
  const viewProperty = (id: number) => {
    console.log("View property:", id);
  };

  const viewAllProperties = () => {
    console.log("View all properties");
  };

  return (
    <section id="properties" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">Featured Properties</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium properties, each offering unique features and exceptional value.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <Card key={property.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-neutral-800">{property.title}</h3>
                  <span className="text-2xl font-bold text-primary">{property.price}</span>
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
                  className="w-full bg-primary text-white hover:bg-blue-700 transition-colors font-medium"
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            onClick={viewAllProperties}
            className="bg-secondary text-white py-3 px-8 rounded-md hover:bg-red-700 transition-colors font-medium text-lg"
          >
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  );
}
