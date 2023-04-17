import SectionHeader from "../components/SectionHeader";
import Button from "../components/Button";
import ResumeCard from "../components/ResumeCard";
import SkillCard from "../components/SkillCard";

export default function Resume({ experience, education, skills }) {
    return (
        <section className="bg-dark-2 min-h-screen py-20 lg:px-14 xl:px-44">
            <div className="mx-auto">
                <SectionHeader header="Contact" text="Get in Touch" />
                <div className="flex flex-col justify-between px-6 sm:px-14 lg:px-0">
                    
                </div>
            </div>
        </section>
    )
}