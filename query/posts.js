const AllPosts = `query AllPosts {posts(orderBy: publishedAt_DESC){
id
excerpt
slug
title
date
}}`

const SinglePost=`query SinglePost($slug: String!){
post(where: {slug:$slug}){createdAt
updatedAt
publishedAt
title
slug
date
excerpt
content
{
raw
html
markdown
text}
coverImage{url
width
height
}}}}}`
export {AllPosts, SinglePost}