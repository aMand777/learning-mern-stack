const initialState = {
  name: "amandd"
};

const globalReducer = (state = initialState, action) => {
  if (action.type === "UPDATE_NAME") {
    return {
      ...state,
      name: "seventaurus"
    };
  }
  return state;
};

export default globalReducer;
