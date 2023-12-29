import styled from "styled-components";

import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import { device } from "../ui/device";
import { Loading } from "../ui/Loading";
import { MoviesList } from "../components/MoviesList";
import { ErrorMessage } from "../ui/ErrorMessage";

function HomePage() {
  const { query, handleChange, isLoading, error } = useContext(MovieContext);

  return (
    <HomeContainer>
      <StyledHome>
        <StyledInput>
          <Input
            type="text"
            placeholder="Search movies..."
            value={query}
            onChange={handleChange}
          />
        </StyledInput>
        {isLoading && <Loading />}
        {!isLoading && !error && <MoviesList />}
        {error && <ErrorMessage message={error} />}
      </StyledHome>
    </HomeContainer>
  );
}

export default HomePage;

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 10px;
`;

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--color-light);
  height: 100%;
  margin-top: 20px;

  /* gap: 87px; */
  padding: 10px;
  width: 80%;
  margin-bottom: 20px;
`;
const StyledInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
`;
const Input = styled.input`
  width: 70%;
  padding: 10px 15px;
  border-radius: 20px;
  border: transparent;
  appearance: none;
  color: var(--color-black);
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 15px;
  &:focus {
    outline: none;
  }
  @media ${device.mobileS} {
    width: 70%;
    padding: 8px 12px;
  }
  @media ${device.mobileL} {
    width: 70%;
    padding: 8px 12px;
  }
  @media ${device.tablet} {
    width: 70%;
    padding: 8px 12px;
  }
  @media ${device.laptop} {
    width: 80%;
    padding: 8px 12px;
  }
  @media ${device.laptopL} {
    width: 80%;
    padding: 8px 12px;
  }
`;
