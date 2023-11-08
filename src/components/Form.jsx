function Form(props) {
  function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    props.addItem({
      task: data.get("task"),
      completed: false,
      id: Math.random(),
    });
  }
  return (
    <>
      <h2>Add tasks to your list</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="task"></label>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="Add a task"
          required
        />
        <button>Add</button>
      </form>
    </>
  );
}

export default Form;
