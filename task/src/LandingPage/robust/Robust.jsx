import data from "./data";
import "./robust.css";
import RobustComp from "./RobustComp";
function Robust() {
  return (
    <div className="robust-box">
      {data.map((element, index) => (
        <RobustComp key={index} element={element} />
      ))}
    </div>
  );
}

export default Robust;
