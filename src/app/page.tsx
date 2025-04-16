import Header from "./components/header"
import Hero from "./components/hero"
import Services from "./components/services"
import Packages from "./components/packages"
import Steps from "./components/steps"
import Testimonials from "./components/testimonials"
import Partners from "./components/partners"
import Newsletter from "./components/newsletter"
import Footer from "./components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Services />
      <Packages />
      <Steps />
      <Testimonials />
      <Partners />
      <Newsletter />
      <Footer />
    </div>
  )
}
