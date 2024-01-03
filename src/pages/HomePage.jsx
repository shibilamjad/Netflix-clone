import styled from "styled-components";
import { Loading } from "../ui/Loading";
import { MoviesList } from "../components/MoviesList";
import { ErrorMessage } from "../ui/ErrorMessage";
import { SearchInput } from "../ui/SearchInput";
import { useMovie } from "../context/MovieContext";

function HomePage() {
  const { isLoading, error } = useMovie();

  return (
    <HomeContainer>
      <StyledHome>
        <SearchInput />
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
