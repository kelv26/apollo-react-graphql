import { gql, useLazyQuery } from '@apollo/client'
import React, { useState } from 'react'


const GET_CHARACTER_BY_LOCATION = gql`
query getLocationsByName($name: String!){
    characters (filter: {
      name: $name
    }) {
      results {
        location {
          name
        }     
      }
    }
}
`

export default function Search() {

    const [name, setName] = useState('')

    const [getLocations, {error, loading, data, called}] = useLazyQuery(GET_CHARACTER_BY_LOCATION, {
        variables: {
            name
        }
    })

    console.log( error, loading, data, called)

    return (
        <>
            <div>Search</div>
            <input value={name} onChange={(e)=> { setName(e.target.value)}} type='String'/>
            <button onClick={() => getLocations()}>Search</button>

            {loading && <div>spinner...</div>}
            {error && <div>Something went wrong.</div>}
            {data && (
                <ul>
                {data.characters.results.map(character => {
                    return (
                        //add unique key
                        <li>{character.location.name}</li>
                    )
                })}
                </ul>
            )}
        </>
    )
}
