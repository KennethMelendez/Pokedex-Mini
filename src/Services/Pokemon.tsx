import React, { useState, useEffect } from 'react';

interface Props {
    name : string | null;
}

interface IPokemon {
    species : {
        name : string | null;
    };

    sprites : {
        front_default : string | null;
    };
    weight: 0;
    types: any | null;
}

function Pokemon(props : Props) {
    const initializePokemon : IPokemon = {
        species: {
            name : '',
        },
        sprites: {
            front_default : '',
        },
        weight: 0,
        types: null
    };

    const [pokemon, setPokemon] = useState<IPokemon>(initializePokemon);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/" + props?.name?.toLowerCase())
            .then(response => response.json())
            .then(data => setPokemon(data))
            .catch(error => console.log(error));
    },[props.name]);

    return (
        <div>
            <div className="nes-container is-rounded is-dark">
                {pokemon?.species?.name}

                {
                    pokemon?.sprites?.front_default && <img src={pokemon?.sprites?.front_default} className="pokemon-animation" alt="Pokemon Image"/>
                }
            </div>
            <div>
                <div className="nes-table-responsive">

                              {
                                pokemon?.types?.map(
                                    (type, idx) => {
                                        return (
                                            <div key={idx}>{type.type.name} type</div>
                                        )
                                    })
                            }
                    {pokemon?.weight && pokemon?.weight && "weight"} {pokemon?.weight && pokemon?.weight}
                </div>

            </div>
        </div>
    )
}

export default Pokemon;