import React, { useState } from "react";
import "./component.css";

export default function Header(props) {
  

  return (
    <a>
      <div className="header">
        {" "}
        Header {props.count}{" "}
        
      </div>
    </a>
  );
}
