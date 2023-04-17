
export default function PortfolioGalleryImage({ id, projectName, projectTechnologies, fileName, onHandleToggleModal }) {
    return (<div className={"relative m-3 rounded shadow-md overflow-hidden cursor-pointer group"} onClick={(e) => onHandleToggleModal(id)}>
        <img src={"/assets/images/" + fileName} className="rounded m-w-full transition delay-0 duration-300 group-hover:scale-105 group-hover:blur-[2px]" alt="Not found."/>
        <div className="flex flex-col justify-center items-center w-full h-full p-3 text-center absolute top-0 left-0 transition delay-0 duration-300 rounded bg-black/60 opacity-0 hover:opacity-100">
            <span className="text-slate-100 text-lg">{projectName}</span>
            <p className="text-slate-300 text-base">{projectTechnologies}</p>
        </div>
    </div>)
}