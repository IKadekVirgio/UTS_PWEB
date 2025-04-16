import Link from "next/link"
import { ChevronDown } from "lucide-react"

export default function Header() {
  return (
    <header className="container mx-auto px-4 py-6 flex items-center justify-between">
      <div className="font-bold text-xl">Palm Studio</div>
      <div className="hidden md:flex items-center gap-8">
        <Link href="#" className="text-sm">Packages</Link>
        <Link href="#" className="text-sm">Testimonials</Link>
        <Link href="#" className="text-sm">Login</Link>
        <Link href="#" className="text-sm bg-white border border-gray-200 rounded-full px-4 py-1">Sign Up</Link>
        <div className="flex items-center gap-1">
          <span className="text-sm">EN</span>
          <ChevronDown className="h-4 w-4" />
        </div>
      </div>
    </header>
  )
}
