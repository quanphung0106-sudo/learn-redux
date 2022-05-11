const initState = {
  filters: {
    search: "",
    status: "All",
    priority: [],
  },
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

const rootReducer = (state = initState, action) => {
  console.log("rootReducer", { state, action });
  switch (action.type) {
    case "todoList/addTodo":
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };

    case "filters/searchFilterChange":
      return {
        ...state,
        filters: {
          ...state.filters,
          search: action.payload,
        },
      };
    default:
      return state;
  }
};

export default rootReducer;
