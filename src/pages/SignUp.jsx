import styled from "styled-components";
import { device } from "../ui/device";
import { Link } from "react-router-dom";

export function SignUp() {
  return (
    <LoginContainer>
      <StyledLogin>
        <Stylecontent>
          <div>
            <H1>Sign up</H1>
          </div>
          <form>
            <div>
              <Input type="text" placeholder="Username" />
            </div>
            <div>
              <Input type="text" placeholder="Email" />
            </div>
            <div>
              <Input type="text" placeholder="Password" />
            </div>
            <div>
              <Button type="submit">Sign up</Button>
            </div>
          </form>

          <StyledSign>
            <AlignCenter>
              <p>Already have a account?</p>
              &nbsp;
              <NavLink to="/sign-in"> Sign in now.</NavLink>
            </AlignCenter>
          </StyledSign>
        </Stylecontent>
      </StyledLogin>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5%;
  margin-bottom: 5%;
`;

const StyledLogin = styled.div`
  background: rgba(0, 0, 0, 0.75);
  width: 457px;
  height: 547px;
  border-radius: 4px;

  @media ${device.laptopL} {
    width: 457px;
    height: auto;
  }
  @media ${device.laptop} {
    width: 457px;
    height: auto;
  }
  @media ${device.tablet} {
    width: 357px;
    height: auto;
  }
  @media ${device.mobileL} {
    width: 307px;
    height: auto;
  }
  @media ${device.mobileS} {
    width: 227px;
    height: auto;
  }
`;

const Stylecontent = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--color-light);
  padding: 48px 60px 0px 60px;
  font-size: 32px;
  font-weight: 700;

  @media ${device.laptopL} {
    padding: 48px 60px 10px;
  }
  @media ${device.laptop} {
    padding: 48px 60px 10px;
  }
  @media ${device.tablet} {
    padding: 30px 45px 10px;
  }
  @media ${device.mobileL} {
    padding: 25px 40px 4px;
  }
  @media ${device.mobileS} {
    padding: 14px 20px 4px;
  }
`;
const H1 = styled.h1`
  margin-bottom: 29px;
  font-size: 32px;
  @media ${device.laptop} {
    font-size: 28px;
    margin-bottom: 5px;
  }
  @media ${device.laptopL} {
    font-size: 25px;

    margin-bottom: 5px;
  }
  @media ${device.tablet} {
    font-size: 17px;
    margin-bottom: 15px;
  }
  @media ${device.mobileL} {
    font-size: 14px;
    margin-bottom: 5px;
  }
  @media ${device.mobileS} {
    margin-bottom: 5px;
    font-size: 14px;
  }
`;
const Input = styled.input`
  font-size: 16px;
  padding: 10px 15px;
  width: 100%;
  border: transparent;
  color: var(--color-inputFont);
  background-color: var(--color-input);
  border-radius: 4px;
  margin-bottom: 16px;
  &:focus {
    outline: none;
  }
  @media ${device.laptopL} {
    font-size: 16px;
    padding: 10px 15px;
  }
  @media ${device.laptop} {
    font-size: 16px;
    padding: 10px 15px;
  }
  @media ${device.tablet} {
    font-size: 14px;
    padding: 8px 12px;
    margin-bottom: 8px;
  }
  @media ${device.mobileL} {
    font-size: 12px;
    padding: 6px 10px;
    margin-bottom: 4px;
  }
  @media ${device.mobileS} {
    font-size: 12px;
    padding: 6px 10px;
    margin-bottom: 4px;
  }
`;
const Button = styled.button`
  font-size: 16px;
  font-weight: 500;
  padding: 10px 15px;
  margin-top: 20px;
  width: 100%;
  border: transparent;
  color: var(--color-light);
  background-color: var(--color-btnsign);
  border-radius: 4px;
  &:hover {
    background-color: #bf030c;
    transition: background 0.3s;
  }
  @media ${device.laptopL} {
    font-size: 15px;
    padding: 8px 12px;
    margin-bottom: 8px;
  }
  @media ${device.laptop} {
    font-size: 14px;

    padding: 8px 12px;
    margin-bottom: 8px;
  }
  @media ${device.tablet} {
    font-size: 14px;
    padding: 8px 12px;
    margin-bottom: 3px;
  }
  @media ${device.mobileL} {
    font-size: 12px;
    padding: 6px 10px;
    margin-bottom: 3px;
  }
  @media ${device.mobileS} {
    font-size: 12px;
    padding: 6px 10px;
    margin-bottom: 4px;
  }
`;
const P = styled.p`
  display: flex;
  justify-content: end;
  font-size: 13px;
  margin-top: 14px;
  color: var(--color-textColor);
  font-weight: 400;
`;

const StyledSign = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 17px;
  margin-top: 100px;
  p {
    color: var(--color-textColor);
    margin-top: 1rem;
  }
  @media ${device.laptopL} {
    font-size: 17px;

    margin-top: 30px;
  }
  @media ${device.laptop} {
    font-size: 17px;
    margin-top: 30px;
  }
  @media ${device.tablet} {
    font-size: 15px;
    margin-top: 20px;
  }
  @media ${device.mobileL} {
    font-size: 13px;

    margin-top: 10px;
  }
  @media ${device.mobileS} {
    font-size: 12px;
    margin-top: 10px;
  }
`;

const NavLink = styled(Link)`
  display: flex;
  cursor: pointer;
  color: var(--color-light);
`;

const AlignCenter = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
