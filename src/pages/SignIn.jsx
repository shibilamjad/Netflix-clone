import styled from "styled-components";
import { device } from "../ui/device";

function SignIn() {
  return (
    <LoginContainer>
      <StyledLogin>
        <Stylecontent>
          <div>
            <h1>Sign in</h1>
          </div>
          <form>
            <div>
              <Input type="text" placeholder="Email" />
            </div>
            <div>
              <Input type="text" placeholder="Email" />
            </div>
            <div>
              <Button type="submit">Sign in</Button>
            </div>
          </form>
          <div>
            <P>Forgot Pasword?</P>
          </div>
          <StyledSign>
            <AlignCenter>
              <p>Not a member? </p>
              <span>
                <NavLink href="/sign-up"> Sign up now.</NavLink>
              </span>
            </AlignCenter>
          </StyledSign>
        </Stylecontent>
      </StyledLogin>
    </LoginContainer>
  );
}

export default SignIn;

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
  h1 {
    margin-bottom: 29px;
    font-size: 32px;
    @media ${device.tablet} {
      font-size: 25px;
      margin-bottom: 15px;
    }
    @media ${device.mobileL} {
      font-size: 17px;
      margin-bottom: 5px;
    }
    @media ${device.mobileS} {
      margin-bottom: 5px;
      font-size: 17px;
    }
  }
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
  @media ${device.tablet} {
    font-size: 14px;
    transition: all 0.4;
    padding: 8px 12px;
    margin-bottom: 8px;
  }
  @media ${device.mobileL} {
    font-size: 12px;
    transition: all 0.4;
    padding: 6px 10px;
    margin-bottom: 4px;
  }
  @media ${device.mobileS} {
    transition: all 0.4;
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
  margin-top: 100px;
  font-weight: 400;
  font-size: 17px;
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
    margin-top: 10px;
  }
  @media ${device.mobileL} {
    font-size: 13px;
    margin-top: 1px;
  }
  @media ${device.mobileS} {
    font-size: 12px;
    margin-top: 1px;
  }
`;

const NavLink = styled.a`
  display: flex;
  cursor: pointer;
  color: var(--color-light);
`;

const AlignCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
