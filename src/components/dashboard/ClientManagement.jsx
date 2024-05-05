import React from 'react'
import styled from 'styled-components'


const HamNav = styled.section`
  display: flex; 
  text-align: center; 
  flex-direction: row; 
  align-items: center; 
  justify-content: space-between; 
  background-color: #353B48;
  padding: 2vh;
  margin: 0;


  @media (max-width: 800px) {
    flex-direction: column; 
  }
`

const HamLeft = styled.section`
  flex: 1; 
  display: flex;
  align-items: center;
`

const HamRight = styled.section`
  flex: 1; 
  display: flex;
  align-items: center;
  justify-content: flex-end; 
`

const H4 = styled.h4`
  text-align: center;
  padding: 10px;
  margin: 0;
  flex: 2;
`

const Addbtn = styled.button`
  font-weight: 600;
  font-size: 18px;
  color: white;
  background: transparent;
  border: none;
  cursor: pointer;
`

const ClientManagement = () => {
  return (
    <>
      <HamNav>
        <HamLeft>
          <H4>Manage Your Clients</H4>
        </HamLeft>
        <HamRight>
          <Addbtn>Adds Clients</Addbtn>
        </HamRight>
      </HamNav>
    
    </>
  );
};

export default ClientManagement;