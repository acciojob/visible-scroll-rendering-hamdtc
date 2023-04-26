import React, { useState, useRef, useEffect } from "react";
import ListItem from "./ListItem";

function List() {
  const [items, setItems] = useState(
    new Array(1000).fill("Lorem ipsum dolor sit amet.")
  );
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(10);

  const containerRef = useRef(null);
  const itemHeight = useRef(0);

  useEffect(() => {
    itemHeight.current = containerRef.current.offsetHeight / 10;
  }, []);

  const handleScroll = () => {
    const scrollTop = containerRef.current.scrollTop;
    const newStartIndex = Math.floor(scrollTop / itemHeight.current);
    const newEndIndex = newStartIndex + 10;
    setStartIndex(newStartIndex);
    setEndIndex(newEndIndex);
  };

  return (
    <div
      ref={containerRef}
      style={{ height: "500px", overflow: "auto" }}
      onScroll={handleScroll}
    >
      {items.slice(startIndex, endIndex).map((item, index) => (
        <ListItem key={index} index={startIndex + index} item={item} />
      ))}
    </div>
  );
}

export default List;
