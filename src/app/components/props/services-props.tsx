import Image from "next/image"

interface ServiceCardProps {
  title: string
  description: string
  image: string
  alt: string
}

export default function ServiceCard({ title, description, image, alt }: ServiceCardProps) {
  return (
    <div className="flex flex-col items-center text-center px-4">
      <div className="mb-4">
        <Image
          src={image}
          alt={alt}
          width={300}
          height={300}
          className="rounded-lg"
        />
      </div>
      <h3 className="font-semibold text-lg text-[#1A2B4E] mb-3">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
}