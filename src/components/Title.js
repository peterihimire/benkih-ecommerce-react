import React from "react";

function Title(props) {
  return (
    <div className="section-title">
      <h1 className="color-title">{props.title}</h1>
      <div className="title-div" />
    </div>
  );
}

export default Title;
