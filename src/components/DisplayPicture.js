import { Link } from 'react-router-dom';

export default function DisplayPicture() {
    return (
        <div className="justify-center align-middle mb-3 hidden lg:flex">
            <Link to="/">
                <div className="rounded-full w-[180px] h-[180px] bg-cover bg-no-repeat bg-center border-8 border-zinc-700" style={{backgroundImage: `url(./assets/images/dp.jpg)`}}></div>
            </Link>
        </div>
    );
}