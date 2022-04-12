import React, { useState } from "react";
import "./component.css";

export default function Footer(props) {
 

  return (
    <a>
      <div className="footer1">
        {" "}
        Footer {" "}
        <button onClick={()=>props.setCount(props.count+1)}>button

        </button>
        
      </div>
    </a>
  );
}