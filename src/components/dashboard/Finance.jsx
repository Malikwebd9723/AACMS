import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
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
text-align:center;
padding:10px;
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

const Finance = () => {
  const context = useContext(Context);
  const { cases, handleAddFee } = context;
  const [show, setShow] = useState(false);
  const [fee, setFee] = useState({ amount: 0 })
  const [id, setId] = useState("")
  const handleClose = () => setShow(false);

  const handleSetShow = (id) => {
    setId(id)
    setShow(true);
  }
  const callAddFee = async () => {
    await handleAddFee({ id, fee: fee.amount });
    setShow(false);
  }
  const settingFee = (e) => {
    setFee({ amount: parseInt(e.target.value) })
  }

  return (
    <>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Fee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ContainerForm>
            <Label htmlFor="text">Add Fee</Label>
            <Input name='amount' onChange={settingFee} type='number' />
          </ContainerForm>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => callAddFee()}>
            Update Fee
          </Button>
        </Modal.Footer>
      </Modal>
      <MainContainer>
        <SubContainer>
          <HamLeft>
            <H4>Manage Finance Record</H4>
          </HamLeft>
        </SubContainer>
        <ActivitiesContainer>
          <Table>
            <Thead>
              <Tr>
                <Th>Client Number</Th>
                <Th>Total Case Fee</Th>
                <Th>Discount</Th>
                <Th>Paid Fee</Th>
                <Th>Paid Fee Date</Th>
                <Th>Dues</Th>
                <Th>Add Fee</Th>
              </Tr>
            </Thead>
            {cases.length !== 0 ?
              cases.map((item) => {
                return (
                  <Tbody>
                    <Tr>
                      <Td>{item.userId}</Td>
                      <Td>{item.totalFee}</Td>
                      <Td>{item.discount}</Td>
                      <Td>{item.paidFee}</Td>
                      <Td>{item.paidFeeDate.split("T")[0]}</Td>
                      <Td>{(item.totalFee - item.paidFee) - item.discount}</Td>

                      <Td>
                        <ButtonActionContainer>
                          <StyledButton onClick={() => handleSetShow(item._id)}>
                            <AddCircleOutlineIcon />
                          </StyledButton >
                        </ButtonActionContainer>
                      </Td>
                    </Tr>
                  </Tbody>
                )
              }) : <h3>No record to display!</h3>
            }
          </Table>
        </ActivitiesContainer>
      </MainContainer>
    </>
  );
};

export default Finance;