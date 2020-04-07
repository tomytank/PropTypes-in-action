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
  pokemon: PropTypes.number
};
export default Pokemon;
