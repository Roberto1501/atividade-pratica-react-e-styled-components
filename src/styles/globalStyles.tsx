import {createGlobalStyle} from "styled-components";

interface ITheme {
    background: string;
    text: string
  }




declare module "styled-components" {
    export interface DefaultTheme extends ITheme {}
  }


export default createGlobalStyle`
body{
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text} ;
}

`

