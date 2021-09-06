import Api from "./api";

export const types = {
  SELECT_CAUSE: "SELECT_CAUSE",
  REQUEST_CONFIRM_DONATION: "REQUEST_CONFIRM_DONATION",
  REQUEST_CONFIRM_DONATION_SUCCESS: "REQUEST_CONFIRM_DONATION_SUCCESS",
  DISABLE_REDIRECT: "DISABLE_REDIRECT",
};

export const useActions = (_, dispatch) => ({
  selectCause: (selected) => dispatch({ type: types.SELECT_CAUSE, selected }),
  confirmCause: async () => {
    dispatch({ type: types.REQUEST_CONFIRM_DONATION });
    try {
      await Api.confirmCause();
      dispatch({ type: types.REQUEST_CONFIRM_DONATION_SUCCESS });
    } catch (error) {
      dispatch({ type: types.REQUEST_CONFIRM_DONATION_FAILURE });
    } finally {
      dispatch({ type: types.DISABLE_REDIRECT });
    }
  },
});
