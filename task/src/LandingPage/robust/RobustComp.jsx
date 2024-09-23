function RobustComp({ element }) {
  let { image, heading, text } = element; // Correctly destructuring from `element`

  return (
    <div className="robust-container">
      <div className="robust-image">
        <img src={image} alt={heading} />
      </div>
      <div className="robust-text">
        <h2 className="heading">{heading}</h2>
        <p className="description-text">{text}</p>
      </div>
    </div>
  );
}

export default RobustComp;
