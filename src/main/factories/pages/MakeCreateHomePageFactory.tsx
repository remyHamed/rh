import { useBreakpoint } from "../../../hooks/useBreakpoint";
import { CreateHomeDesktop } from "../../../presentation/pages/HomePage/HomeDesktop";
import { CreateHomeLaptop } from "../../../presentation/pages/HomePage/HomeLaptop";
import { CreateHomeMobile } from "../../../presentation/pages/HomePage/HomeMobile";
import { CreateHomeTablet } from "../../../presentation/pages/HomePage/HomeTablet";


export const makeCreateHomePageFactory: React.FC = () => {
    const bp = useBreakpoint();

    if (bp === "mobile") return <CreateHomeMobile />;
    if (bp === "tablet") return <CreateHomeTablet />;
    if (bp === "laptop") return <CreateHomeLaptop />;
    return <CreateHomeDesktop />; // desktop par défaut
};
