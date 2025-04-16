import PartnerLogo from "./props/partners-props";

export default function Partners() {
  const partners = [
    { name: "Axon Airlines", src: "/axon.png" },
    { name: "Jetstar", src: "/jetstar.png" },
    { name: "Expedia", src: "/expedia.png" },
    { name: "Qantas", src: "/qantas.png" },
    { name: "Alitalia", src: "/alitalia.png" },
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
        {partners.map((partner, index) => (
          <PartnerLogo key={index} name={partner.name} src={partner.src} />
        ))}
      </div>
    </section>
  );
}
