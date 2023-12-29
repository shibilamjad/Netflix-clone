import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer.jsx/Footer";
import styled from "styled-components";

function AppLayout() {
  return (
    <>
      <StyledContainer>
        <Bg>
          <Header />
          <Main>
            <Outlet />
          </Main>
          <Footer />
        </Bg>
      </StyledContainer>
    </>
  );
}

export default AppLayout;

const StyledContainer = styled.div`
  /* height: 1441px; */
  width: 100%;

  display: grid;
  grid-template-rows: auto 1fr auto;
`;

const Main = styled.main`
  height: 100vh;
`;
const Bg = styled.div`
  background-image: url("../../public/bg.png");
  background-repeat: repeat;
  height: 100%;
`;
