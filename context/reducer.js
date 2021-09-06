import { types } from "./actions";

const initialState = {
  selected: {},
  confirmed: false,
  isFetching: false,
  shouldRedirect: false,
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SELECT_CAUSE:
      return { ...state, selected: action.selected };
    case types.REQUEST_CONFIRM_DONATION:
      return { ...state, isFetching: true };
    case types.REQUEST_CONFIRM_DONATION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        confirmed: true,
        shouldRedirect: true,
      };
    case types.REQUEST_CONFIRM_DONATION_FAILURE:
      return {
        ...state,
        isFetching: false,
        confirmed: false,
        error: action.error,
      };
    case types.DISABLE_REDIRECT:
      return { ...state, shouldRedirect: false };
    default:
      return state;
  }
};

export { initialState, reducer };
