import { useState } from "react"
import { NavLink } from "react-router-dom"
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import DownloadResume from "./DownloadResume";

const sidebarVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'slide',
      stiffness: 250,
      damping: 20,
    },
  },
  closed: {
    x: '100%',
    opacity: 0,
    transition: {
      type: 'slide',
      stiffness: 250,
      damping: 20,
    },
  },
};

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navigation px-4 py-2">
      <section>
        <h1 className="text-3xl font-bold">My Portfolio</h1>
      </section>
      <section className="lg-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/about">About</NavLink>
        <DownloadResume />
      </section>
      <section className="sm-active">
        <button 
        type="button"
        onClick={() => setOpen(true)}
        className="border border-black border-2 p-2 rounded bg-white"
        >
          <GiHamburgerMenu size={25} color="black"/>
        </button>
      </section>
      <motion.aside 
      className="sm-active sm-links"
      variants={sidebarVariants}
      initial="closed"
      animate={open ? 'open' : 'closed'}
      >
        <section className="flex flex-row items-center justify-between border-b-2 border-black">
          <h2 className="text-2xl font-semibold mb-2">Navigation</h2>
          <button 
          type="button" 
          onClick={() => setOpen(false)}
          className="border border-black border-2 p-1 rounded mb-2 text-red-500"
          >
            <IoMdClose size={25} />
          </button>
        </section>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/about">About</NavLink>
        <DownloadResume />
      </motion.aside>
    </nav>
  )
}

export default NavBar