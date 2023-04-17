export default function SectionHeader({ header, text }) {
    return <div className="relative mb-6 sm:mb-16">
        <div className="text-center text-6xl uppercase font-semibold text-zinc-600 opacity-50 sm:text-8xl xl:text-9xl">{header}</div>
        <p className="absolute top-[50%] left-[50%] text-sm text-white font-bold sm:text-2xl xl:text-3xl" style={textStyles}>
            {text}
            <span className="block border-b-2 border-blue-400 w-[50%] mx-auto mt-0 sm:mt-2"></span>
        </p>
    </div>
}


const textStyles = {
    transform: 'translate(-50%, -35%)'
}