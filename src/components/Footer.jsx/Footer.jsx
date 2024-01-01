import styled from "styled-components";
import { device } from "../../ui/device";

function Footer() {
  return (
    <>
      <Container>
        <Bg>
          <StyledFooter>
            <FooterContainer>
              <StyledContent>
                <Wrapper>
                  <p>FAQ</p>
                  <p>Cookie Preferences</p>
                </Wrapper>
                <Wrapper>
                  <p>Help Center </p>
                  <p>Corporate Information </p>
                </Wrapper>
                <Wrapper>
                  <p>Terms of Use </p>
                  <p>Privacy </p>
                </Wrapper>
              </StyledContent>
            </FooterContainer>
            <P>Questions? Call 1-844-505-2993</P>
          </StyledFooter>
        </Bg>
      </Container>
    </>
  );
}

export default Footer;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Bg = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background: var(--color-blacklight);

  color: var(--color-textColor);
`;

const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  flex-direction: column;
  align-items: start;

  height: 100%;

  h1 {
    background-color: red;
  }

  @media ${device.mobileL} {
    width: 80%;
  }
  @media ${device.mobileS} {
    width: 80%;
  }
`;

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledContent = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  padding: 10px;
  align-items: center;
  gap: 60px;
  justify-content: center;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

const P = styled.p`
  padding-top: 15px;
  padding-left: 10px;
`;
