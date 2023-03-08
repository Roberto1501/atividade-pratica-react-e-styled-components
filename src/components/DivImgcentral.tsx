import React from 'react';
import styled from 'styled-components';
import Onda from "../assets/Onda.jpg"

type DivCentralProps = {
  direction: 'row' | 'row-reverse' | 'column' | 'column-reverse';
}

const DivCenter = styled.div<{ direction: DivCentralProps['direction'] }>`
  display: flex;
  margin-top: 30px;
  justify-content: space-between;
  flex-direction: ${({ direction }) => direction};
  margin-bottom: 30px;

  img {
    width: 600px;
    height: 500px;
    margin-right: 10px;
  }

  .Texto {
    width: 550px;
    height: 150px;
    margin-left: 10px;
  }
`;

const DivCentral: React.FC<DivCentralProps> = ({ direction }) => {
  return (
    <React.Fragment>
    
        <DivCenter direction={direction}>
          <img src={Onda} alt="Onda" />
          <p className='Texto'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita placeat molestiae dolorem dolore ducimus facilis corporis repellendus recusandae inventore ipsam. Alias, laboriosam! Explicabo totam atque, temporibus necessitatibus doloribus ducimus corporis!
            Aut beatae, praesentium, quasi magnam culpa molestias fuga blanditiis molestiae officia ratione obcaecati, sit nobis. Odio rem architecto consequuntur asperiores, tenetur quod voluptate unde in at eos facilis esse cumque.
            Laudantium sequi officiis provident quae magnam molestiae, ullam impedit a omnis natus, quisquam blanditiis iure. Ab placeat veritatis sed doloribus suscipit eligendi minima ea aperiam, dignissimos inventore odio sint assumenda.
            Delectus eaque nisi dolorum laudantium laborum ducimus reiciendis possimus obcaecati vero. Nemo labore sapiente vel, animi beatae iusto delectus ipsa iste temporibus accusantium repudiandae maxime at! Pariatur sequi voluptas quas.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, dolores! Natus, numquam, incidunt laudantium perspiciatis repudiandae doloribus aliquam nihil, debitis tenetur error deleniti? Nihil quibusdam quaerat quisquam voluptatem magnam repellendus?
            Officia, consequatur veniam culpa eaque voluptas a temporibus corrupti nisi quo animi magnam quasi porro soluta tempore, pariatur eveniet tenetur suscipit quaerat molestiae quibusdam? Eos sit accusantium nam velit inventore?
          </p>
        </DivCenter>
      
    </React.Fragment>
  );
};

export default DivCentral;
