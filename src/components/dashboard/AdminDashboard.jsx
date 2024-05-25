import React, { useContext } from 'react'
import styled from "styled-components"
import Footer from '../Footer';
import GroupsIcon from '@mui/icons-material/Groups';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Context } from '../../context/States';

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
text-align:center;
padding:10px;
`
const Td = styled.td`
text-align:center;
padding:10px;
`

const AdminDashboard = () => {
    //  get today date
    const fullDate = new Date();
    const today = fullDate.getDate();
    const month = fullDate.getMonth() + 1;
    const year = fullDate.getFullYear();
    const date = `${year}-${month < 10 ? '0' + month : month}-${today}`;
    console.log(date);

    const context = useContext(Context);
    const { cases, clients } = context;
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
                                <CircularProgressbar value={50} styles={{ height: 30 }} text='50%' />
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
                                <CircularProgressbar value={70} styles={{ height: 30 }} text='70%' />
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
                            <H2>40</H2>
                            <ProgressContainer>
                                <CircularProgressbar value={90} styles={{ height: 30 }} text='90%' />
                            </ProgressContainer>
                        </CardContainerInner>
                        <H6>Last 24 Hours</H6>
                    </Card>

                </CardContainer>
                <ActivitiesContainer>
                    <H1>Todays Activities</H1>
                    {cases.length !== 0 ?
                        <Table>
                            <Thead>
                                <Tr>
                                    <Th>Client Name</Th>
                                    <Th>Client Number</Th>
                                    <Th>Court Number</Th>
                                    <Th>Judge Name</Th>
                                    <Th>Hearing Date</Th>
                                    <Th>Payment</Th>
                                    <Th>Status</Th>
                                </Tr>
                            </Thead>
                            {cases.map((item) => {
                                return (
                                    item.hearingDate == date ? <Tbody>
                                        <Tr>
                                            <Td>{clients.map((e) => {
                                                return (
                                                    e._id == item.userId ? e.name : ""
                                                )
                                            })}</Td>
                                            <Td>{item.userId}</Td>
                                            <Td>{item.courtNumber}</Td>
                                            <Td>{item.judge}</Td>
                                            <Td>{item.hearingDate}</Td>
                                            <Td>{item.paidFee}</Td>
                                            <Td>{item.caseStatus}</Td>
                                        </Tr>
                                    </Tbody> : "No Activities!"
                                )
                            })}
                        </Table> : <h3>No Record to display!</h3>}
                </ActivitiesContainer>
            </Main >
            <Footer />
        </>
    )
}

export default AdminDashboard
