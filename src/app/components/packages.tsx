import PackageCard from "./props/packages-props"

const packages = [
  {
    title: "Corporate Landing Page Package",
    image: "/corporate.png",
    alt: "Corporate Landing Page Package",
  },
  {
    title: "E-commerce Website Package",
    image: "/ECommerceWebsite.png",
    alt: "E-commerce Website Package",
  },
  {
    title: "Portfolio & Personal Branding Website",
    image: "/PersonalPage.png",
    alt: "Portfolio & Personal Branding Website",
  }
]

export default function Packages() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Top Selling</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B4E]">Top Packages</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {packages.map((pkg, index) => (
          <PackageCard
            key={index}
            title={pkg.title}
            image={pkg.image}
            alt={pkg.alt}
          />
        ))}
      </div>
    </section>
  )
}
