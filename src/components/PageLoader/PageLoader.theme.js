import { createGlobalStyle } from 'styled-components';
import colors from '../../constants/colors';
import classes from './PageLoader.module.scss';

const GlobalStyleCss = {
  dark: {
    'loader-path': '#fff',
  },
  light: {
    'loader-path': '#2f3545',
  },
};

export const GlobalStyle = createGlobalStyle`
  .${classes.Loader} {
    --dot: ${colors.primaryGreenishColor};
    --path: ${props => GlobalStyleCss[props.theme.mode]['loader-path']};;
  }
`;
