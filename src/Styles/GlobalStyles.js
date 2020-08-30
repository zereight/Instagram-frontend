import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset};
    *{
        box-sizing: border-box;
    }
    body{
        background-color: ${(props) => {
          return props.theme.bgColor;
        }}
    }
    a{
        color: ${(props) => props.theme.blueColor};
        text-decoration: none;
    }
`;
