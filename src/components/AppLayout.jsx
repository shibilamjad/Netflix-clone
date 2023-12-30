import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer.jsx/Footer";
import styled from "styled-components";
import { device } from "../ui/device";

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
  width: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

const Main = styled.main`
  height: 100vh;
  @media ${device.laptopL} {
    height: 100vh;
  }
  @media ${device.laptop} {
    height: auto;
  }
  @media ${device.tablet} {
    height: auto;
  }
  @media ${device.mobileL} {
    height: auto;
  }
  @media ${device.mobileS} {
    height: auto;
  }
`;
const Bg = styled.div`
  background-image: url("../../public/bg.png");
  background-repeat: repeat;
  height: 100%;
`;
