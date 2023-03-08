import React from 'react';
import styled from 'styled-components';
import { IoIosApps, IoIosArrowDropdown, IoIosDesktop } from "react-icons/io";



const Div: React.FC = () => {

  
  const DivIcon = styled.div`
 display: flex;
 margin-right: 10px;
 justify-content: space-around;
 font-size: 100px;
 margin-top: 10px;

 
  `;
  return (
    <React.Fragment>
      <DivIcon>
        <IoIosDesktop/>
        <IoIosApps />
        <IoIosArrowDropdown/>
      </DivIcon>
    </React.Fragment>
  );
};

export default Div;
