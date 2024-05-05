import React from 'react'
import styled from 'styled-components'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
const MainContainer = styled.section`
background:#F5F5F5;
flex:4;
padding:15px;
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
const ButtonContainer = styled.section`
display:flex;
justify-content:space-between;
align-items: center;
text-transform: uppercase;
text-align:center;
padding: 7px 12px 7px 5px;
background:#28A745;
border-radius:3px;
color:white;
`
const Addbtn = styled.section`

font-size:12px;
font-weight:600;
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
`
const Td = styled.td`
text-align:center;
padding:10px;
`
const Action = styled.section`
display:flex;
justify-content:space-between;
align-items: center;

text-align:center;
`
const Delbtn = styled.section`


`
const Editbtn = styled.section`


`
const ClientManagement = () => {
  return (
    <>
      <MainContainer>
        <SubContainer>
          <HamLeft>
          <H4>Manage Law Office Details</H4>
          </HamLeft>
          <ButtonContainer>
          <AddCircleOutlineIcon/>
          <Addbtn>Add New Client</Addbtn>
        </ButtonContainer>
        </SubContainer>
        
        <ActivitiesContainer>
                <Table>
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Client#</Th>
                            <Th>Email</Th>
                            <Th>Adresss</Th>
                            <Th>Phone</Th>
                            <Th>Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>John</Td>
                            <Td>1</Td>
                            <Td>4</Td>
                            <Td>30/10/2024</Td>
                            <Td>Due</Td>
                            
                            <Td>
                            <Delbtn><DeleteIcon /></Delbtn><Editbtn><EditIcon/></Editbtn>
                            </Td>
                            
                        
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
                            <Td></Td>
                        </Tr>
                    </Tbody>

                </Table>
            </ActivitiesContainer>
 
      </MainContainer>
      
       
    
    </>
  );
};

export default ClientManagement;