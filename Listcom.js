import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

const Listcom = (props) => {

    const name = props.text
    console.log(name)
  const [line, setLine] = useState(false);
  const cutIt = () => {
    setLine(true);
  };
  return (
    <div className="todo_style">
      <span onClick={cutIt}>
        <DeleteIcon className="deleteIcon" />
       </span>
      <li style={{ textDecoration: line ? "line-through" : "none" }}>{name}</li>

    </div>
    
  );
};

export default Listcom;
