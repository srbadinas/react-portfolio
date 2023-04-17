export default function SocialLink({ to = "#", className = "", icon }) {
    return <li><a href={to} className={"text-slate-100 transition delay-0 duration-300 " + className} target="_blank"><i className={icon}></i></a></li>
}