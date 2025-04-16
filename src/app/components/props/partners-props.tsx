import Image from "next/image";

interface PartnerLogoProps {
  name: string;
  src: string;
}

export default function PartnerLogo({ name, src }: PartnerLogoProps) {
  return (
    <div className="grayscale opacity-70 hover:opacity-100 transition-all duration-300">
      <Image src={src} alt={name} width={120} height={50} className="object-contain" />
    </div>
  );
}
