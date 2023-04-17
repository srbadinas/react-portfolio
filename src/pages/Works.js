import PortfolioGallery from "../components/PortfolioGallery";
import SectionHeader from "../components/SectionHeader";

export default function Works({ projects, onHandleToggleModal }) {
    return (
        <section className="bg-dark-2 min-h-screen py-20 lg:px-14 xl:px-24">
            <div className="mx-auto">
                <SectionHeader header="Portfolio" text="Works" />
                <div className="flex flex-col justify-between px-6 sm:px-14 lg:flex-row lg:px-0">
                    <PortfolioGallery projects={projects} onHandleToggleModal={onHandleToggleModal} />
                </div>
            </div>
        </section>
    )
}