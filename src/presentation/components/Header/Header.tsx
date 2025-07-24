import { useState } from "react";
import SlidingLetter from "../SlidingLetter/SlidingLetter"

function Header() {

    const [isFullscreen, setIsFullscreen] = useState(false);

    function handleClick() {
        setIsFullscreen(!isFullscreen);
    }


    return (
        <header 
            onClick={handleClick}
            className={`
                mt-4
                bg-black
                transition-all
                duration-500
                origin-top-left
                flex
                items-center
                justify-center
                gap-[0.2vw]
                overflow-hidden
                ${isFullscreen ? "fixed top-0 left-0 w-screen h-screen z-50" : "w-[10vw] h-[10vw]"}
                `}
        >
        <div 
            className="
                absolute 
                mt-[4vw] 
                ml-[1vw] 
                top-0 
                left-0 flex gap-[0.2vw]
            "
        >
            <SlidingLetter letter="M" />
            <SlidingLetter letter="E" />
            <SlidingLetter letter="N" />
            <SlidingLetter letter="U" />
        </div>
            {isFullscreen && (
                <nav className="absolute flex items-center justify-center gap-4 p-2">
                    <a href="/" className="group text-white">
                        Accueil
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
                    </a>
                    <a href="/diplomes" className="group text-white">
                        Diplômes
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
                    </a>
                    <a href="/experience" className="group text-white">
                        Expérience
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
                    </a>
                    <a href="/projets" className="group text-white">
                        Projets
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
                    </a>
                </nav>
            )}
        </header>
    );
}


export default Header
