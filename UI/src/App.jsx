import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { darkTheme, lightTheme} from "../utils/theme";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Video from "./pages/Video";
import Home from "./pages/Home";
const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

//INFO: We have created a main because it contains more than one Components: Navbar and Video page.
const Main = styled.div`
  flex: 7;
  background-color: ${({theme})=> theme.bg};
`;

const Wrapper = styled.div`
  padding: 22px 22  px;
`;

function App() {

  /**
   * @useStates
   */
  //INFO: How to control dark-light mode!
  const [darkMode, setDarkMode] = useState(true);


  /**
   * @customFunctions
   */
  const darkModeHandler = () => {
    setDarkMode(!darkMode);
  }

  /**
   * @useEffects
   */
  

  return ( //INFO: How to use theme in style components
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}> 
      <Container>
        <Menu onDarkModeHandler = {darkModeHandler} ></Menu>
        <Main>
          <Navbar></Navbar>
          <Wrapper>
            <Routes> {/*INFO: You should implement children routes inside the parent route. */}
              <Route path="/" element = {<Home/>}/>
              <Route path="/video">
                <Route path=":id" element={<Video/>}/>
              </Route>
            </Routes>
          </Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
