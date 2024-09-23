function CreateEle({ element }) {
  console.log(element);
  let { image, heading1, heading2, text } = element; // Correctly destructuring from `element`

  return (
    <div className="create-container">
      <div className="create-image">
        <img src={image} alt={heading1} />
      </div>
      <div className="description-text">
        <h2 className="heading1-text">{heading1}</h2>
        <h2 className="heading2-text">{heading2}</h2>
        <p className="create-text">{text}</p>
      </div>
    </div>
  );
}

export default CreateEle;
