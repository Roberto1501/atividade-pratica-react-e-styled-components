import React from 'react';
import styled from 'styled-components';



const Texto: React.FC = () => {

 const Div = styled.div`
 display: flex;
 justify-content: space-around;

 p{
  display: flex;
  justify-content: center;
 
 }
 ` 
  return (
    <React.Fragment>
      <Div>
      <div>
          <h1>Somennte para desktop</h1>
          <p>Vamos aprender, como utilizar um framework.</p>
        </div>

        <div>
          <h1>Criado Com componentes</h1>
          <p>Utilizando o Styled Components</p>
        </div>

        <div>
          <h1>Fácil aproveitamento</h1>
          <p>Estámos no caminho</p>
        </div>
      </Div>
        
      


    </React.Fragment>
  );
};

export default Texto;
