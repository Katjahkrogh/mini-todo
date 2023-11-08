import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import "./app.css";

function App() {
  const [items, setItems] = useState([
    {
      task: "Gå ud med skraldet",
      completed: false,
      id: 1,
    },
    {
      task: "Træne",
      completed: true,
      id: 2,
    },
  ]);
  function addItem(newItem) {
    setItems((oldState) => oldState.concat(newItem));
  }
  function deleteItem(id) {
    setItems((old) => old.filter((item) => item.id !== id));
  }
  function toggleCompleted(id) {
    setItems((old) => {
      return old.map((item) => {
        if (item.id === id) {
          const copy = { ...item };
          copy.completed = !copy.completed;
          return copy;
        }
        return item;
      });
    });
  }
  return (
    <main>
      <h1>Mini ToDo list</h1>
      <Form addItem={addItem} />
      <List
        deleteItem={deleteItem}
        toggleCompleted={toggleCompleted}
        items={items}
      />
    </main>
  );
}

export default App;
