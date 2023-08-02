import { useQuery, gql } from "@apollo/client";

const GET_CHARACTER = gql`
query getCharacter($id: ID!) {
    character(id: $id) {
        id
        image
        name
        episode {
            name
            episode
        }
    }
}
`;

export const useCharacter = (id) => {
    const {error, loading, data} = useQuery(GET_CHARACTER, {
        variables: {id}
    })

    return {
        error,
        loading,
        data
    }
};

