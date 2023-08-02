import React from 'react'
import { useCharacter } from '../hooks/Character';
import { useParams } from 'react-router';
import Navbar from '../components/navbar';

export default function CharacterPage() {

  const {id} = useParams();

  const {error, loading, data} = useCharacter(id);

  if(loading) return <div>loading...</div>

  if(error) return <div>Something went wrong.</div>

  return (
    //Add navbar
    <div>
      <Navbar/>
      <h1>{data.character.name}</h1>
      <img src={data.character.image} alt={data.character.name} />
      <h2>Episodes:</h2>
      <div>
        {data.character.episode.map(episode => {
          return (
            <>
            <div key={episode.id} className='episode-container'>
              <h3>{episode.name}</h3>
              <p>{episode.episode}</p>
            </div>
            </>
          )
        })}
      </div>
    </div>
  )
}
