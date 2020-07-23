import {createGlobalStyle} from 'styled-components';
import {getCurrentTheme} from './store/';

const GlobalStyleCSS = {
  dark: {
    'background-color': '#111',
    color: '#eee',
  },
  light: {
    'background-color': '#fff',
    color: '#111',
  },
};

export const GlobalStyle = createGlobalStyle`
body {
  background-color: ${() => GlobalStyleCSS[getCurrentTheme()]['background-color']};
  color: ${() => GlobalStyleCSS[getCurrentTheme()]['color']};
}
`;
