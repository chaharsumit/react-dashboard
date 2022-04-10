export default function loaderReducer(state = false, action) {
  switch (action.type) {
    case "TOGGLE_LOADER":
      return !state;
    default:
      return state;
  }
}