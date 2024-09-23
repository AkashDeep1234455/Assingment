import React, { useEffect, useRef } from "react";
import "./riskfree.css";

function Riskfree() {
  // Create a reference to the riskfree-container
  const riskfreeContainerRef = useRef(null);

  useEffect(() => {
    // Set up the IntersectionObserver
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add the 'visible' class when the container is in view
          riskfreeContainerRef.current.classList.add("visible");
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    // Observe the riskfree-container element
    if (riskfreeContainerRef.current) {
      observer.observe(riskfreeContainerRef.current);
    }

    // Cleanup observer when the component unmounts
    return () => {
      if (riskfreeContainerRef.current) {
        observer.unobserve(riskfreeContainerRef.current);
      }
    };
  }, []);

  return (
    <div className="riskfree">
      <div ref={riskfreeContainerRef} className="riskfree-container">
        <div className="riskfree-box">
          <h1>Make Money, Risk-Free</h1>
          <p>You pay for fulfillment only when you make a sale</p>
          <div className="profit">
            <div className="sell">
              You sell a t-shirt <div className="price">$ 30</div>
            </div>
            <div className="buy sell">
              You pay for its production <div className="price">$ 12</div>
            </div>
            <hr />
            <div className="yourprofit sell">
              Your profit <div className="price">$ 18</div>
            </div>
          </div>
          <button className="startselling">Start selling</button>
          <div className="freetouse" style={{ color: "#C4C7C0" }}>
            100% Free to use · 900+ Products · Largest print network
          </div>
        </div>
      </div>
      <div className="riskfreeimage">
        <img src="../../d.jpg" alt="Risk-Free" />
      </div>
    </div>
  );
}

export default Riskfree;
