import { Home, DollarSign, TrendingUp, Calculator, Handshake, Users } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Property Buying",
    description: "Find your perfect home with our expert guidance and extensive market knowledge. We'll help you navigate the buying process from start to finish."
  },
  {
    icon: DollarSign,
    title: "Property Selling",
    description: "Maximize your property's value with our strategic marketing approach and skilled negotiation to get you the best possible price."
  },
  {
    icon: TrendingUp,
    title: "Investment Consulting",
    description: "Build wealth through smart real estate investments. Our consultants provide insights on market trends and investment opportunities."
  },
  {
    icon: Calculator,
    title: "Market Analysis",
    description: "Get detailed market reports and property valuations to make informed decisions about your real estate transactions."
  },
  {
    icon: Handshake,
    title: "Negotiation Services",
    description: "Skilled negotiation to ensure you get the best deal possible, whether you're buying or selling residential or commercial property."
  },
  {
    icon: Users,
    title: "Client Support",
    description: "Ongoing support and guidance throughout your real estate journey, with dedicated agents available to answer your questions."
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">Our Services</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            We offer comprehensive real estate services to meet all your property needs, from buying and selling to investment consulting.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-8 text-center hover:shadow-lg transition-shadow duration-300 border border-white/30">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full mb-6">
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-4">{service.title}</h3>
                <p className="text-neutral-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
