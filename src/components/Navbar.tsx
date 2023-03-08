import React from 'react';
import styled from 'styled-components';

type NavProps = {

  texto: "Minha primeira pagina React" | "Contato"
}

const Nav: React.FC<NavProps> = ({ texto}) => {

  const Div = styled.div<{texto: NavProps["texto"]}> `
    background-color: #003d46;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    font-size: 25px;
  `;
  
  return (
    <React.Fragment>
        <Div texto={texto} >
          <p>{texto}</p>
        </Div>
    </React.Fragment>
  );
};

export default Nav;
