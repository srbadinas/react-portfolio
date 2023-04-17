export default function ServiceCard({ service }) {
    return <div className="flex">
        <div className="bg-dark-1 flex justify-center items-center rounded-md shadow-lg w-[70px] h-[70px] mr-6 text-blue-400 text-3xl">
            <i className={service.icon}></i>
        </div>
        <div className="w-[calc(100%-94px)]">
            <h4 className="text-xl font-semibold text-slate-100 mb-2">{service.name}</h4>
            <p className="text-gray-500 font-semibold">{service.description}</p>
        </div>
    </div>
}