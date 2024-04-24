import React from 'react'
import styled from "styled-components";
import logo from "../assets/logo.jpg"

const Main = styled.section`
min-height:100vh;
display:flex;
flex-direction:column;
background-image: url(${`https://wallpapercave.com/wp/wp2750261.jpg`});
background-position: contain;
background-repeat: no-repeat;
background-size:cover;
`

const Navbar = styled.section`  
background: linear-gradient(rgba(39,39,39, 0.6), transparent);
felx:1;
display:flex;
padding:10px
filter;blur(5px);
`
const NavLeft = styled.section`
flex:1;
` 
const Logo = styled.section`
height:100%;
width:55%;
`
const LogoImg = styled.section`
height:100%;
background-image: url(${logo});
background-position: center;
background-repeat: no-repeat;
background-size:cover;
`
const NavRight = styled.section`
flex:2;
display:flex;
justify-content:flex-end;
`
const BtnContainer = styled.section`
`
const LoginBtn = styled.button`
  padding:15px 50px;
  margin:10px;
  border-radius:30px;
  background-color:white;
  border:none;
  color:black;
`
const RegisterBtn = styled.button`
  padding:15px 50px;
  margin:10px;
  border-radius:30px;
  background: rgba(255, 255, 255, 0.4);
  border:none;
  color:black;
`

// login section styling starts here

const  LoginContainer = styled.section`
flex:3;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding:10px 50px;
`
const H1 = styled.h1`
padding: 10px 0 30px 0;
font-size:30px;
color:white;
`
const H6 = styled.h6`
padding:10px 0;
font-weight:600;
font-size:15px;
color:white;

`
const Form = styled.form`
display:flex;
flex-direction:column;
width:40%;
`
const Input = styled.input`
font-weight:800;
color:white;
margin:12px;
padding:12px;
border:1px solid black;
border-radius:30px;
background: linear-gradient(rgba(39,39,39, 0.6), transparent);
`
const SubmitBtn = styled.button`
font-weight:600;
font-size:18px;
margin:10px;
padding:13px;
border:1px solid black;
border-radius:30px;
`
const Anchor = styled.a`
`
const Login = () => {
  return (
    <Main>
      {/* navbar section */}
      <Navbar>
        <NavLeft>
          <Logo>
            <LogoImg/>
          </Logo>
        </NavLeft>
        <NavRight>
          <BtnContainer>
            <LoginBtn>Sign In</LoginBtn>
            <RegisterBtn>Sign Up</RegisterBtn>
          </BtnContainer>
        </NavRight>
      </Navbar>


    {/* log in form start */}
    <LoginContainer>
      <H6>Don`t have an account? <Anchor>Sign Up</Anchor> </H6>
      <H1>Login</H1>
      <Form onSubmit={"/"}>
        <Input type='text' placeholder='Username or Email'/>
        <Input type='password' placeholder='Password'/>
        <SubmitBtn>Login</SubmitBtn>
      </Form>
      <H6>Forgot password?</H6>
    </LoginContainer>

    </Main>
  )
}

export default Login
