import React from "react";
import PropTypes from "prop-types";

function Pokemon(props) {
  console.log(props);
  return (
    <>
      {props.pokemon.map(pokemon => (
        <div key={pokemon.id} className="pokemon">
          <img src={pokemon.img} alt={pokemon.name} />
          <div>
            <h3>{pokemon.name}</h3>
          </div>
        </div>
      ))}
    </>
  );
}

// PropTypes to add here
Pokemon.propTypes = {
  pokemon: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      num: PropTypes.string,
      type:
        PropTypes.oneOf[
          ("Grass",
          "Poison",
          "Fire",
          "Flying",
          "Water",
          "Bug",
          "Normal",
          "Electric",
          "Psychic",
          "Ground",
          "Fighting",
          "Rock",
          "Ice",
          "Ghost",
          "Dragon")
        ]
    })
  )
};
export default Pokemon;
