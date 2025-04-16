import Image from "next/image"

interface PackageCardProps {
  title: string
  image: string
  alt: string
}

export default function PackageCard({ title, image, alt }: PackageCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
      <div className="w-full h-40 mb-4">
        <Image
          src={image}
          alt={alt}
          width={600}
          height={600}
          className="w-full h-full object-contain rounded-md"
        />
      </div>
      <h3 className="text-[#333] text-lg font-semibold leading-tight">{title}</h3>
    </div>
  )
}
