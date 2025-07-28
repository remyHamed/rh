
import mon_cv from "/src/file/cv_remy_hamed.pdf";

const CvButton = () => {
    return (
            <a
                href={mon_cv}
                download
            >
            <button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full>
                Télécharger mon cv
            </button>
        </a>

    );
};
export default CvButton