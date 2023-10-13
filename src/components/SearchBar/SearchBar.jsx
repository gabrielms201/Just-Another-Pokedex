import './style.css'
import SearchButton from '../SearchButton/SearchButton';
import searchImage from '../../assets/Search.png'
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';



export default function SearchBar() {
    const [searchContent, setSearchContent] = useState("");
    const navigate = useNavigate();
    const handleInputChange = (event) => {setSearchContent(event.target.value)}
    
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            navigate(`./${searchContent}`);
        }
      };

    return (
            <div className="SearchBar">
                <input 
                    type="search"
                    id="search"
                    name="search"
                    placeholder="Type a Pokémon"
                    autoComplete='off'
                    onChange={handleInputChange}
                    onKeyDown={handleKeyPress} />
                <SearchButton imageContent={searchImage} searchContent={searchContent}/>
            </div>
    )
}