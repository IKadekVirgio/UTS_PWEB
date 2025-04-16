import ServiceCard from "./props/services-props"

const services = [
  {
    title: "Custom Web Design",
    description: "Tailor-made website designs that reflect your brand's unique identity with modern aesthetics and user-friendly layouts.",
    image: "/CustomWebDesign.png",
    alt: "Custom Web Design"
  },
  {
    title: "E-commerce Solutions",
    description: "Robust e-commerce platforms built to maximize online sales and simplify product management with secure payment integrations.",
    image: "/ECommerceSolution.png",
    alt: "E-commerce Solutions"
  },
  {
    title: "Responsive & Mobile Optimization",
    description: "Websites optimized for every device – ensuring flawless performance and user experience across desktops, tablets, and smartphones.",
    image: "/Responsive.png",
    alt: "Responsive & Mobile Optimization"
  },
  {
    title: "Digital Marketing Integration",
    description: "Seamless integration with digital marketing strategies to boost your online presence, SEO rankings, and lead conversions.",
    image: "/DigitalMarketing.png",
    alt: "Digital Marketing Integration"
  }
]

export default function Services() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-14">
        <p className="text-sm text-gray-500 uppercase tracking-wider mb-2 font-semibold">CATEGORY</p>
        <h2 className="text-4xl font-extrabold text-[#1A2B4E]">We Offer Best Services</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            image={service.image}
            alt={service.alt}
          />
        ))}
      </div>
    </section>
  )
}
