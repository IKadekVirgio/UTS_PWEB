import Image from "next/image";
import StepCard from "./props/steps-props";

const stepsData = [
  {
    iconSrc: "/checkmark.png",
    bgColor: "bg-yellow-500",
    title: "Choose package",
    description: "Select the package that best fits your business needs and goals."
  },
  {
    iconSrc: "/wallet.png",
    bgColor: "bg-red-500",
    title: "Make Payment",
    description: "Secure your order with fast and safe online payment options."
  },
  {
    iconSrc: "/consultation.png",
    bgColor: "bg-blue-500",
    title: "Consultation",
    description: "Connect with our specialists to discuss your vision and get your project started."
  }
];

export default function Steps() {
  return (
    <section className="container mx-auto px-4 py-16">
      {/* Section Title */}
      <div className="mb-8">
        <p className="text-sm text-gray-500 mb-2">Easy and Fast</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B4E]">
          Book Your Future
          <br />
          Website In 3 Easy Steps
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left Column: Steps */}
        <div className="space-y-8">
          {stepsData.map((step, index) => (
            <StepCard 
              key={index}
              iconSrc={step.iconSrc}
              bgColor={step.bgColor}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>

        {/* Right Column: Illustrative Image */}
        <div className="flex justify-center md:justify-end md:-mr-10">
          <Image
            src="/steps.png"
            alt="Person working on laptop"
            width={600}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
