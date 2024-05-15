import React from 'react';
import styled from 'styled-components';
import profilebg from "../../assets/zain.jpg"
const MainContainer = styled.section`
background:#F5F5F5;
flex:4;
padding:20px;
`
const Form = styled.form`
  margin-bottom: 20px;
`

const Row = styled.div`
  margin-bottom: 20px;
  font-size: 15px;
  overflow:hidden;
`

const Label = styled.label`
  font-weight: 600;
  color: rgba(1, 41, 112, 0.6);
`

const Input = styled.input`
  width: 100%;
  max-width: 100%;
  padding: 0.375rem 0.75rem;
  margin-bottom: 0.5rem;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
`

const Textarea = styled.textarea`
  width: 100%;
  max-width: 100%;
  padding: 0.375rem 0.75rem;
  margin-bottom: 0.5rem;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
`
const ButtonWrapper = styled.section`
  margin-left: 15px;
`
const ButtonSubmit = styled.button`
  display: inline-block;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  cursor: pointer;
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:hover {
    background-color: #0069d9;
    border-color: #0062cc;
  }
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
text-align:center;
border-radius:10px;
padding:10px;
margin:5px;
box-shadow: 0px 2rem 3rem rgba(132, 139, 200, 0.18);
`


const Settings = () => {
  return (
   <MainContainer>
    <CardContainer>
    <Card>
            <Row>
            <img src={profilebg} alt="Profile" style={{height:'300px', width:"300px", borderRadius:"150px"}} />
        </Row>
            <h2>Syed Zain ul Abidin</h2>
            <h3>Web Designer</h3>
        
        </Card>
        <Card>
        <Form>
  
   <Row>
     <Label htmlFor="fullName">Full Name</Label>
     <Input type="text" id="fullName" defaultValue="Kevin Anderson" />
   </Row>

   <Row>
     <Label htmlFor="about">About</Label>
     <Textarea id="about" defaultValue="Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus. Tempora libero non est unde veniam est qui dolor. Ut sunt iure rerum quae quisquam autem eveniet perspiciatis odit. Fuga sequi sed ea saepe at unde." />
   </Row>

   <Row>
     <Label htmlFor="Country">Country</Label>
     <Input type="text" id="Country" defaultValue="USA" />
   </Row>

   <Row>
     <Label htmlFor="Address">Address</Label>
     <Input type="text" id="Address" defaultValue="A108 Adam Street, New York, NY 535022" />
   </Row>

   <Row>
     <Label htmlFor="Phone">Phone</Label>
     <Input type="text" id="Phone" defaultValue="(436) 486-3538 x29071" />
   </Row>

   <Row>
     <Label htmlFor="Email">Email</Label>
     <Input type="email" id="Email" defaultValue="k.anderson@example.com" />
   </Row>

   <ButtonWrapper>
     <ButtonSubmit type="submit">Save Changes</ButtonSubmit>
   </ButtonWrapper>
 </Form>
 </Card>
      
    </CardContainer>
    </MainContainer>
    
    
  );
};



export default Settings;
