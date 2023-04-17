export default function NavbarToggle({ showMenu, onHandleClick }) {
    return <button type="button" className="text-xl p-1 block lg:hidden" onClick={(e) => onHandleClick(e)}><i className={(showMenu ? 'rotate-90 ' : 'rotate-0 ') + "transition delay-0 duration-500 fas fa-bars text-slate-100"}></i></button>
}