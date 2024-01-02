import styled from "styled-components";
import { device } from "../ui/device";
import { MovieContext } from "../context/MovieContext";
import { useContext } from "react";

export function MoviesList() {
  const { movies } = useContext(MovieContext);
  return (
    <StyledMovies>
      {movies.map((movie) => (
        <MovieContainer key={movie.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={`${movie.title} poster`}
          />
        </MovieContainer>
      ))}
    </StyledMovies>
  );
}
const StyledMovies = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  /* grid-template-columns: 100px 100px 100px 100px 100px; */
  grid-template-rows: auto;
  box-sizing: border-box;
  justify-content: space-evenly;
  justify-items: center;
  width: 90%;
  padding: 50px;
  margin-top: 30px;
  padding-top: 80px;
  margin-left: auto;
  margin-right: auto;
  gap: 50px;
  height: 80vh;
  overflow-y: scroll;
  scroll-behavior: smooth;
  background-size: cover;

  @media ${device.laptopL} {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    /* min-width: 60%; */
  }

  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: thin;
  scrollbar-color: transparent transparent;

  overflow: -moz-scrollbars-none;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &:hover {
    scrollbar-color: auto auto;
  }
`;
const MovieContainer = styled.li`
  box-sizing: border-box;
  align-items: center;
  /* margin: 50px 0px; */
  width: 160px;
  height: 240px;
  /* overflow: hidden; */
  img {
    width: 100%;
    height: 100%;
    cursor: pointer;

    &:hover {
      transform: scale(1.2);
      transition: all 0.2s;
      border: 1px solid #fff;
    }
  }
`;
