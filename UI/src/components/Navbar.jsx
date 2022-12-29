import { AccountCircleOutlined, SearchOutlined } from '@mui/icons-material';
import { style } from '@mui/system';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position:sticky;
  top:0;
  background-color:${({theme})=>theme.bg};
  height:56px;
 `;

const Wrapper = styled.div`
  display:flex;
  align-items:center;
  flex-direction:row;
  justify-content:flex-end;//INFO: How to move item to the end of the flexbox!
  height:100%;
  padding: 0px 20px;
  margin:0px 30px;
  position:relative; //INFO: We want to use absolute positioning in the Search.

`;


//INFO: How to center search bar: left,right,margin auto.
const Search =  styled.div`
  display:flex;
  align-items:center;
  gap:5px;
  position:absolute;
  left:0px; //INFO: start from 0px
  right:0px; //INFO: Start from 0px
  margin:auto; //TIP: declare left and right as 0, margin auto centers the object.
  width:40%;
  padding:5px;
  border: 1px solid #ccc;
  border-radius:3px;
`;


const Input = styled.input`
  padding:8px;
  width:100%;
  border:none;
  background-color:transparent; //INFO: important, to prevent the contrast
  color: ${({theme})=>theme.text};
`;

const Button = styled.button`
  margin:10px 0px;
  padding: 5px 15px;
  display:flex;
  align-items:center;
  gap:10px;
  background-color:transparent;
  border: 1px solid #3ea6ff;
  color:#3ea6ff;
  border-radius:3px;
  font-weight:500;
  cursor:pointer;
`;

const SearchButtonIcon = styled.span`

`;

const SearchButtonText = styled.text`

`;


const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input>
          </Input>
          <SearchOutlined style={{cursor:"pointer"}}/>
        </Search>
        <Button>
          <SearchButtonIcon>
            <AccountCircleOutlined/>
          </SearchButtonIcon>
          <SearchButtonText>
            SIGN IN
          </SearchButtonText>
        </Button>
      </Wrapper>
    </Container>
  )
}

export default Navbar