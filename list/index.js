function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "Learn React",
      isCompleted: false
    },
    {
      text: "Meet friends",
      isCompleted: false
    },
    {
      text: "Make dinner reservation",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text: text, isCompleted: false }];
    setTodos(newTodos);
  };

  const removeTodo = index => {
    let temp = [...todos];
    temp.splice(index, 1); // removes the single todo item at the index the item was given
    setTodos(temp);
  };
  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, i) => (
          <div className="todo" key={i} id={i} onClick={removeTodo}>
            {todo.text} (X)
          </div>
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
