const initState = {
  todoList: [
    {
      id: 1,
      name: "Lear",
      completed: false,
      priority: "medium",
    },
    {
      id: 2,
      name: "Hi",
      completed: false,
      priority: "hight",
    },
    {
      id: 3,
      name: "Hello",
      completed: false,
      priority: "low",
    },
  ],
};

const todoListReducer = (state = initState, action) => {
  console.log("todoListReducer", { state, action });
  switch (action.type) {
    case "todoList/addTodo":
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };

    default:
      return state;
  }
};

export default todoListReducer;
