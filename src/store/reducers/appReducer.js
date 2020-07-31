import actionTypes from '../../constants/actionTypes';

const initialState = {
  appTheme: 'light', // light | dark
  isPageLoading: false,
};

export default (state = initialState, action) => {
  if (action.type === actionTypes.appReducer.TOGGLE_THEME) return { ...state, appTheme: state.appTheme === 'dark' ? 'light' : 'dark' };
  if (action.type === actionTypes.appReducer.START_PAGE_REQ_FETCH) return { ...state, isPageLoading: true };
  if (action.type === actionTypes.appReducer.STOP_PAGE_REQ_FETCH) return { ...state, isPageLoading: false };
  return state;
};
