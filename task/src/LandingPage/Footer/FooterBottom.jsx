import "./FooterBottom.css"

const services = [
    "Intellectual Property Policy",
    "Terms of Services",
    "Privacy Policy",
    "Security"
]

export default function FooterBottom(){
    return(
        <div className="FooterBottom">
            <div className="FooterBottomServices">
                {services.map((service, index) => (
                    
                    <a key={index} href="#">{service}</a>
                ))}
            </div>

            <div className="FooterBottomCopy">
                <p>&copy; Printify, Inc. All rights reserved</p>
            </div>
        </div>
    )
}