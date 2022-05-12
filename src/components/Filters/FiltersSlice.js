const initState = {
    search: "",
    status: "All",
    priority: [],
};

const filtersReducer = (state = initState, action) => {
  console.log("filtersReducer", { state, action });
  switch (action.type) {
    case "filters/searchFilterChange":
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};

export default filtersReducer;
