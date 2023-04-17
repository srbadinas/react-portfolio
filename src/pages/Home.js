import { NavLink } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import Button from '../components/Button';

export default function Home() {

    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <div className="text-2xl font-bold text-slate-100 md:text-3xl">Welcome</div>
            <div className="text-3xl px-3 text-center font-bold text-slate-100 my-4 md:px-0 md:text-left md:text-5xl xl:text-6xl">
                <Typewriter
                    onInit={
                        (typewriter) => {
                            typewriter.typeString(`I'm Sebastian Badinas.`).pauseFor(2000).deleteChars(18).typeString(`a Freelancer.`).pauseFor(2000).deleteChars(11).typeString(`Full-Stack Web Developer.`).pauseFor(2000).start();
                        }
                    }

                    options={{
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 1.5
                    }}
                />
            </div>
            <div className="text-1xl text-slate-100 mb-10 md:text-2xl">based in Manila, Philippines.</div>
            <NavLink to='/about' end><Button text="Hire Me"/></NavLink>
        </div>
    )
}