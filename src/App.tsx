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


const App: React.FC = () => {

  const [isDarkTheme, setIsDarkTheme] = useState(false)


  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <button onClick={() => setIsDarkTheme(!isDarkTheme)}>
        Trocar
      </button>
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
