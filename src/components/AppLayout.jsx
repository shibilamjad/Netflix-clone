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
  background-color: #d30000;
  width: 100%;

  display: grid;
  background-image: url("/../../public/bg.png");
  background-repeat: repeat;
  height: 100%;
  grid-template-rows: auto 1fr auto;
`;

const Main = styled.main`
  height: 100vh;
  @media ${device.laptopL} {
    height: 100vh;
  }
  @media ${device.laptop} {
    height: 100vh;
  }
  @media ${device.tablet} {
    height: 100vh;
  }
  @media ${device.mobileL} {
    height: 100vh;
  }
  @media ${device.mobileS} {
    height: 100vh;
  }
`;
const Bg = styled.div`
  background-color: var(--color-bg);
`;
