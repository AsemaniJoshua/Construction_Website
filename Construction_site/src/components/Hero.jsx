import HeroImage from "/assets/images/Construction.gif"
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


function Hero() {

    return(
      <motion.section
       initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
      style={{backgroundImage: `url(${HeroImage})` }} className="h-screen flex flex-col justify-center items-center bg-black bg-no-repeat bg-center bg-cover bg-gradient-to-r from-black via-black to-black relative">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
        <div className="z-10 text-white flex flex-col gap-[40px] justify-center items-center mt-[60px]">
          <span className="w-[70px] h-[3px] bg-yellow-400"></span>
          <h1 className="text-3xl font-bold text-center md:text-4xl">Welcome to Construction Site</h1>
          <p className="text-xs text-center text-gray-200 md:w-[400px] md:text-sm">Your one-stop solution for all your construction needs and services. We provide a wide range of services to meet your needs.</p>
          <Link to="/"><button className="bg-yellow-400 text-black py-2 px-4 md:px-6 rounded-lg hover:bg-yellow-500 transition duration-300 ease-in-out cursor-pointer">Contact Us</button></Link>
        </div>
      </motion.section>
    );
  }
  
  export default Hero;