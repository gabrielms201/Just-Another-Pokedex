import './style.css'

export default function PokemonCard({pokemon}) {
    console.log(pokemon)
    const image = pokemon.sprites.other['official-artwork'].front_default;
    const name = pokemon.name
    return (
        <div className = "PokemonCard">
            <div className="Label"> {pokemon.name.toUpperCase()} </div>
            <img src={image} alt="Pokemon Name"/>
        </div>
    )
}