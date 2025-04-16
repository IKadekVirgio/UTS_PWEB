import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background kanan */}
      <div className="absolute top-0 right-0 w-[60%] h-full -z-10">
        <Image
          src="/decor_cream.png"
         alt="Cream Decoration"
          fill
          className="object-cover"
        />
     </div>
      {/* Container utama */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A2B4E] leading-tight">
              Launch
              <br />
              Your Brand
              <br />
              Online.
            </h1>
            <p className="text-gray-600 max-w-md">
              We design modern digital experiences tailored to boost your online presence, enhance user engagement,
              and foster sustainable business growth.
            </p>
            <button className="bg-[#FFA500] hover:bg-[#FF8C00] text-white font-medium px-6 py-3 rounded-md transition">
              Find out more
            </button>
          </div>

          {/* Placeholder kosong di grid kanan */}
          <div className="hidden md:block"></div>
        </div>
      </div>

      {/* Gambar orang, absolut agar bebas dari grid */}
      <div className="absolute bottom-0 right-[10%] z-0">
        <Image
          src="/hero_person.png"
          alt="Person with tablet"
          width={690}
          height={600}
          className="object-contain"
        />
      </div>
    </section>
  );
}
