import React from 'react';


import './style.css'
import SearchBar from '../../components/SearchBar/SearchBar';
import GlobalStyle from '../../theme/GlobalStyle';
import Logo from '../../components/Logo/Logo';

export default function Home() {
    return (
        <div className = "Home">
            <Logo/>
            <SearchBar/>
            <GlobalStyle/>
        </div>
    )
}