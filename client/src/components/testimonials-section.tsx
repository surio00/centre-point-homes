import { Star } from "lucide-react";

const testimonials = [
  {
    rating: 5,
    content: "Centre Point Homes made our first home buying experience incredibly smooth. Their team was professional, knowledgeable, and always available to answer our questions.",
    name: "Sarah & Mike Johnson",
    location: "Springfield",
    avatar: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  },
  {
    rating: 5,
    content: "Outstanding service! They helped us sell our home quickly and for an excellent price. We couldn't be happier with the results.",
    name: "David Chen",
    location: "Downtown",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  },
  {
    rating: 5,
    content: "Professional, reliable, and trustworthy. Centre Point Homes exceeded our expectations in every way. Highly recommended!",
    name: "Emily Rodriguez",
    location: "Riverside",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience with Centre Point Homes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-8 shadow-lg border border-white/30">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 mr-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-neutral-500">{testimonial.rating}.0</span>
              </div>
              <p className="text-neutral-600 mb-6">"{testimonial.content}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <div className="font-semibold text-neutral-800">{testimonial.name}</div>
                  <div className="text-sm text-neutral-500">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
