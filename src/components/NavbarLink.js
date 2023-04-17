import { NavLink } from "react-router-dom";

export default function NavbarLink({ to, className = "", text, onHandleClick }) {
    return (
        <li className={className + " pb-2 mb-2 lg:mb-3 lg:border-b-0 lg:pb-0"}>
            <NavLink to={to} className={({ isActive }) => {
                return "block text-lg transition delay-0 duration-300 hover:text-blue-400" + (isActive ? ' text-blue-400' : ' text-slate-100')
            }} onClick={(e) => onHandleClick(e)} end>{text}</NavLink>
        </li>
    )
}