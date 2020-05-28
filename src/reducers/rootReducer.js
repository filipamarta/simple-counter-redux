const initialState = 0;

const rootReducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return (state += 1);
  }
  if (action.type === "DECREMENT") {
    return (state === 0 ? state = 0 : state -= 1);
  }
  return state;
};

export default rootReducer;
