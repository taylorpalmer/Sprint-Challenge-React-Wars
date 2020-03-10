import React from "react";
import styled from "styled-components";

const WrapperDiv = styled.div`
  border: solid dodgerblue;
  margin: 10%;
`;

const StyledP = styled.p`
  color: dodgerblue;
  max-width: 100%;
`;

const CharacterComponent = props => {
  console.log(props);
  return (
    <WrapperDiv>
      <h2 className="character-name">{props.people.name}</h2>
      <StyledP className="character-height">{props.people.height}</StyledP>
      <StyledP className="character-mass">{props.people.mass}</StyledP>
      <StyledP className="character-hair_color">
        {props.people.hair_color}
      </StyledP>
      <StyledP className="character-skin_color">
        {props.people.skin_color}
      </StyledP>
      <StyledP className="character-eye_color">
        {props.people.eye_color}
      </StyledP>
      <StyledP className="character-birth_year">
        {props.people.birth_year}
      </StyledP>
      <StyledP className="character-gender">{props.people.gender}</StyledP>
      <StyledP className="character-homeworld">
        {props.people.homeworld}
      </StyledP>
      <StyledP className="character-films">{props.people.films}</StyledP>
      <StyledP className="character-species">{props.people.species}</StyledP>
      <StyledP className="character-vehicles">{props.people.vehicles}</StyledP>
      <StyledP className="character-starships">
        {props.people.starships}
      </StyledP>
      <StyledP className="character-created">{props.people.created}</StyledP>
      <StyledP className="character-edited">{props.people.edited}</StyledP>
      <StyledP className="character-url">{props.people.url}</StyledP>
    </WrapperDiv>
  );
};

// {
// 	"name": "Luke Skywalker",
// 	"height": "172",
// 	"mass": "77",
// 	"hair_color": "blond",
// 	"skin_color": "fair",
// 	"eye_color": "blue",
// 	"birth_year": "19BBY",
// 	"gender": "male",
// 	"homeworld": "https://swapi.co/api/planets/1/",
// 	"films": [
// 		"https://swapi.co/api/films/2/",
// 		"https://swapi.co/api/films/6/",
// 		"https://swapi.co/api/films/3/",
// 		"https://swapi.co/api/films/1/",
// 		"https://swapi.co/api/films/7/"
// 	],
// 	"species": [
// 		"https://swapi.co/api/species/1/"
// 	],
// 	"vehicles": [
// 		"https://swapi.co/api/vehicles/14/",
// 		"https://swapi.co/api/vehicles/30/"
// 	],
// 	"starships": [
// 		"https://swapi.co/api/starships/12/",
// 		"https://swapi.co/api/starships/22/"
// 	],
// 	"created": "2014-12-09T13:50:51.644000Z",
// 	"edited": "2014-12-20T21:17:56.891000Z",
// 	"url": "https://swapi.co/api/people/1/"
// }

export default CharacterComponent;
