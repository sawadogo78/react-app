function ListGroup() {
  let items = [
    "New York",
    "San Francisco",
    "Ouagadougou",
    "Tokyo",
    "Nouna",
    "Casablanca",
  ];
  //   items = [];

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found.</p>}{" "}
      {/* of is one way of if statement too. or {items.length==0? <p>No item found</p>:null} */}
      <ul className="list-group">
        {items.map((item) => {
          return (
            <li className="list-group-item" key={item}>
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ListGroup;
