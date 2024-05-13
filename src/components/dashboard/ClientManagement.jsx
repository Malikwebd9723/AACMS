import React, { useState } from 'react'
import styled from 'styled-components'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-router-dom';


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
const Addbtn = styled.button`
background:transparent;
border:none;
color:white;
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
text-align:center;
`
const Td = styled.td`
text-align:center;
padding:10px;
`

const ButtonActionContainer = styled.section`
  display: flex;
  justify-content:center;
  align-items: center;

`
  const StyledButton = styled.button`
  display: flex;
  align-items: center;
  border: none; 
  background-color: transparent; 
cursor: pointer; 
color:#4A5263;
`
const ContainerForm = styled.form`
display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  
`
const Label = styled.label`
font-weight:500;
padding-bottom:10px;
`
const Input = styled.input`
`
const ClientManagement = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Clients</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ContainerForm>
            <Label htmlFor="name">FullName:</Label>
            <Input />
            <Label htmlFor="number">Client#</Label>
            <Input />
            <Label htmlFor="Email">Email</Label>
            <Input />
            <Label htmlFor="text">Address</Label>
            <Input />
            <Label htmlFor="text">Phone#</Label>
            <Input />
            <Label htmlFor="number">Number of Cases</Label>
            <Input />
            <Label htmlFor="number">Court Number</Label>
            <Input />
            <Label htmlFor="number">Current Case No</Label>
            <Input />
            <Label htmlFor="text">Case Status</Label>
            <Input />
            <Label htmlFor="date">Date Of Hearing</Label>
            <Input />
            <Label htmlFor="date">Reminder Date</Label>
            <Input />
            </ContainerForm>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <MainContainer>
        <SubContainer>
          <HamLeft>
          <H4>Manage Law Office Details</H4>
          </HamLeft>
          <ButtonContainer>
          
          <Addbtn onClick={handleShow}><AddCircleOutlineIcon/>Add New Client</Addbtn>
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
                            <Td>u</Td>
                            <Td>30/10/2024</Td>
                            <Td>Due</Td>
                            
                            <Td>
                            <ButtonActionContainer>
                            <StyledButton>
                            <DeleteIcon />
                            </StyledButton>
                            <StyledButton>
                            <EditIcon/>
                            </StyledButton>
                            </ButtonActionContainer>
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
                            <Td>
                            <ButtonActionContainer>
                            <StyledButton>
                            <DeleteIcon />
                            </StyledButton>
                            <StyledButton>
                            <EditIcon/>
                            </StyledButton>
                            </ButtonActionContainer>
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
                            <Td>
                            <ButtonActionContainer>
                            <StyledButton>
                            <DeleteIcon />
                            </StyledButton>
                            <StyledButton>
                            <EditIcon/>
                            </StyledButton>
                            </ButtonActionContainer>
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
                            <Td>
                            <ButtonActionContainer>
                            <StyledButton>
                            <DeleteIcon />
                            </StyledButton>
                            <StyledButton>
                            <EditIcon/>
                            </StyledButton>
                            </ButtonActionContainer>
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
                            <Td>
                            <ButtonActionContainer>
                            <StyledButton>
                            <DeleteIcon />
                            </StyledButton>
                            <StyledButton>
                            <EditIcon/>
                            </StyledButton>
                            </ButtonActionContainer>
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
                            <Td>
                            <ButtonActionContainer>
                            <StyledButton>
                            <DeleteIcon />
                            </StyledButton>
                            <StyledButton>
                            <EditIcon/>
                            </StyledButton>
                            </ButtonActionContainer>
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
                            <Td>
                            <ButtonActionContainer>
                            <StyledButton>
                            <DeleteIcon />
                            </StyledButton>
                            <StyledButton>
                            <EditIcon/>
                            </StyledButton>
                            </ButtonActionContainer>
                            </Td>
                        </Tr>
                    </Tbody>

                </Table>
            </ActivitiesContainer>
 
      </MainContainer>
      
       
    
    </>
  );
};


export default ClientManagement;