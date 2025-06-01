import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { RiBuilding2Line } from "react-icons/ri";
import { GiAutoRepair } from "react-icons/gi";
import { BsBricks } from "react-icons/bs";
import Excavator from "/assets/images/Excavator.jpg";

function Context() {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="bg-white p-[40px]"
      >
        {/* Row of Cards */}
        <div className="flex flex-col gap-[40px] justify-center items-center md:flex md:flex-row md:my-[60px]">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-[20px] justify-center items-center"
          >
            {/* icon */}
            <RiBuilding2Line className="text-3xl rounded-full" />

            {/* Text Description */}
            <div className="flex flex-col gap-[5px] justify-center items-center">
              <h3 className="font-bold">Building Construction</h3>
              <p className="text-sm text-gray-500 text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex,
                minus amet. Quaerat nihil blanditiis ipsa! Veritatis possimus
                officia reprehenderit, dicta laborum harum adipisci aperiam
                saepe consectetur placeat, dolor ipsam quaerat.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-[20px] justify-center items-center"
          >
            {/* icon */}
            <GiAutoRepair className="text-3xl rounded-full" />

            {/* Text Description */}
            <div className="flex flex-col gap-[5px] justify-center items-center">
              <h3 className="font-bold">Building Repair</h3>
              <p className="text-sm text-gray-500 text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex,
                minus amet. Quaerat nihil blanditiis ipsa! Veritatis possimus
                officia reprehenderit, dicta laborum harum adipisci aperiam
                saepe consectetur placeat, dolor ipsam quaerat.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-[20px] justify-center items-center"
          >
            {/* icon */}
            <BsBricks className="text-3xl rounded-full" />

            {/* Text Description */}
            <div className="flex flex-col gap-[5px] justify-center items-center">
              <h3 className="font-bold">Foundation</h3>
              <p className="text-sm text-gray-500 text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex,
                minus amet. Quaerat nihil blanditiis ipsa! Veritatis possimus
                officia reprehenderit, dicta laborum harum adipisci aperiam
                saepe consectetur placeat, dolor ipsam quaerat.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>


      {/* Additional Row for Desktop */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="bg-white p-[40px] hidden md:block"
      >
        {/* Row of Cards */}
        <div className="flex flex-col gap-[40px] justify-center items-center md:flex md:flex-row md:mt-[5px] md:mb-[100px]">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-[20px] justify-center items-center"
          >
            {/* icon */}
            <RiBuilding2Line className="text-3xl rounded-full" />

            {/* Text Description */}
            <div className="flex flex-col gap-[5px] justify-center items-center">
              <h3 className="font-bold">Building Construction</h3>
              <p className="text-sm text-gray-500 text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex,
                minus amet. Quaerat nihil blanditiis ipsa! Veritatis possimus
                officia reprehenderit, dicta laborum harum adipisci aperiam
                saepe consectetur placeat, dolor ipsam quaerat.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-[20px] justify-center items-center"
          >
            {/* icon */}
            <GiAutoRepair className="text-3xl rounded-full" />

            {/* Text Description */}
            <div className="flex flex-col gap-[5px] justify-center items-center">
              <h3 className="font-bold">Building Repair</h3>
              <p className="text-sm text-gray-500 text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex,
                minus amet. Quaerat nihil blanditiis ipsa! Veritatis possimus
                officia reprehenderit, dicta laborum harum adipisci aperiam
                saepe consectetur placeat, dolor ipsam quaerat.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-[20px] justify-center items-center"
          >
            {/* icon */}
            <BsBricks className="text-3xl rounded-full" />

            {/* Text Description */}
            <div className="flex flex-col gap-[5px] justify-center items-center">
              <h3 className="font-bold">Foundation</h3>
              <p className="text-sm text-gray-500 text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex,
                minus amet. Quaerat nihil blanditiis ipsa! Veritatis possimus
                officia reprehenderit, dicta laborum harum adipisci aperiam
                saepe consectetur placeat, dolor ipsam quaerat.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>


      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="bg-gray-100 p-[50px] flex flex-col gap-[20px] justify-center items-center md:flex md:flex-row md:gap-[60px]"
      >
        <img
          src={Excavator}
          alt="An Image of Excavator"
          className="mb-[20px] md:order-2 md:w-[100%] md:h-[400px]"
        />

        <div className="flex flex-col gap-[20px] justify-center items-center md:order-1 md:gap-[40px]">
          <h1 className="text-center font-bold text-xl">
          No Project Too Big or Small
        </h1>

        <span className="w-[100px] h-[3px] bg-yellow-400"></span>

        <p className="text-sm text-center text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          labore voluptate nostrum, fuga molestias at sunt in harum ipsum
          beatae. Provident, delectus. Quas eligendi explicabo consequuntur
          culpa aut et vel.
        </p>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="bg-[#1A1A1A] py-[70px] px-[50px] flex flex-col gap-[40px] justify-center items-center md:my-[80px]"
      >
        <h1 className="text-white text-lg font-bold text-center">
          GET FREE CONSULTATION
        </h1>

        <Link to="/" className="no-underline">
          <button className="cursor-pointer bg-[#1A1A1A] border-[3px] border-yellow-400 px-[20px] py-[10px] text-yellow-400 hover:text-white transition duration-300 ease-in-out text-xs text-center">
            CONSULTATION FORM
          </button>
        </Link>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="p-[50px] flex flex-col gap-[20px] justify-start items-center"
      >
        <h1 className="text-center font-bold text-xl md:text-2xl">
          Repairs & Installations
        </h1>

        <span className="w-[100px] h-[3px] bg-yellow-400"></span>

        <p className="text-sm text-center text-gray-500 md:w-[900px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          labore voluptate nostrum, fuga molestias at sunt in harum ipsum
          beatae. Provident, delectus. Quas eligendi explicabo consequuntur
          culpa aut et vel.

          <p className="hidden md:block md:my-[10px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio minima repudiandae tenetur accusantium culpa rerum dolore quo, magnam perferendis alias, necessitatibus amet non qui iure dolor, soluta sunt. Ex, animi!
          </p>
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="py-[20px]"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-row w-full md:mb-[70px]"
        >
          <div className="bg-[#1A1A1A] px-[20px] py-[10px] w-[50%] flex flex-row justify-center items-center">
            <Link to="/" className="no-underline">
              <button className="cursor-pointer bg-[#1A1A1A] border-[2px] border-white px-[20px] py-[10px] text-white hover:text-yellow-400 transition duration-300 ease-in-out text-[11px] text-center">
                Get a Quote
              </button>
            </Link>
          </div>
          <div className="bg-yellow-400 px-[20px] py-[10px] w-[50%] flex flex-row justify-center items-center">
            <Link to="/" className="no-underline">
              <button className="cursor-pointer bg-yellow-400 border-[2px] border-white px-[20px] py-[10px] text-white hover:text-sm transition duration-300 ease-in-out text-[11px] text-center">
                Learn More
              </button>
            </Link>
          </div>
        </motion.div>
      </motion.section>
    </>
  );
}

export default Context;
