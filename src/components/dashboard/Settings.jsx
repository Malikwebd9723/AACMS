import React from 'react'
import styled from "styled-components"

import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import profilebg from "../../assets/zain.jpg"

const Main = styled.section`
background:#F5F5F5;
flex:4;
padding:20px
`
const CardContainer = styled.section`

display:flex;
align-items:center;
justify-content:space-around;
margin:20px 0px;
`
const Card = styled.section`
background-color:white;
flex:1;
border-radius:10px;
padding:10px;
margin:5px;
box-shadow: 0px 2rem 3rem rgba(132, 139, 200, 0.18);
`
const CardContainerInner = styled.section`
display:flex;
justify-content:center;
align-items:center;
`
const CardIcon = styled.section`

`
const img = styled.section`
width:30px;
height:30px;
display:flex;
align-items:center;
justify-content:center;
border-radius:50px;
`
const H2 = styled.h2`
font-weight:600;
text-align:center;
`
const H6 = styled.h6`
font-weight:400;
font-size:15px;
`




const Settings = () => {
    return (
        <>
        <Main>
            <CardContainer>
             

                <Card>
                    <CardIcon>
                    <img src={profilebg} alt="" style={{height:'100%', width:"100%",borderRadius:"20px"}} />
                    </CardIcon>
                        <H2>SYED ZAIN UL ABIDIN SHAH</H2>
                    <CardContainerInner>
                        <H6>DESIGNER</H6>
                        
                    </CardContainerInner>
                  
                </Card>

                <Card>
                    <CardIcon>
                        <StackedLineChartIcon />
                    </CardIcon>
                        <H2>Total Cases</H2>
                    <CardContainerInner>
                        <H6>70</H6>
                    </CardContainerInner>
                
                </Card>


            </CardContainer>
           
        </Main>
       
        </>
    )
}

export default Settings
