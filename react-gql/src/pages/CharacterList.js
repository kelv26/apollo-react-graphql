import React from 'react'
import {useCharacters} from '../hooks/Characters'
import { Link } from 'react-router-dom';

export default function CharacterList() {
    const {error, loading, data} = useCharacters();

    if(loading) return <div>spinner...</div>

    if(error) return <div>Something went wrong.</div>

    return (
    <>
        <h1>Rick & Morty Character List</h1>
        <div className='CharacterList'>
            {data.characters.results.map(character => {
                return (
                    <Link to={`/${character.id}`} key={character.id} className='Character' >
                        <img src={character.image} alt={character.name} />
                        <div className='CharacterName'>
                            <h2>{character.name}</h2>
                        </div>
                    </Link>
                )
            })}
        </div>
    </>
    )
}
