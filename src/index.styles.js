import { createGlobalStyle } from "styled-components";
import { colors } from "./lib/theme";

export const GlobalStyle = createGlobalStyle`

* {
  padding: 0;
  margin: 0;
  list-style: none;
  /* overflow-y: hidden; */
  text-decoration: none;
  transition: all 200ms ease-in-out;

  &::-webkit-scrollbar-thumb {
        background-color: ${colors.bg.darkMode}; /* color of the scroll thumb */
        border-radius: 5rem; /* roundness of the scroll thumb */
        border: 3px solid transparent; /* creates padding around scroll thumb */
      }
      &::-webkit-scrollbar {
        width: 3px; /* width of the entire scrollbar */
      }

      &::-webkit-scrollbar-track {
        background: transparent;
        border-radius: 5rem;
        /* color of the tracking area */
      }
  
  &::-webkit-scrollbar-track:hover {
    background: ${colors.text.sub};
  }
  &::-webkit-scrollbar-track:active {
    background: transparent;
  }
  &::-webkit-scrollbar-corner {
    background: transparent;
  }
}
body {
margin: 0;
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
  sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
}

code {
font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
  monospace;
}
 
`;
