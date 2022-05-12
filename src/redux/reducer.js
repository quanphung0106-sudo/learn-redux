import { combineReducers } from "redux";

import filtersReducer from "../components/Filters/FiltersSlice";
import todoListReducer from "../components/TodoList/TodoSlice";

// const rootReducer = (state = {}, action) => {
//   console.log("rootReducer", { state, action });
//   return {
//     filters: filtersReducer(state.filters, action),
//     todoList: todoListReducer(state.todoList, action),
//   };
// };

//Sử dụng function combineReducers từ redux để gom các reducers lại
const rootReducer = combineReducers({
  filters: filtersReducer,
  todoList: todoListReducer,
});

export default rootReducer;
