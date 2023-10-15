import Home from "../pages/Home/Home"
import { Route, Routes } from 'react-router-dom'; // Importe o componente Routes
import PokemonPage from "../pages/Pokemon/PokemonPage";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/pokemon/:pokemonName" element={<PokemonPage/>}/>
        </Routes>
    )
}
