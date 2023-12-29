import styled from "styled-components";
import { device } from "../../ui/device";

function Footer() {
  return (
    <>
      <Bg>
        <StyledFooter></StyledFooter>
      </Bg>
    </>
  );
}

export default Footer;

const Bg = styled.footer`
  display: flex;
  align-content: center;
  justify-content: center;
  color: white;
  background: rgba(0, 0, 0, 0.75);
  height: 213px;
  width: 100%;
  color: var(--color-textColor);
  @media ${device.laptopL} {
    height: 280px;
  }
  @media ${device.laptop} {
    height: 250px;
  }
  @media ${device.tablet} {
    height: 230px;
  }
  @media ${device.mobileL} {
    height: 100px;
  }
  @media ${device.mobileS} {
    height: 100px;
  }
`;

const StyledFooter = styled.div`
  /* margin: 0 65px 0 65px; */
  width: 60%;
  height: 100%;
  background-color: red;

  @media ${device.mobileL} {
    width: 80%;
  }
  @media ${device.mobileS} {
    width: 80%;
  }
`;
