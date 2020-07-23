import styled from 'styled-components';
import { getCurrentTheme } from '../../../store';

export const Root = styled.div``;

const ChatHistoryCss = {
  dark: {
    'border-bottom': 'rgb(57, 54, 54)',
  },
  light: {
    'border-bottom': 'rgb(245, 245, 245)',
  },
};
export const ChatHistory = styled.div`
  border-bottom: 1px solid ${() => ChatHistoryCss[getCurrentTheme()]['border-bottom']};
`;

const TextAreaCss = {
  dark: {
    'background-color': '#000',
    color: '#fff',
  },
  light: {
    'background-color': 'rgba(0, 0, 0, .05)',
    color: '#000',
  },
};
export const TextArea = styled.textarea`
  background-color: ${props => TextAreaCss[getCurrentTheme()]['background-color']};
  color: ${props => TextAreaCss[getCurrentTheme()]['color']};
`;
