import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";


const Home = () => {
    return (
        <div className="mt-14">
            <Helmet>
                <title>
                    Home
                </title>
            </Helmet>
            <Banner></Banner>
        </div>
    );
};

export default Home;