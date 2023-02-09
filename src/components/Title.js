import React from "react";

function Title(props) {
  // props est un objet qui va contenir name
  return (
    <div>
      <strong>{props.name}</strong>
    </div>
  );
}

export default Title;
