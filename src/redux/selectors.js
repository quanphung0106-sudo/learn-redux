import { createSelector } from "reselect";

export const todoListSelector = (state) => state.todoList;
export const filtersSelector = (state) => state.filters.search;

// export const todoListSelector = (state) => {
//     const todosRemaining = state.todoList.filter(todo => todo.name.includes(searchText));
//     return todosRemaining
// };
// export const filtersSelector = (state) => state.filters.search;

// Sử dụng thư viện reselect để gọn hơn
export const todosRemainingSelector = createSelector(
  todoListSelector,
  filtersSelector,
  (todoList, searchText) => {
    return todoList.filter(todo => todo.name.includes(searchText));
  }
);
