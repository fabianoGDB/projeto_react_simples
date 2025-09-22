import Alert from "./Components/Alert";
import Button from "./Components/Button";
import ListGroup from "./Components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Los Angeles"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const handleButton = () => {
    console.log("Color");
  };

  return (
    <div>
      <Alert>Hello world</Alert>
      <Button color="primary" onClick={handleButton}>
        Button
      </Button>
      <ListGroup
        items={items}
        heading="Cities"
        onSlectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
