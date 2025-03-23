import { sanityClient } from '../../../sanity'
import { PortableText } from '@portabletext/react'

export async function getStaticPaths() {
  const query = `*[_type == "post"] { slug }`
  const posts = await sanityClient.fetch(query)
  
  const paths = posts.map((post) => ({
    params: { slug: post.slug.current },
  }))
  
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const query = `*[_type == "post" && slug.current == $slug][0]`
  const post = await sanityClient.fetch(query, { slug: params.slug })
  
  return {
    props: { post },
  }
}

export default function Post({ post }) {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
      <PortableText value={post.body} />
    </div>
  )
}
