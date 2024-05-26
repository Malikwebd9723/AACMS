import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
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
const ActionContainer = styled.section`
`
const ActionBtn = styled.button`
`
const ClientManagement = () => {
  
  const context = useContext(Context);
  const { handleRegisterClient, clients, handleAddRecord, handleUpdateClient,handleDeleteUser } = context;
  
  const [show, setShow] = useState(false);
  const [showRecord, setShowRecord] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleCloseRecord = () => setShowRecord(false);
  const handleShowRecord = (id) => {
    setShowRecord(true);
    setRecord({ ...record, userId: id })
  };

  const handleCloseUpdate = () => setShowUpdate(false);
  const handleShowUpdate = (item) => {
    setShowUpdate(true);
    setUpdateCred({ userId: item._id, name: item.name, email: item.email, address: item.address, phone: item.phone })
  };

  const confirmDeletion = (id) => {

    confirmAlert({
      title: 'Confirm to Delete',
      message: 'User and record realted to user will wash out permenatly!',
      buttons: [
        {
          label: 'Yes',
          onClick: () => handleDeleteUser(id)
        },
        {
          label: 'No',
        }
      ]
    });

  }

  const [cred, setCred] = useState({
    name: "",
    email: "",
    address: "",
    cnic: "",
    phone: "",
  })


  const callRegisterClient = async (e) => {
    e.preventDefault();
    if (cred.name !== "" && cred.email !== "" && cred.address !== "" && cred.cnic !== "" && cred.phone !== "") {
      await handleRegisterClient({ name: cred.name, email: cred.email, address: cred.address, cnic: cred.cnic, phone: cred.phone });
      handleClose();
    } else {
      alert("Fill all the fields correctly!")
    }
  }
  const setCredentials = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value })
  }



  const [record, setRecord] = useState({
    userId: "",
    judge: "",
    courtNumber: "",
    courtAction: "",
    caseTitle: "",
    caseStatus: "",
    caseType: "",
    totalFee: "",
    discount: "",
    paidFee: "",
    hearingDate: "",
  });

  const setRecordDetails = (e) => {
    setRecord({ ...record, [e.target.name]: e.target.value })
  }

  const callAddRecord = async (e) => {
    e.preventDefault();
    if (record.judge !== "" &&
      record.courtNumber !== "" &&
      record.courtAction !== "" &&
      record.caseTitle !== "" &&
      record.caseStatus !== "" &&
      record.caseType !== "" &&
      record.totalFee !== "" &&
      record.discount !== "" &&
      record.paidFee !== "" &&
      record.hearingDate !== "") {

      await handleAddRecord({ userId: record.userId, judge: record.judge, courtNumber: record.courtNumber, courtAction: record.courtAction, caseTitle: record.caseTitle, caseStatus: record.caseStatus, caseType: record.caseType, totalFee: record.totalFee, discount: record.discount, paidFee: record.paidFee, hearingDate: record.hearingDate });

      handleCloseRecord();
    } else {
      alert("Fill all the fields correctly!")
    }
  }



  const [updateCred, setUpdateCred] = useState({
    userId: "",
    name: "",
    email: "",
    address: "",
    phone: "",
  })

  const callUpdateClient = async (e) => {
    e.preventDefault();
    if (updateCred.name !== "" && updateCred.email !== "" && updateCred.address !== "" && updateCred.phone !== "") {
      await handleUpdateClient({ id: updateCred.userId, name: updateCred.name, email: updateCred.email, address: updateCred.address, phone: updateCred.phone });
      handleCloseUpdate();
    } else {
      alert("Fill all the fields correctly!")
    }
  }
  const setUpdateCredentials = (e) => {
    setUpdateCred({ ...updateCred, [e.target.name]: e.target.value })
  }
  return (
    <>
      {/* add new client modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Clients</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ContainerForm>
            <Label htmlFor="name">FullName:</Label>
            <Input onChange={setCredentials} id='name' name='name' type='text' />

            <Label htmlFor="cnic">CNIC</Label>
            <Input onChange={setCredentials} id='cnic' name='cnic' type='text' />

            <Label htmlFor="email">Email</Label>
            <Input onChange={setCredentials} id='email' name='email' type='email' />

            <Label htmlFor="address">Address</Label>
            <Input onChange={setCredentials} id='address' name='address' type='text' />

            <Label htmlFor="phone">Phone#</Label>
            <Input onChange={setCredentials} id='phone' name='phone' type='number' />

            {/* <Label htmlFor="text">Judge Name</Label>
          <Input />
          <Label htmlFor="number">Number of Cases</Label>
          <Input />
          <Label htmlFor="number">Court Number</Label>
          <Input />
          <Label htmlFor="number">Court Actions</Label>
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
          <Input type="date" id="dateInput" />
          <Label htmlFor="text">Total Case Fee</Label>
          <Input />
          <Label htmlFor="text">Discount</Label>
          <Input />
          <Label htmlFor="text">Paid Fee</Label>
          <Input />
          <Label htmlFor="text">Paid Fee Date</Label>
          <Input type="date" id="dateinput" /> */}

          </ContainerForm>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={callRegisterClient}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>


      {/* add new record modal */}
      <Modal show={showRecord} onHide={handleCloseRecord}>
        <Modal.Header closeButton>
          <Modal.Title>Add Client Record</Modal.Title>
        </Modal.Header>

        {/* add new record modal */}
        <Modal.Body>
          <ContainerForm>
            <Label htmlFor="text">Judge Name</Label>
            <Input onChange={setRecordDetails} name='judge' />

            <Label htmlFor="number">Court Number</Label>
            <Input onChange={setRecordDetails} name='courtNumber' />

            <Label htmlFor="number">Court Actions</Label>
            <Input onChange={setRecordDetails} name='courtAction' />

            <Label htmlFor="text">Case Title </Label>
            <Input onChange={setRecordDetails} name='caseTitle' />

            <Label htmlFor="text"> Case Status</Label>
            <Input onChange={setRecordDetails} name='caseStatus' />

            <Label htmlFor="text">Case Type</Label>
            <Input onChange={setRecordDetails} name='caseType' />

            <Label htmlFor="text">Total Case Fee</Label>
            <Input onChange={setRecordDetails} name='totalFee' />

            <Label htmlFor="text">Discount</Label>
            <Input onChange={setRecordDetails} name='discount' />

            <Label htmlFor="text">Paid Fee</Label>
            <Input onChange={setRecordDetails} name='paidFee' />

            <Label htmlFor="text">Hearing Date</Label>
            <Input onChange={setRecordDetails} name='hearingDate' type='date' />

          </ContainerForm>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseRecord}>
            Close
          </Button>
          <Button variant="primary" onClick={callAddRecord}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* update client modal */}
      <Modal show={showUpdate} onHide={handleCloseUpdate}>
        <Modal.Header closeButton>
          <Modal.Title>Update Clients</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ContainerForm>
            <Label htmlFor="name">FullName:</Label>
            <Input value={updateCred.name} onChange={setUpdateCredentials} id='name' name='name' type='text' />

            <Label htmlFor="email">Email</Label>
            <Input value={updateCred.email} onChange={setUpdateCredentials} id='email' name='email' type='email' />

            <Label htmlFor="address">Address</Label>
            <Input value={updateCred.address} onChange={setUpdateCredentials} id='address' name='address' type='text' />

            <Label htmlFor="phone">Phone#</Label>
            <Input value={updateCred.phone} onChange={setUpdateCredentials} id='phone' name='phone' type='number' />
          </ContainerForm>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseUpdate}>
            Close
          </Button>
          <Button variant="primary" onClick={callUpdateClient}>
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
          {clients.length !== 0 ?
            <Table>
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Client#</Th>
                  <Th>Email</Th>
                  <Th>Adresss</Th>
                  <Th>CNIC</Th>
                  <Th>Phone</Th>
                  <Th>Total Cases</Th>
                  <Th>Action</Th>
                </Tr>
              </Thead>
              {clients.map((item) => {
                return (
                  <Tbody key={item._id}>
                    <Tr>
                      <Td>{item.name}</Td>
                      <Td>{item._id}</Td>
                      <Td>{item.email}</Td>
                      <Td>{item.address}</Td>
                      <Td>{item.cnic}</Td>
                      <Td>{item.phone}</Td>
                      <Td>{item.totalCases}</Td>

                      <Td>
                        <ButtonActionContainer>
                          <StyledButton onClick={() => handleShowRecord(item._id)}>
                            <AddCircleOutlineIcon />
                          </StyledButton >
                          <StyledButton onClick={() => handleShowUpdate(item)}>
                            <EditIcon />
                          </StyledButton>
                          <StyledButton onClick={() => { confirmDeletion(item._id) }}>
                            <DeleteIcon />
                          </StyledButton>
                        </ButtonActionContainer>
                      </Td>
                    </Tr>
                  </Tbody>
                )
              })}
            </Table>
            : <h3>No clients to display</h3>}
        </ActivitiesContainer>

      </MainContainer>



    </>
  );
};


export default ClientManagement;