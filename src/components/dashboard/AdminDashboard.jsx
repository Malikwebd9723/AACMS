import React from 'react'
import styled from "styled-components"
import Footer from '../Footer';
import GroupsIcon from '@mui/icons-material/Groups';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

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
justify-content:space-between;
align-items:center;
`
const CardIcon = styled.section`
background-color:orange;
width:40px;
height:40px;
display:flex;
align-items:center;
justify-content:center;
border-radius:20px;
`

const H2 = styled.h2`
`
const H6 = styled.h6`
`
const ProgressContainer = styled.section`
max-height:50px;
max-width:50px;
`
const ActivitiesContainer = styled.section`
margin:20px 0px
`
const H1 = styled.h1`
font-size:35px;
font-weight:400;
`
const Table = styled.table`

min-width:100%
`
const Thead = styled.thead`
background:white;
`
const Tbody = styled.tbody`
background:white;
`
const Tr = styled.tr`
`
const Th = styled.th`
padding:10px;
`
const Td = styled.td`
text-align:center;
padding:10px;
`

const AdminDashboard = () => {
    return (
        <>
        <Main>
            <CardContainer>

                <Card>
                    <CardIcon>
                        <GroupsIcon />
                    </CardIcon>
                        <H2>Total Clients</H2>
                    <CardContainerInner>
                        <H2>50</H2>
                        <ProgressContainer>
                        <CircularProgressbar value={50} styles={{height:30}} text='50%'/>
                        </ProgressContainer>
                    </CardContainerInner>
                    <H6>Last 24 Hours</H6>
                </Card>

                <Card>
                    <CardIcon>
                        <StackedLineChartIcon />
                    </CardIcon>
                        <H2>Total Cases</H2>
                    <CardContainerInner>
                        <H2>70</H2>
                        <ProgressContainer>
                        <CircularProgressbar value={70} styles={{height:30}} text='70%'/>
                        </ProgressContainer>
                    </CardContainerInner>
                    <H6>Last 24 Hours</H6>
                </Card>

                <Card>
                    <CardIcon>
                        <PriceCheckIcon />
                    </CardIcon>
                        <H2>Fee Received</H2>
                    <CardContainerInner>
                        <H2>90</H2>
                        <ProgressContainer>
                        <CircularProgressbar value={90} styles={{height:30}} text='90%'/>
                        </ProgressContainer>
                    </CardContainerInner>
                    <H6>Last 24 Hours</H6>
                </Card>

            </CardContainer>
            <ActivitiesContainer>
                <H1>Todays Activities</H1>
                <Table>
                    <Thead>
                        <Tr>
                            <Th>Client Name</Th>
                            <Th>Client#</Th>
                            <Th>Court#</Th>
                            <Th>Hearing Date</Th>
                            <Th>Payment</Th>
                            <Th>Status</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>John</Td>
                            <Td>1</Td>
                            <Td>4</Td>
                            <Td>30/10/2024</Td>
                            <Td>Due</Td>
                            <Td>pending</Td>
                        
                        </Tr>
                    </Tbody>
                    <Tbody>
                        <Tr>
                            <Td>John</Td>
                            <Td>1</Td>
                            <Td>4</Td>
                            <Td>30/10/2024</Td>
                            <Td>Due</Td>
                            <Td>pending</Td>
                        </Tr>
                    </Tbody>
                    <Tbody>
                        <Tr>
                            <Td>John</Td>
                            <Td>1</Td>
                            <Td>4</Td>
                            <Td>30/10/2024</Td>
                            <Td>Due</Td>
                            <Td>pending</Td>
                        </Tr>
                    </Tbody>
                    <Tbody>
                        <Tr>
                            <Td>John</Td>
                            <Td>1</Td>
                            <Td>4</Td>
                            <Td>30/10/2024</Td>
                            <Td>Due</Td>
                            <Td>pending</Td>
                        </Tr>
                    </Tbody>
                    <Tbody>
                        <Tr>
                            <Td>John</Td>
                            <Td>1</Td>
                            <Td>4</Td>
                            <Td>30/10/2024</Td>
                            <Td>Due</Td>
                            <Td>pending</Td>
                        </Tr>
                    </Tbody>
                    <Tbody>
                        <Tr>
                            <Td>John</Td>
                            <Td>1</Td>
                            <Td>4</Td>
                            <Td>30/10/2024</Td>
                            <Td>Due</Td>
                            <Td>pending</Td>
                        </Tr>
                    </Tbody>
                    <Tbody>
                        <Tr>
                            <Td>John</Td>
                            <Td>1</Td>
                            <Td>4</Td>
                            <Td>30/10/2024</Td>
                            <Td>Due</Td>
                            <Td>pending</Td>
                        </Tr>
                    </Tbody>

                </Table>
            </ActivitiesContainer>
        </Main>
        <Footer/>
        </>
    )
}

export default AdminDashboard
