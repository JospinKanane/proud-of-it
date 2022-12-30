import {gql, GraphQLClient} from 'graphql-request'


export const getPost = async() => {  
  const client = new GraphQLClient("https://api-eu-west-2.hygraph.com/v2/clbf5zzak0cel01t8986hhxst/master", {headers:{}})
  const query = gql`
          query myQuery {
            postsConnection {
              edges {
                node {
                  author {
                    bio
                    name
                    id
                    photo {
                      url
                      createdAt
                    }
                  }
                  slug
                  title
                  excerpt
                  featuredImage {
                    url
                  }
                  categories {
                    name
                    slaug
                  }
                }
              }
            }
          }
  
  `
  const response = await client.request(query)
  console.log(response.postsConnection.edges); 
}