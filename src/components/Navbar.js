import { Link } from "react-router-dom";
import DisplayPicture from "./DisplayPicture";
import NavbarLink from "./NavbarLink";
import NavbarToggle from "./NavbarToggle";
import SocialLink from "./SocialLink";

export default function Navbar({ showMenu, onHandleToggle }) {
    return (
        <nav className="flex flex-row items-center justify-between shadow-md bg-dark h-[66px] px-6 lg:h-screen lg:flex-col lg:py-8 lg:px-0">
            <div className="lg:mt-3">
                <DisplayPicture />
                <div className="text-md text-slate-100 lg:text-center md:text-2xl">
                    <Link to="/">Sebastian Badinas</Link>
                </div>
            </div>
            <div className={(showMenu ? 'opacity-95 h-[338px] ' : 'opacity-0 h-0 ') + "overflow-hidden shadow-md transition-height delay-0 duration-300 bg-black absolute top-[99%] w-full bg-zinc-900 left-0 lg:block lg:bg-transparent lg:opacity-100 lg:pt-0 lg:static lg:h-auto lg:overflow-auto lg:shadow-none"}>
                <ul className="px-6 lg:text-center mt-6 lg:px-0 lg:mt-0">
                    <NavbarLink to="/" className="border-b border-gray-600" text="Home" onHandleClick={onHandleToggle} />
                    <NavbarLink to="/about" className="border-b border-gray-600" text="About Me" onHandleClick={onHandleToggle} />
                    <NavbarLink to="/services" className="border-b border-gray-600" text="What I Do" onHandleClick={onHandleToggle} />
                    <NavbarLink to="/resume" className="border-b border-gray-600" text="Resume" onHandleClick={onHandleToggle} />
                    <NavbarLink to="/works" className="border-b border-gray-600" text="Works" onHandleClick={onHandleToggle} />
                    {/* <NavbarLink to="/testimonial" className="border-b border-gray-600" text="Testimonial" onHandleClick={onHandleToggle} />
                    <NavbarLink to="/contact" text="Contact" onHandleClick={onHandleToggle} /> */}
                </ul>
            </div>
            <div className="text-center flex justify-center justify-self-end items-center lg:w-full lg:px-12">
                <ul className="flex w-[130px] justify-around mr-4 lg:w-full lg:mr-0">
                    <SocialLink to="https://www.facebook.com/naitsabeszner" className="hover:text-blue-600" icon="fab fa-facebook" />
                    <SocialLink to="https://www.discord.com/users/250517943895588864" className="hover:text-indigo-400" icon="fab fa-discord" />
                    <SocialLink to="https://www.linkedin.com/in/sebastian-renz-badinas-1606a5141/" className="hover:text-sky-600" icon="fab fa-linkedin" />
                    <SocialLink to="https://www.github.com/srbadinas/" className="hover:text-gray-700" icon="fab fa-github" />
                </ul>
                <NavbarToggle showMenu={showMenu} onHandleClick={onHandleToggle} />
            </div>
        </nav>
    )
}