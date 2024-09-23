import "./Products.css"

export default function Products(){

    return(
        <div className="productContainer">

            <div className="leftProduct">
                <p className="productHeading">Create and sell custom products</p>
                <ul>
                    <li><span>✔</span>100% Free to use</li>
                    <li><span>✔</span>900+ High-Quality Products</li>
                    <li><span>✔</span>Largest global print network</li>
                </ul>

                <div className="buttons">
                    <button className="btn1">Start for free</button>
                    <button className="btn2">How it works?</button>
                </div>

                <p className="para">Trusted by over 8M sellers around the world</p>
            </div>

            <div className="rightProduct">
                <div className="box1">
                    <img className="img1" src="https://printify.com/pfh/assets/animations/images/img_5.png" alt="" />
                    <img className="img2" src="https://printify.com/pfh/assets/animations/images/img_0.png" alt="" />
                </div>
            </div>
            
        </div>
    )
}
