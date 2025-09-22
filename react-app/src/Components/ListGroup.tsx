function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Los Angeles"];
  //items = [];

  let selectedIndex = -1;

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, idx) => (
          <li
            key={idx}
            onClick={() => (selectedIndex = idx)}
            className={
              selectedIndex === idx
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
