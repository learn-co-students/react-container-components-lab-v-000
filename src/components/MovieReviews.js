import React from "react";

export default props => {
  return (
    <div className="review-list">
      <div className="review">
        <h2>Name: {props.display_title}</h2>
      </div>
    </div>
  );
};
