import './style.css'
import SearchButton from '../SearchButton/SearchButton';
import searchImage from '../../assets/Search.png'
import { useState } from 'react';
import Alert from '../Alert/Alert';

import { useNavigate } from 'react-router-dom';



export default function SearchBar() {
    const [invalid, setInvalid] = useState(false)
    const [searchContent, setSearchContent] = useState(null);

    function isNullOrEmpty(str) {
        return str == null || str.trim() === "";
    }

    const navigate = useNavigate();
    const handleInputChange = (event) => {setSearchContent(event.target.value)}
    
    const jumpToPokemonPage = () => {
        if (!isNullOrEmpty(searchContent))
            navigate(`./pokemon/${searchContent}`);
        else {
            setInvalid(true);
        }
    }

    const searchPokemon = (event) => {
        if (event.key === 'Enter') {
            jumpToPokemonPage();
        }
      };

    return (
        <>
          <div className="SearchBar">
                <input 
                    type="search"
                    id="search"
                    name="search"
                    placeholder= {invalid ? "Please, type a Pokémon to continue" : "Type a Pokémon"} 
                    autoComplete='off'
                    onChange={handleInputChange}
                    onKeyDown={searchPokemon} />
                <SearchButton imageContent={searchImage} searchContent={searchContent} handleClick={jumpToPokemonPage}/>
            </div>

            {invalid && <Alert text="Please type the Pokémon you want before searching"></Alert>}
        </>
          
    )
}