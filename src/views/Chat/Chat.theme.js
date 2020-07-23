import styled from 'styled-components';
import {getCurrentTheme} from '../../store';

const RootCss = {
  dark: {
    'border-color': 'rgb(57, 54, 54)',
  },
  light: {
    'border-color': 'rgb(245, 245, 245)',
  },
};
export const Root = styled.div`
  border-color: ${() => RootCss[getCurrentTheme()]['border-color']};
`;

const HeaderCss = {
  dark: {
    'background-color': '#000',
    color: '#000',
    'border-color': 'rgb(57, 54, 54)',
  },
  light: {
    'background-color': '#fff',
    color: '#fff',
    'border-color': 'rgb(245, 245, 245)',
  },
};

export const Header = styled.div`
  background-color: ${() => HeaderCss[getCurrentTheme()]['background-color']};
  color: ${() => HeaderCss[getCurrentTheme()]['color']};
  border-color: ${() => HeaderCss[getCurrentTheme()]['border-color']};
`;
