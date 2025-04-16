import { ChevronRight } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row md:items-center gap-8">
        {/* Left Section: Title */}
        <div className="md:w-1/2">
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">
            TESTIMONIALS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A2B4E] leading-tight">
            What People Say
            <br />
            About Us.
          </h2>
        </div>

        {/* Right Section: Testimonial Card */}
        <div className="md:w-1/2 flex justify-start md:justify-end">
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg max-w-md relative">
            <p className="text-gray-600 mb-6 leading-relaxed text-base md:text-lg">
              "I'm amazed at how quickly they understood my business goals. The end result? A modern, user-friendly
              website that has already boosted my online presence."
            </p>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-[#1A2B4E]">Steve Jobs</p>
                <p className="text-sm text-gray-500">California, America</p>
              </div>
              <button className="text-gray-400 hover:text-gray-500 transition-colors">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
