import ProjectGallery from "./ProjectGallery";

export default function ProjectContent({ project }) {
    return (
        <>
            <h2 className="text-center text-slate-100 text-3xl font-semibold mb-6">
                {project.name}
            </h2>
            <div className="flex flex-col lg:flex-row">
                <div className="w-[100%] pb-8 lg:pb-0 lg:pr-8 lg:w-[55%]">
                    {
                        project?.images && <ProjectGallery images={project?.images} />
                    }
                </div>
                <div className="w-[100%] lg:w-[45%]">
                    <h2 className="text-slate-100 text-xl mb-3 font-semibold">Project Info:</h2>
                    <p className="text-gray-500 mb-8 font-semibold" dangerouslySetInnerHTML={{ __html: project.description }}></p>
                    <h2 className="text-slate-100 text-xl mb-3 font-semibold">Project Details:</h2>
                    <ul>
                        <li className="text-gray-500 border-b border-gray-500 font-semibold pb-3"><span className="text-slate-100">Client:</span> {project.client} </li>
                        <li className="text-gray-500 border-b border-gray-500 font-semibold py-3"><span className="text-slate-100">Technologies:</span> {project.technologies}</li>
                        <li className="text-gray-500 border-b border-gray-500 font-semibold py-3"><span className="text-slate-100">URL:</span> {(project.isPublicView ? <a href={`https://${project.url}`} className="text-blue-400" target="_blank" rel="noreferrer">{project.url}</a> : `The website can only be accessed inside the client's network.`)}</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

