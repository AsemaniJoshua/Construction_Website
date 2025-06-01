import Logo from "/assets/images/logo.jpg"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { FaAnglesRight } from "react-icons/fa6";
import { useState } from "react";


function Footer() {

    const [email, setEmail] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    
    function handleSubmit(e){
        e.preventDefault()
        setIsLoading(true)
        alert("Thanks for Subscribing")
    }

    return (
        <>
        <motion.section
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.6}}
        viewport={{once:true, amount:0.2}}
        className="bg-[#1A1A1A] pt-[50px] px-[20px] flex flex-col gap-[40px] md:flex md:flex-row md:gap-[150px] md:py-[80px] md:px-[40px]"
        >

            <motion.div
             initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.6}}
        viewport={{once:true, amount:0.2}}
            className="flex flex-col gap-[10px] md:w-[40%]">
                <Link to="/">
                    <div className="flex flex-row cursor-pointer justify-start items-start">
                        <img src={Logo} alt="logo" className="w-[50px] h-[50px] rounded-full" />
                        {/* Text */}
                        <h1 className="text-lg font-medium text-white mt-[5px]">CONSTRUCT<span className="text-3xl font-bold">X</span></h1>
                    </div>
                </Link>

                {/* <p className="text-gray-400 text-[10px]">&copy; copyright 2025</p> */}

                <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam architecto amet delectus deserunt aperiam alias quos expedita laboriosam veritatis qui provident, doloremque dolore facere repellat, quibusdam hic, quam voluptatum error.                    
                </p>

            </motion.div>
            <motion.div
             initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.6}}
        viewport={{once:true, amount:0.2}}
            >
                <h2 className="text-white font-medium text-lg">Quick Links</h2>

                <ul className="list-none mt-[30px] flex flex-col gap-[20px]">
                    <li className="list-none flex flex-row gap-[8px]">
                        <FaAnglesRight className="text-sm text-gray-400" />
                        <Link to="/" className="no-underline text-gray-400 mt-[-6px]">Home</Link>
                    </li>
                    <li className="list-none flex flex-row gap-[8px]">
                        <FaAnglesRight className="text-sm text-gray-400" />
                        <Link to="/" className="no-underline text-gray-400 mt-[-6px]">About</Link>
                    </li>
                    <li className="list-none flex flex-row gap-[8px]">
                        <FaAnglesRight className="text-sm text-gray-400" />
                        <Link to="/" className="no-underline text-gray-400 mt-[-6px]">Contact</Link>
                    </li>

                </ul>
            </motion.div>

            <motion.div
             initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.6}}
        viewport={{once:true, amount:0.2}}
            className="flex flex-col gap-[20px] pb-[20px]">
                <h1 className="text-white text-xl font-bold">SUBSCRIBE TO OUR MAIL</h1>
                <form action="/" method="post" onSubmit={() => handleSubmit} className="flex flex-col gap-[5px]">
                    <input type="email" 
                    name="email" 
                    id="email" 
                    required
                    placeholder="Enter your email" className="text-gray-400 py-[10px] px-[20px] rounded-lg border"
                    value={email}
                    onChange={(e) => {setEmail(e.target.value)}}
                    />
                    <button 
                    type="submit"
                    className="text-white py-[10px] py-[5px] bg-yellow-400 font-bold tracking-light rounded-lg hover:bg-yellow-300 transition duration-400 ease-in-out cursor-pointer"
                    disabled={isLoading}
                    >{isLoading ? "Please wait...": "Subscribe"}</button>
                </form>
            </motion.div>

            

        </motion.section>

        <motion.div
             initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.6}}
        viewport={{once:true, amount:0.2}}
            className="border-t-1 border-gray-800 flex flex-row justify-center items-center p-[20px] text-center bg-[#1A1A1A] py-[20px] md:block">
                <p className="text-gray-400 text-xs">&copy; copyright 2025 Designed by Joshua</p>
            </motion.div>

            </>
    )
}

export default Footer;