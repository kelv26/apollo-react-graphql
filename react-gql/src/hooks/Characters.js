import { useQuery, gql } from '@apollo/client'

const GET_CHARACTERS = gql`
query {
    characters {
        results {
            id
            name
            status     
            image
        }
    }
}
`;

export function useCharacters() {
    const {error, loading, data} = useQuery(GET_CHARACTERS);

    console.log({error, loading, data})

    return { error, data, loading}
}