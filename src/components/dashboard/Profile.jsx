import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../../context/States";

const MainContainer = styled.section`
  background: #f5f5f5;
  flex: 4;
  padding: 20px;
`;


const Row = styled.section`
  margin-bottom: 20px;
  font-size: 15px;
  overflow: hidden;
`;

const Label = styled.label`
  font-weight: 600;
  color: rgba(1, 41, 112, 0.6);
`
const CardContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 20px 0px;
`
const Card = styled.section`
  background-color: white;
  flex: 1;
  text-align: center;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  box-shadow: 0px 2rem 3rem rgba(132, 139, 200, 0.18);
`;
const H4 = styled.h4`
font-size: 20px;
`
const LeftCard = styled.section`
background-color: white;
flex: 1;
text-align: center;
border-radius: 10px;
padding: 0;
margin: 0px;
box-shadow: 0px 2rem 3rem rgba(132, 139, 200, 0.18);
`
const RightCard = styled.section`
background-color: white;
flex: 1;
text-align: center;
border-radius: 10px;
padding: 0;
margin: 0px;
box-shadow: 0px 2rem 3rem rgba(132, 139, 200, 0.18);
`
const Value = styled.section`
`
const Profile = () => {
  const context = useContext(Context);
  const { user } = context;
  return (
    <MainContainer>
      <CardContainer>
      <LeftCard></LeftCard>
       
        
        <Card>
      <H4>Overview</H4>
      <Row>
        <Label>First Name</Label>
        <Value>{user.firstname}</Value>
      </Row>
      
      <Row>
        <Label>Last Name</Label>
        <Value>{user.lastname}</Value>
      </Row>
      <Row>
        <Label>Email</Label>
        <Value>{user.email}</Value>
      </Row>
    </Card>
        <RightCard>
        </RightCard>
      </CardContainer>
    </MainContainer>
  );
};

export default Profile;
