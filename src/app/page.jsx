import { AllPosts } from '../queries/posts'
import Link from 'next/link'
import {HygraphClient} from '@/utils/client'
async function getPosts() {
  const client = HygraphClient()
  const allPosts = await client.request(AllPosts)
  console.log(allPosts)
  return allPosts.posts
}

export const metadata = {
  title: 'Blog Boa Nova'
}

export default async function Home({}) {
  const allPosts = await getPosts()
  return (
    <div className="divide-y divide-gray-200">
      <div className="pt-6 pb-8 space-y-2 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Bog Boa Nova
        </h1>
        <p className="text-lg leading-7 text-gray-500">
          As Publicações mais recentes
        </p>
      </div>

      {/* Lista de posts */}
      <ul className="divide-y divide-gray-200">
        {allPosts.map((post=>{
          return (
            <li key={post.id} className="py-12">
            <article className="space-y-2 xl:grid xl:grid-colsl4 xl:space-y-0 xl:items-baseline">
            <dl>
              <dt className="sr-only">Published on </dt>
              <dd classname="text-base leading-6 font-medium text-gray-500">
                <time datetime={post.date}>
                  {new Date(post.date).toLocaleDateString('pt-PT', {
                    year:'NUMERIC',
                    month:'SHORT',
                    day: 'NUMERIC'
                  })}
                </time>
              </dd>
            </dl>
            <div className="space-y-5 xl:col-span-3">
              <div className="space-y-6">
                <h2 className="text-2xl leading-8 font-bold tracking.tight"></h2>
              </div>
              </div>
          
        
        </ul>"
    </div>
  )
}
