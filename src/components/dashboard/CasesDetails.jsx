import React, { useContext } from 'react'
import styled from 'styled-components'
import { Context } from '../../context/States';
const MainContainer = styled.section`
background:#F5F5F5;
flex:4;
padding:20px;
`
const SubContainer = styled.section`
display: flex;
text-align: center;
background-color: #353B48;
padding: 2vh;
margin: 0;
display:flex;
`
const HamLeft = styled.section`
flex:1;
display:flex;
align-items:center;
`
const H4 = styled.h4`
font-size:17px;
color:white;
font-weight:400;
`
const ActivitiesContainer = styled.section`
margin:20px 0px
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
text-align:center;
`
const Td = styled.td`
text-align:center;
padding:10px;
`
const CasesDetails = () => {

    const context = useContext(Context);
    const { cases } = context;

    return (
        <>
            <MainContainer>
                <SubContainer>
                    <HamLeft>
                        <H4>Manage Your Clients Cases Record</H4>
                    </HamLeft>
                </SubContainer>

                <ActivitiesContainer>
                    <Table>
                        <Thead>
                            <Tr>
                                <Th>Client Number</Th>
                                <Th>Case Title</Th>
                                <Th>Case Type</Th>
                                <Th>Case Status</Th>
                                <Th>Date Filed</Th>
                            </Tr>
                        </Thead>
                        {cases.length !== 0 ?
                            cases.map((item) => {
                                return (<Tbody>
                                    <Tr>
                                        <Td>{item.userId}</Td>
                                        <Td>{item.caseTitle}</Td>
                                        <Td>{item.caseType}</Td>
                                        <Td>{item.caseStatus}</Td>
                                        <Td>{item.createdAt.split("T")[0]}</Td>
                                    </Tr>
                                </Tbody>)
                            })
                            : <h3>No record to display!</h3>}
                    </Table>
                </ActivitiesContainer>
            </MainContainer>
        </>
    );
};

export default CasesDetails;