import React from "react";

function Section(props) {
  const styles = {
    backgroundColor: props.on ? "#222222" : "transparent",
  };
  return (
    <div
      style={styles}
      className="circle"
      onClick={() => props.change(props.id)}
    ></div>
  );
}

export default Section;
