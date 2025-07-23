import SlidingLetter from "../SlidingLetter/SlidingLetter"

function Header() {
    return (
        <header
        className="
            group
            mt-4
            w-[10vw]
            h-[10vw]
            bg-black
            transition-all
            duration-300
            hover:scale-110
            origin-top-left
            flex
            items-center
            justify-center
            gap-[0.2vw]
            overflow-hidden
        "
        >
            <SlidingLetter letter="M" />
            <SlidingLetter letter="E" />
            <SlidingLetter letter="N" />
            <SlidingLetter letter="U" />
        </header>
    );
}


export default Header
