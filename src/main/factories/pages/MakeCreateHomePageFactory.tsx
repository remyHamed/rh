import { useBreakpoint } from "../../../hooks/useBreakpoint";
import { CreateHomeDesktop } from "../../../presentation/pages/HomePage/HomeDesktop";
import { CreateHomeLaptop } from "../../../presentation/pages/HomePage/HomeLaptop";
import { CreateHomeMobile } from "../../../presentation/pages/HomePage/HomeMobile";
import { CreateHomeTablet } from "../../../presentation/pages/HomePage/HomeTablet";


export const makeCreateHomePageFactory: React.FC = () => {
    const bp = useBreakpoint();

    if (bp === "mobile") {

        console.log(" for test : MOBILE ")
        return <CreateHomeMobile />;

    }

    if (bp === "tablet") {

        console.log(" for test : TABLETTE ")
        return <CreateHomeTablet />;

    }


    if (bp === "laptop") {

        console.log(" for test : LAPTOP ")
        return <CreateHomeLaptop />; 
    }


    console.log(" for test : DESKTOP ")
    return <CreateHomeDesktop />; // desktop par défaut
};
