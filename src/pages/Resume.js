import SectionHeader from "../components/SectionHeader";
import ResumeCard from "../components/ResumeCard";
import SkillCard from "../components/SkillCard";

export default function Resume({ experience, education, skills }) {
    return (
        <section className="bg-dark-1 min-h-screen py-20 lg:px-14 xl:px-44">
            <div className="mx-auto">
                <SectionHeader header="Summary" text="Resume" />
                <div className="flex flex-col justify-between px-6 sm:px-14 lg:px-0">
                    <div className="w-full mb-3">
                        <p className="text-2xl font-bold text-slate-100 mb-5">My Experience</p>
                        {
                            [...experience].map((item, i) => {
                                return <ResumeCard key={i} year={item.year} title={item.position} location={item.company} description={item.description} />
                            })
                        }
                    </div>
                    <div className="w-full mb-3">
                        <p className="text-2xl font-bold text-slate-100 mb-5">My Education</p>
                        {
                            [...education].map((item, i) => {
                                return <ResumeCard key={i} year={item.year} title={item.course} location={item.school} />
                            })
                        }
                    </div>
                    <div className="w-full mb-3">
                        <p className="text-2xl font-bold text-slate-100 mb-5">My Skills</p>
                        <div className="flex flex-col lg:flex-row">
                            <div className="flex-1 lg:pr-10">
                                {
                                    [...skills].map((item, i) => {
                                        if (i >= 8) {
                                            return false;
                                        }

                                        return <SkillCard key={i} skill={item.skill} rate={item.rate} />
                                    })
                                }
                            </div>
                            <div className="flex-1">
                                {
                                    [...skills].map((item, i) => {
                                        if (i < 8) {
                                            return false;
                                        }

                                        return <SkillCard key={i} skill={item.skill} rate={item.rate} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}