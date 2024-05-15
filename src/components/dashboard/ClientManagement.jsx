import React, { useState } from 'react'
import styled from 'styled-components'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
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


const confirmDeletion = ()=>{

  confirmAlert({
    title: 'Confirm to Delete',
    message: 'Are you sure to delete ?.',
    buttons: [
      {
        label: 'Yes',
        onClick: () => console.log('Click Yes')
          },
    {
      label: 'No',
      onClick: () => console.log('Click No')
          }
        ]
      });

}

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
          <Label htmlFor="text">Judge Name</Label>
          <Input />
          <Label htmlFor="number">Number of Cases</Label>
          <Input />
          <Label htmlFor="number">Court Number</Label>
          <Input />
          <Label htmlFor="number">Current Case No</Label>
          <Input />
          <Label htmlFor="text">Case Title </Label>
          <Input />
          <Label htmlFor="text"> Case Statuss</Label>
          <Input />
          <Label htmlFor="text">Total Cases</Label>
          <Input />
          <Label htmlFor="text">Case Type</Label>
          <Input />
          <Label htmlFor="text">Date Filed</Label>
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

          <Addbtn onClick={handleShow}><AddCircleOutlineIcon />Add New Client</Addbtn>
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
              <Th>CNIC</Th>
              <Th>Phone</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Uzair</Td>
              <Td>1</Td>
              <Td>Uzair@gmail.com</Td>
              <Td>Abbottabd</Td>
              <Td>123-312312-3213-1</Td>
              <Td>03174323123</Td>

              <Td>
                <ButtonActionContainer>
                  <StyledButton onClick={() => { confirmDeletion() }}>
                    <DeleteIcon />
                  </StyledButton>
                  <StyledButton onClick={()=>{setShow(!show)}}>
                    <EditIcon />
                  </StyledButton>
                </ButtonActionContainer>
              </Td>






            </Tr>
          </Tbody>
          <Tbody>
            <Tr>
              <Td>Ahmed</Td>
              <Td>2</Td>
              <Td>Ahmed@gmail.com</Td>
              <Td>Mansehra</Td>
              <Td>123-3213-433-1</Td>
              <Td>02312313</Td>
              <Td>
                <ButtonActionContainer>
                  <StyledButton>
                    <DeleteIcon />
                  </StyledButton>
                  <StyledButton>
                    <EditIcon />
                  </StyledButton>
                </ButtonActionContainer>
              </Td>
            </Tr>
          </Tbody>
          <Tbody>
            <Tr>
              <Td>Khuram</Td>
              <Td>3</Td>
              <Td>Khuram@gmail.com</Td>
              <Td>swabi</Td>
              <Td>1231-3123-3123-1</Td>
              <Td>03231312312</Td>
              <Td>
                <ButtonActionContainer>
                  <StyledButton>
                    <DeleteIcon />
                  </StyledButton>
                  <StyledButton>
                    <EditIcon />
                  </StyledButton>
                </ButtonActionContainer>
              </Td>
            </Tr>
          </Tbody>
          <Tbody>
            <Tr>
              <Td>Hamza</Td>
              <Td>4</Td>
              <Td>hamza@gmail.com</Td>
              <Td>College Doraha</Td>
              <Td>1312-123-3123-2</Td>
              <Td>0331231432</Td>
              <Td>
                <ButtonActionContainer>
                  <StyledButton>
                    <DeleteIcon />
                  </StyledButton>
                  <StyledButton>
                    <EditIcon />
                  </StyledButton>
                </ButtonActionContainer>
              </Td>
            </Tr>
          </Tbody>
          <Tbody>
            <Tr>
              <Td>Amir</Td>
              <Td>5</Td>
              <Td>Amir@gmail.com</Td>
              <Td>Khaki road</Td>
              <Td>1231-313-123-1</Td>
              <Td>031231231</Td>
              <Td>
                <ButtonActionContainer>
                  <StyledButton>
                    <DeleteIcon />
                  </StyledButton>
                  <StyledButton>
                    <EditIcon />
                  </StyledButton>
                </ButtonActionContainer>
              </Td>
            </Tr>
          </Tbody>
          <Tbody>
            <Tr>
              <Td>Khazir</Td>
              <Td>6</Td>
              <Td>khazir@gmail.com</Td>
              <Td>Haripur</Td>
              <Td>13123-31231-231-1</Td>
              <Td>031231231</Td>
              <Td>
                <ButtonActionContainer>
                  <StyledButton>
                    <DeleteIcon />
                  </StyledButton>
                  <StyledButton>
                    <EditIcon />
                  </StyledButton>
                </ButtonActionContainer>
              </Td>
            </Tr>
          </Tbody>
          <Tbody>
            <Tr>
              <Td>John</Td>
              <Td>7</Td>
              <Td>john@gmail.com</Td>
              <Td>uk</Td>
              <Td>-123312-21131-13</Td>
              <Td>+72313123</Td>
              <Td>
                <ButtonActionContainer>
                  <StyledButton>
                    <DeleteIcon />
                  </StyledButton>
                  <StyledButton>
                    <EditIcon />
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