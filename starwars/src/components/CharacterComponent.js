import React from "react";
import styled from "styled-components";

const CharacterComponent = props => {
  console.log(props);
  return (
    <div>
      <h2 className="character-name">{props.character.name}</h2>
      <p className="character-height">{props.character.height}</p>
      <p className="character-mass">{props.character.mass}</p>
      <p className="character-hair_color">{props.character.hair_color}</p>
      <p className="character-skin_color">{props.character.skin_color}</p>
      <p className="character-eye_color">{props.character.eye_color}</p>
      <p className="character-birth_year">{props.character.birth_year}</p>
      <p className="character-gender">{props.character.gender}</p>
      <p className="character-homeworld">{props.character.homeworld}</p>
      <p className="character-films">{props.character.films}</p>
      <p className="character-species">{props.character.species}</p>
      <p className="character-vehicles">{props.character.vehicles}</p>
      <p className="character-starships">{props.character.starships}</p>
      <p className="character-created">{props.character.created}</p>
      <p className="character-edited">{props.character.edited}</p>
      <p className="character-url">{props.character.url}</p>
    </div>
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
