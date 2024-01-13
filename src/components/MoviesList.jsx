import styled from "styled-components";
import { device } from "../ui/device";
import { useMovie } from "../context/MovieContext";
import { useState } from "react";
import Modal from "../ui/Modal";

export function MoviesList() {
  const { movies, movieDetails, handleSelectedId, selectedId } = useMovie();
  const selectedMovie = movies.find((movie) => movie.id === selectedId);
  console.log(movies);
  return (
    <StyledMovies>
      {movies.map((movie) => (
        <MovieContainer key={movie.id}>
          <button onClick={() => handleSelectedId(movie.id)}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={`${movie.title} poster`}
            />
          </button>
        </MovieContainer>
      ))}
      {selectedId && (
        <Modal>
          <StyledImg
            src={`https://image.tmdb.org/t/p/w500/${selectedMovie.backdrop_path}`}
            alt={`${selectedMovie.title} poster`}
          />
          <StyledTitle>{selectedMovie?.title}</StyledTitle>
          <StyledRating>Rating: {selectedMovie?.vote_average}⭐</StyledRating>
          <StyledP>{selectedMovie?.overview}</StyledP>
        </Modal>
      )}
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
  button {
    border: transparent;
  }
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
const StyledImg = styled.img`
  width: 100%;
  height: auto;
  font-size: 30px;
`;
const StyledTitle = styled.h1`
  margin-top: 20px;
  color: #f54d4d;
  @media ${device.laptopL} {
    margin-top: 20px;
    font-size: 30px;
  }
  @media ${device.tablet} {
    margin-top: 20px;
    font-size: 25px;
  }
  @media ${device.mobileL} {
    margin-top: 10px;
    font-size: 20px;
  }
  @media ${device.mobileS} {
    margin-top: 1px;
    font-size: 20px;
  }
`;
const StyledP = styled.h1`
  color: var(--color-description);
  font-weight: 400;
  margin-top: 20px;
  font-size: 15px;
  @media ${device.laptopL} {
    margin-top: 20px;
    font-size: 15px;
  }
  @media ${device.tablet} {
    margin-top: 20px;
    font-size: 13px;
  }
  @media ${device.mobileL} {
    margin-top: 10px;
    font-size: 10px;
  }
  @media ${device.mobileS} {
    margin-top: 10px;
    font-size: 10px;
  }
`;
const StyledRating = styled.h1`
  color: var(--color-description);
  font-weight: 500;
  margin-top: 20px;
  font-size: 15px;
  @media ${device.laptopL} {
    margin-top: 20px;
    font-size: 15px;
  }
  @media ${device.tablet} {
    margin-top: 20px;
    font-size: 13px;
  }
  @media ${device.mobileL} {
    margin-top: 10px;
    font-size: 10px;
  }
  @media ${device.mobileS} {
    margin-top: 10px;
    font-size: 10px;
  }
`;
