export default function ResumeCard({ year, title, location, description }) {
    return (
        <div className="bg-zinc-900 d-flex flex-col mb-3 rounded-md p-5">
            <div className="mb-3">
                <span className="text-slate-100 rounded-md bg-red-500 py-1 px-2 text-sm">{year}</span>
            </div>
            <div className="mb-1">
                <p className="text-slate-100 text-2xl font-bold">{title}</p>
            </div>
            <div className="mb-3">
                <p className="text-blue-400 font-semibold">{location}</p>
            </div>
            <div className="text-gray-500" dangerouslySetInnerHTML={{ __html: description }}>
            </div>
        </div>
    )
}