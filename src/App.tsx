import React, {useState} from 'react';
import Nav from './components/Navbar';
import './index.css';
import Div from './components/DivIcons';
import Texto from './components/DivConteudoIcon';
import DivCentral from './components/DivImgcentral';
import Footer from './components/Footer';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from "./styles/globalStyles";
import { darkTheme , lightTheme } from './styles/theme';
import Button from '@mui/material/Button';
import Botao from './components/Switch';

const App: React.FC = () => {

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Button onClick={() => setIsDarkTheme(!isDarkTheme)}>
        <Botao />
      </Button>
      <Nav texto='Minha primeira pagina React' />
      <Div />
      <Texto />
      <DivCentral direction="row-reverse" />
      <DivCentral direction="row" />
      <DivCentral direction="row-reverse" />
      <Nav texto="Contato" />    
      <Footer />
    </ThemeProvider>
  ); 
};

export default App;
