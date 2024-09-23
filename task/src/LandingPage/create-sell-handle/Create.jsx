import CreateEle from "./CreateEle";
import data from "./createData";
import "./create.css";
function Create() {
  return (
    <div className="create-box">
      {data.map((element, index) => (
        <CreateEle key={index} element={element} />
      ))}
    </div>
  );
}

export default Create;
