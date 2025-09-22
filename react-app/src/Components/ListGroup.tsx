import { Fragment } from "react";

function ListGroup() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Los Angeles"];
  const message = items.length === 0 ? <p>No items found</p> : null;

  return (
    <>
      <h1>List</h1>
      {message}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
