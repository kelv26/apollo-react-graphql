import { gql, useLazyQuery } from '@apollo/client'
import React, { useState } from 'react'
import Navbar from '../components/navbar'


const GET_CHARACTER_BY_LOCATION = gql`
query getCharacterByName($name: String!){
    characters (filter: {
      name: $name
    }) {
      results {
        id
        name
        location {
          name
        }
      }
    }
}
`;

export default function Search() {

    const [name, setName] = useState('')

    const [getLocations, {error, loading, data, called}] = useLazyQuery(GET_CHARACTER_BY_LOCATION, {
        variables: {
            name
        }
    })

    const handleSearch = () => {
        getLocations({
            variables: {
                name
            }
        });
    };

    console.log( error, loading, data, called)

    return (
        <>
            <Navbar/>
            <h1>Search Location by Character Name</h1>
            <p className='subtext'>To demonstrate: </p>
            <p className='subtext'>- useLazyQuery() function from Apollo Client</p>
            <p className='subtext'>- GraphQL query filter</p>
            <input value={name} onChange={(e)=> { setName(e.target.value)}} type='String'/>
            <button onClick={() => handleSearch()}>Search</button>

            {loading && <div>loading...</div>}
            {error && <div>Something went wrong.</div>}
            {data && (
                <ul>
                {data.characters.results.map((character, index) => {
                    return (
                        //add unique key
                        <li key={index}>{character.location.name} [{character.name}]</li>
                    )
                })}
                </ul>
            )}
        </>
    )
}
