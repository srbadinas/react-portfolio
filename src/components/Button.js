export default function Button({ type = 'button', className = "", text }) {
    return <button type={type} className={"border-2 border-blue-400 rounded-full text-md text-blue-400 font-semibold shadow-sm p-3 min-w-full transition-all delay-0 duration-300 hover:bg-blue-400 hover:border-blue-400 hover:text-white sm:min-w-[130px] " + className}>{text}</button>
}