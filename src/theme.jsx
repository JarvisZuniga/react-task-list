import { extendTheme } from "@chakra-ui/react";

const theme = {
  config: {
    initialColorMode: "dark",
    useSystemColorMode: true,
  },
  colors: {
    primary: {
      50: "#F0F5FF",
      100: "#C6E2FF",      
    },   
  },
  fonts: {
    body: "Roboto, sans-serif",
    heading: "Montserrat, sans-serif",  
    h1: "100",
    h2: "600"    
  },
  styles: {
    global: {
      body: {
        margin: 0,
        fontFamily: "body",
        bg: "primary.900",
        color: "gray.50",
      },      
    },
  },  
};

export default extendTheme(theme);
