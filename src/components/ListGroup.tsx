import { useState } from "react";

function ListGroup() {
  let items = [
    "New York",
    "San Francisco",
    "Ouagadougou",
    "Tokyo",
    "Nouna",
    "Casablanca",
  ];

  const [selectedIndex, setSelectedIndex] = useState(-1);
  // An event handler
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found.</p>}{" "}
      {/* of is one way of if statement too. or {items.length==0? <p>No item found</p>:null} */}
      <ul className="list-group">
        {items.map((item, index) => {
          return (
            <li
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={item}
              onClick={() => {
                setSelectedIndex(index); // update the selectedIndex
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ListGroup;
