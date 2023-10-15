import React from 'react';
import './style.css'; 
import pokeball from '../../assets/Pokeball.png'


export default function Loader() {
    return (
        <div className="Loader">
            <img className="pokeball" src={pokeball} alt="Pokeball" />
            <p className="loading">Loading<span className="dots">...</span></p>
        </div>
    );
}
