import actionTypes from '../../constants/actionTypes';

const initialState = {
  appTheme: 'light',
};

export default (state = initialState, action) => {
  if (action.type === actionTypes.appReducer.TOGGLE_THEME) return {...state, appTheme: state.appTheme === 'dark' ? 'light' : 'dark'};
  return state;
};
