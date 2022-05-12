import { createSelector } from "reselect";

//Sử dụng selectors để lấy ra dữ liệu từ store

export const todoListSelector = (state) => state.todoList;
export const searchTextSelector = (state) => state.filters.search;
export const filterPrioritiesSelector = (state) => state.filters.priority;
export const filterStatusSelector = (state) => state.filters.status;

// export const todoListSelector = (state) => {
//     const todosRemaining = state.todoList.filter(todo => todo.name.includes(searchText));
//     return todosRemaining
// };
// export const filtersSelector = (state) => state.filters.search;

// Sử dụng thư viện reselect để gọn hơn
export const todosRemainingSelector = createSelector(
  todoListSelector,
  filterStatusSelector,
  searchTextSelector,
  filterPrioritiesSelector,
  (todoList, status, searchText, priorities) => {
    return todoList.filter((todo) => {
      if (status === "All") {
        return priorities.length
          ? todo.name.includes(searchText) && priorities.includes(todo.priority)
          : todo.name.includes(searchText);
      }

      return (
        todo.name.includes(searchText) &&
        (status === "Completed" ? todo.completed : !todo.completed) &&
        (priorities.length ? priorities.includes(todo.priority) : true)
      );
    });
  }
);
