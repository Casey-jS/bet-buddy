import React from 'react';
import { useParams } from 'react-router-dom';
import FavPlayers from '../FavPlayers';

export default function FavPlayersWrapper(){
    const { userName } = useParams();
    return <FavPlayers userName={userName} />;
}