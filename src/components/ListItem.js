import React from "react";

function ListItem({ index, item }) {
  return (
    <div>
      <h2>Item {index}</h2>
      <p>{item}</p>
    </div>
  );
}

export default ListItem;
