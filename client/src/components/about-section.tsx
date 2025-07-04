export default function AboutSection() {
  const stats = [
    { value: "500+", label: "Properties Sold" },
    { value: "450+", label: "Happy Clients" },
    { value: "15+", label: "Years Experience" },
    { value: "25", label: "Avg. Days to Sale" }
  ];

  return (
    <section id="about" className="py-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-6">
              About Centre Point Homes
            </h2>
            <p className="text-lg text-neutral-600 mb-6">
              With over 15 years of experience in the real estate industry, Centre Point Homes has established itself as a trusted partner for buyers and sellers throughout the region. Our commitment to excellence and personalized service has helped hundreds of families find their dream homes.
            </p>
            <p className="text-lg text-neutral-600 mb-8">
              We understand that buying or selling a home is one of life's most significant decisions. That's why we provide comprehensive support throughout the entire process, ensuring our clients feel confident and informed every step of the way.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-neutral-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Professional real estate team" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
