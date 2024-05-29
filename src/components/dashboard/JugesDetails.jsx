import React, { useContext, useState } from "react";
import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Context } from "../../context/States";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
const MainContainer = styled.section`
  background: #f5f5f5;
  flex: 4;
  padding: 20px;
`;
const SubContainer = styled.section`
  display: flex;
  text-align: center;
  background-color: #353b48;
  padding: 2vh;
  margin: 0;
  display: flex;
`;
const HamLeft = styled.section`
  flex: 1;
  display: flex;
  align-items: center;
`;
const H4 = styled.h4`
  font-size: 17px;
  color: white;
  font-weight: 400;
`;
const ActivitiesContainer = styled.section`
  margin: 20px 0px;
`;
const Table = styled.table`
  min-width: 100%;
`;
const Thead = styled.thead`
  background: white;
`;
const Tbody = styled.tbody`
  background: white;
`;
const Tr = styled.tr``;
const Th = styled.th`
  padding: 10px;
  text-align: center;
`;
const Td = styled.td`
  text-align: center;
  padding: 10px;
`;

const ButtonActionContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: #4a5263;
`;
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
const JudgesDatails = () => {
  const context = useContext(Context);
  const { cases, handleUpdateRecord,handleDeleteRecord } = context;
  const [showUpdate, setShowUpdate] = useState(false);
  const [updateCred, setUpdateCred] = useState({
    id: "",
    judge: "",
    courtNumber: "",
    courtAction: "",
    caseTitle: "",
    caseStatus: "",
    caseType: "",
    hearingDate: "",
    reminderDate: "",
  })

  const handleCloseUpdate = () => setShowUpdate(false);
  const handleShowUpdate = (item) => {
    setShowUpdate(true);
    setUpdateCred({ id: item._id, judge: item.judge, courtNumber: item.courtNumber, courtAction: item.courtAction, caseTitle: item.caseTitle, caseStatus: item.caseStatus, caseType: item.caseType, hearingDate: item.hearingDate, reminderDate: item.reminderDate })
  };


  const callUpdateRecord = async (e) => {
    e.preventDefault();
    if (
      updateCred.courtNumber !== "" &&
      updateCred.courtAction !== "" &&
      updateCred.caseTitle !== "" &&
      updateCred.caseStatus !== "" &&
      updateCred.caseType !== "" &&
      updateCred.hearingDate !== "" &&
      updateCred.reminderDate !== "") {
      await handleUpdateRecord({
        id: updateCred.id,
        judge: updateCred.judge,
        courtNumber: updateCred.courtNumber,
        courtAction: updateCred.courtAction,
        caseTitle: updateCred.caseTitle,
        caseStatus: updateCred.caseStatus,
        caseType: updateCred.caseType,
        hearingDate: updateCred.hearingDate,
        reminderDate: updateCred.reminderDate
      });
      handleCloseUpdate();
    } else {
      alert("Fill all the fields correctly!")
    }
  }
  const setUpdateCredentials = (e) => {
    setUpdateCred({ ...updateCred, [e.target.name]: e.target.value })
  }

  const confirmDeletion = (id) => {
    confirmAlert({
      title: 'Confirm to Delete',
      message: 'Record will wash out permanently!',
      buttons: [
        {
          label: 'Yes',
          onClick: () => handleDeleteRecord(id)
        },
        {
          label: 'No',
        }
      ]
    });
  }

  return (
    <>
      {/* add new record modal */}
      <Modal show={showUpdate} onHide={handleCloseUpdate}>
        <Modal.Header closeButton>
          <Modal.Title>Add Client Record</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ContainerForm>
            <Label htmlFor="text">Judge Name</Label>
            <Input value={updateCred.judge} onChange={setUpdateCredentials} name='judge' />

            <Label htmlFor="number">Court Number</Label>
            <Input value={updateCred.courtNumber} onChange={setUpdateCredentials} name='courtNumber' />

            <Label htmlFor="number">Court Actions</Label>
            <Input value={updateCred.courtAction} onChange={setUpdateCredentials} name='courtAction' />

            <Label htmlFor="text">Case Title </Label>
            <Input value={updateCred.caseTitle} onChange={setUpdateCredentials} name='caseTitle' />

            <Label htmlFor="text"> Case Status</Label>
            <Input value={updateCred.caseStatus} onChange={setUpdateCredentials} name='caseStatus' />

            <Label htmlFor="text">Case Type</Label>
            <Input value={updateCred.caseType} onChange={setUpdateCredentials} name='caseType' />

            <Label htmlFor="text">Hearing Date</Label>
            <Input value={updateCred.hearingDate} onChange={setUpdateCredentials} name='hearingDate' type='date' />

            <Label htmlFor="text">Reminder Date</Label>
            <Input value={updateCred.reminderDate} onChange={setUpdateCredentials} name='reminderDate' type='date' />

          </ContainerForm>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseUpdate}>
            Close
          </Button>
          <Button variant="primary" onClick={callUpdateRecord}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <MainContainer>
        <SubContainer>
          <HamLeft>
            <H4>Manage Your Client Court Details</H4>
          </HamLeft>
        </SubContainer>

        <ActivitiesContainer>
          {cases.length !== 0 ?
            <Table>
              <Thead>
                <Tr>
                  <Th>Client Number</Th>
                  <Th>Judge Name</Th>
                  <Th>Court Number</Th>
                  <Th>Court Actions</Th>
                  <Th>Case Status</Th>
                  <Th>Action</Th>
                </Tr>
              </Thead>
              {cases.map((item) => {
                return (
                  <Tbody>
                    <Tr>
                      <Td>{item.userId}</Td>
                      <Td>{item.judge}</Td>
                      <Td>{item.courtNumber}</Td>
                      <Td>{item.courtAction}</Td>
                      <Td>{item.caseStatus}</Td>
                      <Td>
                        <ButtonActionContainer>
                          <StyledButton>
                            <DeleteIcon onClick={() => { confirmDeletion(item._id) }}/>
                          </StyledButton>
                          <StyledButton>
                            <EditIcon onClick={() => handleShowUpdate(item)} />
                          </StyledButton>
                        </ButtonActionContainer>
                      </Td>
                    </Tr>
                  </Tbody>
                )
              })}
            </Table> : <h3>No Record to display!</h3>}
        </ActivitiesContainer>
      </MainContainer>
    </>
  );
};

export default JudgesDatails;
