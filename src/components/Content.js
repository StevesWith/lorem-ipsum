import React from "react";
import Title from "./Title";
import Description from "./Description";

function Content(props) {
  return (
    <div className="content">
      <Title name={props.name} />
      <Description text={props.text} />
    </div>
  );
}

export default Content;
