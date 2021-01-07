const defaultState = {
  banner: [],
  command: [],
};

export default function dataReducer(state = defaultState, action) {
  switch (action.type) {
    case "BANNER":
      console.log(action.data);
      return { ...state, banner: action.data };
    case "RECOMMAND":
      return { ...state, command: action.data };
    default:
      return state;
  }
}
