import CvButton from "../../components/CvButton/CvButton";
import { GreetingItemComponent } from "../../components/GreetingItemComponent/GreetingItemComponent";
import Header from "../../components/Header/Header";

export const CreateHomePage: React.FC = () :React.ReactNode => {
    return(
        <>
            <Header></Header>
            <GreetingItemComponent></GreetingItemComponent>
            <CvButton></CvButton>
        </>
    );
}