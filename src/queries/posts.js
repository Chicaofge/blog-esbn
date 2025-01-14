async function getPosts() {
    const client = HygraphClient()
    const allPosts = await client.request(allPosts)
    return allPosts.posts
   }
   
   import { GraphQLClient } from "graphql-request";

   export const HygraphClient = (args = {}) => {
      const { preview = false } = args
      const client = new GraphQLClient(process.env.HYGRAPH_ENDPOINT)
      if (preview) {
          client.setHeader('Authorization', `Bearer ${process.env.HYGRAPH_PREVIEW_TOKEN}`)
      }
      return client
   }
      