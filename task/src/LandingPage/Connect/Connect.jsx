import Store from "./Store"
import "./Connect.css"

export default function Connect(){

    return(
        <div className="Connect">
            <div className="connectPara1">Connect your store</div>
            <div className="connectPara2">Printify easily integrates with major e-commerce platforms and marketplaces</div>
            <Store></Store>
        </div>
    )
}