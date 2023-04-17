import SectionHeader from "../components/SectionHeader";
import Button from "../components/Button";

export default function About() {
    return (
        <section className="bg-dark-1 min-h-screen py-20 lg:px-14 xl:px-44">
            <div className="mx-auto">
                <SectionHeader header="About Me" text="Know Me More" />
                <div className="flex flex-col justify-between px-6 sm:px-14 lg:flex-row lg:px-0">
                    <div className="w-full mb-10 lg:w-[65%] lg:mb-0">
                        <div className="flex justify-center items-center mb-10 lg:hidden">
                            <div className="rounded-full w-[180px] h-[180px] bg-cover bg-no-repeat bg-center border-8 border-zinc-700 md:w-[250px] md:h-[250px]" style={{ backgroundImage: `url(./assets/images/dp.jpg)` }}></div>
                        </div>
                        <p className="text-2xl mb-3 font-semibold text-slate-100">I'm <span className="text-blue-400">Sebastian Renz Badinas,</span> a Full-Stack Web Developer.</p>
                        <p className="text-gray-500 mb-3">
                            Have over 7 years of professional experience in coding and launching web/software applications. I also worked with many clients as a freelancer on a couple of projects this past year.
                        </p>
                        <p className="text-gray-500 mb-3">
                            I am very passionate when it comes to challenging my programming skills whenever there is a project that has complex features, giving the outcome with the best practice and approach.
                        </p>
                        <p className="text-gray-500">
                            I'm looking for exciting new projects and am glad to help you build your website or a mobile app for your business at an affordable price. With my knowledge and skills, I believe I can meet your needs.
                        </p>
                    </div>
                    <div className="w-full lg:w-[30%]">
                        <ul className="text-slate-100 mb-6">
                            <li className="border-b border-gray-500 mb-3 pb-3">Name: Sebastian Renz Badinas</li>
                            <li className="border-b border-gray-500 mb-3 pb-3">Email: <a href="mailto:srbadinas@gmail.com" className="text-blue-400">srbadinas@gmail.com</a></li>
                            <li className="border-b border-gray-500 mb-3 pb-3">Age: 29</li>
                            <li>From: Manila, Philippines</li>
                        </ul>
                        <a href="./assets/files/Resume 3.1.docx" className="inline-block" download><Button className="w-[200px]" text="Download CV" /></a>
                    </div>
                </div>
            </div>
        </section>
    )
}