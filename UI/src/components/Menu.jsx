import React from "react";
import styled from "styled-components";
import AlbatrosTube from "../img/logo.png";
import {
  Explore,
  Home,
  Subscriptions,
  VideoLibrary,
  History,
  LiveTv,
  LibraryMusic,
  LibraryMusicOutlined,
  SportsBasketballOutlined,
  SportsEsportsOutlined,
  MovieCreationOutlined,
  NewspaperOutlined,
  SettingsOutlined,
  Report,
  ReportOutlined,
  FlagOutlined,
  HelpOutline,
  SettingsBrightnessOutlined,
  AccountCircleOutlined,
} from "@mui/icons-material";

const Container = styled.div`
  flex: 1;
  background-color: ${({theme})=>theme.bg}; //INFO: How to use theme in styled components!
  height: 100vh; //INFO: Makes height full page.
  color:  ${({theme})=>theme.text};;
  font-size: 14px;
  position:sticky; //INFO: 
  top:0;
`;

const Wrapper = styled.div`
  padding: 18px 26px;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px; //INFO: how to create gap between flexbox items!
  cursor: pointer;
  margin-bottom: 25px;
`;

const LogoText = styled.span`
  font-weight: bold;
`;

const LogoImg = styled.img``;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0px;
`;

const MenuItemIcon = styled.span``;

const MenuItemText = styled.span``;

const MenuItemDivider = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid  ${({theme})=>theme.soft};;
`;


const Login = styled.div`

`; 

const LoginText = styled.span`
  
`;

const LoginButton = styled.button`
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

const LoginButtonIcon = styled.span`

`;

const Menu = (props) => {

  const {onDarkModeHandler} = props;

  return (
    <Container>
      <Wrapper>
        <LogoWrapper>
          <LogoImg src={AlbatrosTube}></LogoImg>
          <LogoText>4lbatr0sTube</LogoText>
        </LogoWrapper>
        <MenuItem>
          <MenuItemIcon>
            <Home></Home>
          </MenuItemIcon>
          <MenuItemText>Home</MenuItemText>
        </MenuItem>
        <MenuItem>
          <MenuItemIcon>
            <Explore></Explore>
          </MenuItemIcon>
          <MenuItemText>Explore</MenuItemText>
        </MenuItem>
        <MenuItem>
          <MenuItemIcon>
            <Subscriptions></Subscriptions>
          </MenuItemIcon>
          <MenuItemText>Subscriptions</MenuItemText>
        </MenuItem>
        <MenuItemDivider />
        <MenuItem>
          <MenuItemIcon>
            <VideoLibrary />
          </MenuItemIcon>
          <MenuItemText>Library</MenuItemText>
        </MenuItem>
        <MenuItem>
          <MenuItemIcon>
            <History></History>
          </MenuItemIcon>
          <MenuItemText>History</MenuItemText>
        </MenuItem>
        <MenuItemDivider />
        <Login>
          <LoginText>
            Sign in to like videos, comment, and subscribe.
          </LoginText>
          <LoginButton>
            <LoginButtonIcon>
              <AccountCircleOutlined>
              </AccountCircleOutlined>
            </LoginButtonIcon>
              SIGN IN
          </LoginButton>
        </Login>
        <MenuItem>
          <MenuItemIcon>
            <LibraryMusicOutlined></LibraryMusicOutlined>
          </MenuItemIcon>
          <MenuItemText>Music</MenuItemText>
        </MenuItem>
        <MenuItem>
          <MenuItemIcon>
            <SportsBasketballOutlined></SportsBasketballOutlined>
          </MenuItemIcon>
          <MenuItemText>Sports</MenuItemText>
        </MenuItem>
        <MenuItem>
          <MenuItemIcon>
            <SportsEsportsOutlined></SportsEsportsOutlined>
          </MenuItemIcon>
          <MenuItemText>Gaming</MenuItemText>
        </MenuItem>
        <MenuItem>
          <MenuItemIcon>
            <MovieCreationOutlined></MovieCreationOutlined>
          </MenuItemIcon>
          <MenuItemText>Movies</MenuItemText>
        </MenuItem>
        <MenuItem>
          <MenuItemIcon>
            <NewspaperOutlined></NewspaperOutlined>
          </MenuItemIcon>
          <MenuItemText>News</MenuItemText>
        </MenuItem>
        <MenuItem>
          <MenuItemIcon>
            <LiveTv></LiveTv>
          </MenuItemIcon>
          <MenuItemText>Live</MenuItemText>
        </MenuItem>
        <MenuItemDivider></MenuItemDivider>
        <MenuItem>
          <MenuItemIcon>
            <SettingsOutlined></SettingsOutlined>
          </MenuItemIcon>
          <MenuItemText>Settings</MenuItemText>
        </MenuItem>
        <MenuItem>
          <MenuItemIcon>
            <FlagOutlined></FlagOutlined>
          </MenuItemIcon>
          <MenuItemText>Report</MenuItemText>
        </MenuItem>
        <MenuItem>
          <MenuItemIcon>
            <HelpOutline></HelpOutline>
          </MenuItemIcon>
          <MenuItemText>Live</MenuItemText>
        </MenuItem>
        <MenuItem onClick={onDarkModeHandler}>
          <MenuItemIcon>
            <SettingsBrightnessOutlined></SettingsBrightnessOutlined>
          </MenuItemIcon>
          <MenuItemText>Light Mode</MenuItemText>
        </MenuItem>
      </Wrapper>
    </Container>
  );
};

export default Menu;
