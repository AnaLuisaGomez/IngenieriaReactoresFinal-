import React from "react";
import { Link } from "react-router-dom";

function Option(props) {
  
  return (
    <div className="card" style={{width: "18rem;"}}>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">&nbsp;</h6>
        <Link  className="btn btn-primary" to={props.page}>Iniciar</Link>
      </div>
    </div>
  );
} 

export default Option;