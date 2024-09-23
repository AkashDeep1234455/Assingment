import NavBar from "../NavBar/NavBar";
import Robust from "./robust/Robust";
import Create from "./create-sell-handle/Create";
import Talktosales from "./talktosales/Talktosales";
import Trustedby from "./trustedby/Trustedby";
import Riskfree from "./riskfree/Riskfree";
import OnDemand from "./ondemand/OnDemand";
import Connect from "./Connect/Connect";
import Footer from "./Footer/Footer";
import Products from "./Products/Products";
function LandingPage() {
    return ( 
        <>
        <NavBar/>
        <Products/>
        <Robust/>
        <OnDemand/>
        <Create/>
        <Talktosales/>
        <Connect/>
        <Trustedby/>
        <Riskfree/>
        <Footer/>
        </>
     );
}

export default LandingPage;