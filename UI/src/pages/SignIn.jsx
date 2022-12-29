import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 56px); //INFO: Why 56px? because our Navbar is 56px height, so we say center container between navbar and footer.
  color: ${({theme})=> theme.text};
`;


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({theme})=>theme.bgLighter};
  border: 1px solid ${({theme})=>theme.soft};
  padding: 20px 50px;
  gap: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
`;
const SubTitle = styled.h1`
  font-size: 20px;
  font-weight: 300;
`;
const Input = styled.input`
  padding: 10px;
  border: 1px solid ${({theme})=> theme.soft};
  border-radius: 3px;
  background-color: transparent;
  width: 100%;
  color:${({theme})=> theme.textSoft};
`;
const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: 500;
  background-color:${({theme})=> theme.soft};
  color:${({theme})=> theme.textSoft};
`;

const More = styled.div`
  display: flex;
  margin-top: 10px;
  font-size: 12px;
  color:${({theme})=> theme.textSoft};;
`;
const Links = styled.div`
margin-left: 50px;
`;
const Link = styled.span`
  margin-left: 30px;
  cursor: pointer;
`;


const SignIn = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <SubTitle>to continue to 4lbatr0sTube</SubTitle>
        <Input placeholder='username'></Input>
        <Input type="password" placeholder='password'></Input>
        <Button>Sign In</Button>
        <Title>or</Title>
        <Input placeholder='username'></Input>
        <Input type="password" placeholder='password'></Input>
        <Input type="email" placeholder='email'></Input>
        <Button>Sign Up</Button>
      </Wrapper>
      <More>
          English(USA)
          <Links>
            <Link>Help</Link>
            <Link>Privacy</Link>
            <Link>Terms</Link>
          </Links>
        </More>
    </Container>
  )
}

export default SignIn