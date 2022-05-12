const initState = [
  {
    id: 1,
    name: "Lear",
    completed: false,
    priority: "medium",
  },
  {
    id: 2,
    name: "Hi",
    completed: true,
    priority: "hight",
  },
  {
    id: 3,
    name: "Hello",
    completed: true,
    priority: "low",
  },
];

const todoListReducer = (state = initState, action) => {
  // console.log("todoListReducer", { state, action });
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload];

    case "todoList/toggleTodoStatus":
      return state.map(
        (todo) =>
          (todo.id = action.payload
            ? {
                ...todo,
                completed: !todo.completed,
              }
            : todo)
      );

    default:
      return state;
  }
};

export default todoListReducer;
