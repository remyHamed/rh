const SlidingLetter = ({ letter }: { letter: string }) => {
    return (
        <div className="sliding-letter relative h-[2.5vw] w-[2vw] overflow-hidden">
            <div className="slide">
                <span className="block text-white text-[2vw] font-bold font-mono">{letter}</span>
                <span className="block text-white text-[2vw] font-bold font-mono">{letter}</span>
                <span className="block text-white text-[2vw] font-bold font-mono">{letter}</span>
                <span className="block text-white text-[2vw] font-bold font-mono">{letter}</span>
                <span className="block text-white text-[2vw] font-bold font-mono">{letter}</span>
            </div>
        </div>
    );
};

export default SlidingLetter