import ListItem from "./ListItem";

function List({ items, deleteItem, toggleCompleted }) {
  return (
    <div>
      <h3>Tasks</h3>
      <ul>
        {items
          .filter((i) => i.completed === false)
          .map((item) => (
            <ListItem
              deleteItem={deleteItem}
              toggleCompleted={toggleCompleted}
              key={item.id}
              {...item}
            />
          ))}
      </ul>
      <h3>Completed tasks</h3>
      <ul>
        {items.filter((i) => i.completed === true).map((item) => (
          <ListItem
            deleteItem={deleteItem}
            toggleCompleted={toggleCompleted}
            key={item.id}
            {...item}
          />
        ))}
      </ul>
    </div>
  );
}

export default List;
