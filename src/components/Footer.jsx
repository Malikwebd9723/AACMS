import React from 'react'
import styled from 'styled-components'

const Main = styled.section`
background-color:grey;
position:fixed;
bottom:0;
padding:10px;
width:100%;
height:1%;
text-align:center;
`
const Text = styled.p`
font-size:10px;
font-weight:600;
`
const Footer = () => {
  return (
    <Main>
      <Text>all rights reserved 2024</Text>
    </Main>
  )
}

export default Footer
