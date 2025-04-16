import { HiOutlineMail } from "react-icons/hi";

export default function Newsletter() {
  return (
    <section className="bg-purple-50 py-16">
      <div className="max-w-4xl mx-auto bg-[#F7F5FF] rounded-[60px] px-8 py-12 text-center">
        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-8 max-w-2xl mx-auto">
          Subscribe to get information, latest news and other interesting offers about Palm Studio
        </h3>
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
          {/* Input with icon */}
          <div className="relative w-full sm:w-auto flex-grow max-w-md">
            <HiOutlineMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
            <input
              type="email"
              placeholder="Your email"
              className="w-full pl-12 pr-4 py-3 rounded-md border border-gray-200 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-200"
            />
          </div>
          {/* Gradient button */}
          <button className="w-full sm:w-auto px-6 py-3 rounded-md bg-gradient-to-r from-[#FF7F50] to-[#FF6347] hover:from-[#FF6347] hover:to-[#FF4E2A] text-white font-medium transition">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
