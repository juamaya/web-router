import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../componentes/Navbar";
import Footer from "../componentes/Footer";

const LayoutPublic = () => {

    const navigation = useNavigation();
    return (
        <div>
            <Navbar />
            <main className="container">
            {navigation.state === "loading" && (
                    <div className="alert alert-info my-5">Loading...</div>
                )}

                <Outlet />
            </main>
            <Footer/>
        </div>
    );
};
export default LayoutPublic;