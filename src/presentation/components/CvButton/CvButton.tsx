
import mon_cv from "/src/file/cv_remy_hamed.pdf";

const CvButton = () => {
    return (
            <a
                href={mon_cv}
                download
            >
            <button className="ml-[10vw] mt-[5vw] bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full">
                Télécharger mon cv
            </button>
        </a>

    );
};
export default CvButton