import styled, { createGlobalStyle } from 'styled-components';
import { getCurrentTheme } from '../../store';
import classes from './Chat.module.scss';

const GlobalStyleCss = {
  dark: {
    'chat-single-msg-bg-color': '#8484844a',
    'input-bg-color': '#8484844a',
    'input-text-color': 'white',
  },
  light: {
    'chat-single-msg-bg-color': '#f1f0f0',
    'input-bg-color': 'rgba(0, 0, 0, 0.05)',
    'input-text-color': 'black',
  },
};

export const GlobalStyle = createGlobalStyle`
  .${classes.Chat} {
    .rce-mbox {
      background-color : ${props => GlobalStyleCss[props.theme.mode]['chat-single-msg-bg-color']};
    }
  
    .rce-mbox-right-notch, .rce-mbox-left-notch {
      fill: ${props => GlobalStyleCss[props.theme.mode]['chat-single-msg-bg-color']};
    }
  
    .${classes.Bottom} input {
      background-color: ${props => GlobalStyleCss[props.theme.mode]['input-bg-color']};
      color: ${props => GlobalStyleCss[props.theme.mode]['input-text-color']};
    }
  }
`;

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
  .${classes.Top} {
    border-color: ${() => RootCss[getCurrentTheme()]['border-color']};
  }
`;
