import HeaderComponent from "./Components/HeaderComponent"
import LandingPage from "./Components/LandingPage"
import Products from "./Components/Products"
import Sponsors from "./Components/Sponsors"
import About from "./Components/About"
import Testimonials from "./Components/Testimonials"
import Pricing from "./Components/Pricing"
import Insights from "./Components/Insights"
import Footer from "./Components/Footer"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion, useScroll, useSpring } from "motion/react"
import './index.css'
const App = () => {
  AOS.init()
  const {scrollYProgress} = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })
  return (
    
    <>
      <motion.div 
      style={{
        scaleX: scaleX,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 10,
        originX: 0,
        backgroundColor: "#4CAFEB",
        zIndex: 1000
        }}
      />
      <div>
      <HeaderComponent/>
      <LandingPage/>  
      <Products/>
      <Sponsors/>
      <About/>
      <Testimonials/>
      <Pricing/>
      <Insights/>
      <Footer/>
      </div>
    </>
  )
}

export default App