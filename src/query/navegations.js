const query =`Query test($navID:String!){ navigation(where:{navID: $navID}){
id
link
URL
displayText
page{
... on Page{
id
slug
}
}
}
navid}}`
const SingleNav = query
export { SingleNav}

