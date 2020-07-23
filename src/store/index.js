import configureStore from './configureStore';

const store = configureStore();

export const getCurrentTheme = () => store.getState().appReducer.appTheme;

export default store;
