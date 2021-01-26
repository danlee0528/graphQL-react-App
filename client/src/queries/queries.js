import {gql} from 'apollo-boost';

const getBooksQuery = gql`
    {
        books{
            name
            id
        }
    }
`

const getAuthorsQuery = gql`
    {
        authors{
            name
            id
        }
    }
`

const addBookMutatoin = gql`
    mutation($name: String!, $genre: String!, $authorId:  ID!){
        addBook(name: $name, genre: $genre, authorId: $authorId){
            name
            id
        }
    }
`

const getBookQuery = gql`
    query($id: ID){
        book(id: ID){
            id
            name
            genre
            author{
                id
                name
                age
                books{
                    name
                    id
                }
            }
        }
    }
`


export {getBooksQuery, getAuthorsQuery,addBookMutatoin, getBookQuery};
