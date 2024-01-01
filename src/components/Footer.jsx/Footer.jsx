import styled from "styled-components";
import { device } from "../../ui/device";

function Footer() {
  return (
    <>
      <Bg>
        <StyledFooter>
          <FooterContainer>
            <StyledContent>
              <div>
                <p>FAQ</p>
                <p>Cookie Preferences</p>
              </div>
              <div>
                <p>Help Center </p>
                <p>Corporate Information </p>
              </div>
              <div>
                <p>Terms of Use </p>
                <p>Privacy </p>
              </div>
            </StyledContent>
          </FooterContainer>
        </StyledFooter>
      </Bg>
    </>
  );
}

export default Footer;

const Bg = styled.footer`
  display: flex;
  align-content: center;
  justify-content: space-around;
  color: white;
  background: var(--color-blacklight);
  /* height: 213px; */
  width: 100%;
  color: var(--color-textColor);
`;

const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 30px;
  flex-direction: column;
  align-items: center;
  width: 60%;
  height: 100%;

  h1 {
    justify-content: start;
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
  justify-content: space-around;
`;
const StyledContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  p {
    /* padding-right: 230px; */
  }
`;
