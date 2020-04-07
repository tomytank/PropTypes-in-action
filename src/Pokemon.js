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
            {/*using 'magical' and operator*/}
            <h3>{pokemon.name}</h3>
            <p>Pokemon Evolutions: </p>
            {pokemon.next_evolution &&
              pokemon.next_evolution.map(evo => {
                return <p>{evo.name}</p>;
              })}
          </div>
        </div>
      ))}
    </>
  );
}
//Using Tenary operator for above:
/* <p>Pokemon Evolutions: </p>
{pokemon.next_evolution
  ? pokemon.next_evolution.map(evo => {
      return <p>{evo.name}</p>;
    })
  : null} */

// PropTypes to add here
Pokemon.propTypes = {
  pokemon: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      num: PropTypes.string,
      type: PropTypes.arrayOf(
        PropTypes.oneOf([
          "Grass",
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
          "Dragon"
        ])
      ),
      next_evolution: PropTypes.arrayOf(
        PropTypes.shape({
          num: PropTypes.string,
          name: PropTypes.string
        })
      )
    })
  )
};

Pokemon.defaultProps = {
  //Default Prop if data fields are not laoded for whatever reason
  // the following could be a blank display form or a set of dummy data
  //Default response
  pokemon: [
    {
      id: 16,
      num: "016",
      name: "Pidgey",
      img: "http://www.serebii.net/pokemongo/pokemon/016.png",
      type: ["Normal", "Flying"]
    }
  ]
};
export default Pokemon;
