import FooterBottom from "./FooterBottom"
import FooterMid from "./FooterMid"
import FooterTop from "./FooterTop"
import "./Footer.css"

export default function Footer(){
    return(
        <div className="Footer">
            <FooterTop/>
            <FooterMid/>
            <FooterBottom/>
        </div>
    )
}