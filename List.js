import React, { useState } from "react";
import DeleteIcon from "@materail-ui/icons/Delete"


const List =()=>{
    const [line,setLine]= useState(false)


    const cutIt = ()=>{
        setLine(true)
    }
    return(
        <div className="todo_style">
            <span onClick={cutIt}>
                
            </span>
        </div>
    )
}