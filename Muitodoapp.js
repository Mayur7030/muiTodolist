import {React, useState } from "react";
import Listcom from "../Listcom";
import AddIcon from '@mui/icons-material/Add';
import { Button } from "@mui/material";
import './Muitodoapp.css'


const Muitodoapp = () => {

  const [item, setItem] = useState("");
  const [newitem, setNewItem] = useState([]);
  const itemEvent = (e) => {
    setItem(e.target.value);
  };
  const listOfItems = () => {
    setNewItem((prevValue) => {
      return [...prevValue, item];
    });
    setItem("");
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDoList</h1>
          <input
            type="text"
            value={item}
            placeholder="Add an items"
            onChange={itemEvent}
          />
          <Button className="newBtn" onClick={listOfItems}>
            <AddIcon />
          </Button>

          <br />
          <ol>
            {newitem.map((val, index) => {
              return( <Listcom key={index} text={val} name={val} />);
            })}


          </ol>
          <br />
        </div>
      </div>
    </>
  );
};

export default Muitodoapp;
