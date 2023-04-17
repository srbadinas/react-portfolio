import SectionHeader from "../components/SectionHeader";
import ServiceCard from "../components/ServiceCard";

export default function Services({ services }) {
    return (
        <section className="bg-dark-2 min-h-screen py-20 lg:px-14 xl:px-44">
            <div className="mx-auto">
                <SectionHeader header="Services" text="What I Do?" />
                <div className="flex flex-wrap justify-between px-6 sm:px-14 lg:flex-row lg:px-0">
                    {
                        services && services.map((item) => {
                            return <div key={item.id} className="w-[100%] md:w-[45%] mb-16">
                                <ServiceCard service={item} />
                            </div>
                        })
                    }
                </div>
            </div>
        </section>
    )
}