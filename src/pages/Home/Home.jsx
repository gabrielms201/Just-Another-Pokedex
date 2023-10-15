import React from 'react';


import './style.css'
import SearchBar from '../../components/SearchBar/SearchBar';
import Logo from '../../components/Logo/Logo';

export default function Home() {
    return (
        <div className = "Home">
            <Logo/>
            <SearchBar/>
        </div>
    )
}