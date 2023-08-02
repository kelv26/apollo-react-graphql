import React from 'react'
import { useCharacter } from '../hooks/Character';
import { useParams } from 'react-router';

export default function CharacterPage() {

  const {id} = useParams();

  const {error, loading, data} = useCharacter(id);

  if(loading) return <div>spinner...</div>

  if(error) return <div>Something went wrong.</div>

  return (
    <div>
      <h1>{data.character.name}</h1>
      <img src={data.character.image} alt={data.character.name} />
      <div>
        {data.character.episode.map(episode => {
          return (
            <div key={episode.id}>
              <h2>{episode.name}</h2>
              <p>{episode.episode}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
