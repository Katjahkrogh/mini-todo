export default function Form() {
  return (
    <>
    <h2>Add tasks to the list</h2>
      <form>
        <label htmlFor="task"></label>
        <input type="text" id="task" placeholder="Add a task" />
        <button>Add</button>
      </form>
    </>
  );
}
