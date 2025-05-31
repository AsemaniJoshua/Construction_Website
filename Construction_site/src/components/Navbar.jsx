import Logo from "/assets/images/logo.jpg"
import { CiMenuKebab } from "react-icons/ci";
import { Link } from "react-router-dom";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Navbar() {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function handleClickOutside(e){

    if(!e.target.closest("#mobile-menu") && !e.target.closest("#menu-icon")){ 
      setIsMobileMenuOpen(false);
    }
  }

  useEffect(() => {
    if(isMobileMenuOpen){
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMobileMenuOpen]);



    return(
      <>
        {/* Navbar */}
        <motion.nav
        initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
        className="flex flex-row justify-between items-center py-[20px] pl-[5px] pr-[15px] shadow-lg fixed top-0 left-0 right-0 z-[20] bg-white">
          {/* Logo */}
          <Link to="/">
            <div className="flex flex-row cursor-pointer justify-center items-center">
            <img src={Logo} alt="logo" className="w-[50px] h-[50px] rounded-full" />
            {/* Text */}
            <h1 className="text-lg font-medium">CONSTRUCT<span className="text-3xl font-bold">X</span></h1>
        </div>
          </Link>

        {/* Menu Icon */}
        <CiMenuKebab className="text-2xl text-black cursor-pointer" id="menu-icon" onClick={() => setIsMobileMenuOpen(true)} />

        </motion.nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <section className="fixed top-0 right-0 z-[25] h-full w-1/2 py-[60px] px-[80] shadow-lg bg-white" id="mobile-menu">

          <IoCloseCircleOutline className="text-3xl text-black cursor-pointer ml-auto mr-[20px]" onClick={() => setIsMobileMenuOpen(false)} />

          <ul className="flex flex-col gap-[30px] mt-[60px] justify-center items-center">
            <li className="list-none"><Link className="no-underline" to="/">Home</Link></li>
            <li className="list-none"><Link className="no-underline" to="/about">About</Link></li>
            <li className="list-none"><Link className="no-underline" to="/contact">Contact</Link></li>
          </ul>

        </section>
        )}

      </>
    );
}

export default Navbar;