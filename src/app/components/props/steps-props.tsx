import Image from "next/image";

interface StepCardProps {
  iconSrc: string;
  bgColor: string;
  title: string;
  description: string;
}

export default function StepCard({ iconSrc, bgColor, title, description }: StepCardProps) {
  return (
    <div className="flex gap-4">
      <div className={`flex-shrink-0 ${bgColor} rounded-lg w-12 h-12 flex items-center justify-center text-white`}>
        <Image
          src={iconSrc}
          alt={title}
          width={24}
          height={24}
        />
      </div>
      <div>
        <h3 className="font-bold mb-1 text-[#1A2B4E]">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
