import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  background-color: ${(props) => (props.theme.mode === 'dark' ? '#111' : '#fff')};
  color: ${(props) => (props.theme.mode === 'dark' ? '#eee' : '#111')};
}
`;
