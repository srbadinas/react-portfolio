export default function SkillCard({ skill, rate = 0 }) {
    return (
        <div className="flex flex-col mb-5">
            <p className="text-sm text-slate-100 font-semibold mb-3">{skill}</p>
            <div className="progress bg-zinc-900 h-[0.5rem] rounded-md">
                <div className="progress-bar rounded-md h-[0.5rem] flex flex-col bg-blue-400" style={{ width: `${rate}%` }}></div>
            </div>
        </div>
    )
}
