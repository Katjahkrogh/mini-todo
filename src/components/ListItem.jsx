import styles from "./ListItem.module.css";

function ListItem({ completed, id, task, deleteItem, toggleCompleted }) {
  return (
    <li className="listitem">
      <p className={completed ? styles.completed : ""}>{task}</p>
      <div id="buttons">
        <button onClick={() => toggleCompleted(id)}>
          {completed ? "Undo" : "Complete"}
        </button>
        <button onClick={() => deleteItem(id)}>Delete</button>
      </div>
    </li>
  );
}

export default ListItem;
