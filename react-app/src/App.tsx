import Alert from "./Components/Alert";
import ListGroup from "./Components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Los Angeles"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <Alert>Hello world</Alert>
      <ListGroup
        items={items}
        heading="Cities"
        onSlectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
