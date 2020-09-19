import React from "react";

export const Body = props => (
  <div>
    <p className="Body text">{props.text}</p>
    <p className="Body text">{props.text2}</p>
    <p className="Body text">{props.myFunc(12, 15)}</p>
  </div>
);

export const Body2 = () => <div>To jest funkcja inna</div>;
