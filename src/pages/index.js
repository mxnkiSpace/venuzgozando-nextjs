import Link from 'next/link'
import { sanityClient } from '../../sanity'

export async function getStaticProps() {
  const query = `*[_type == "post"] { title, slug }`
  const posts = await sanityClient.fetch(query)

  return {
    props: { posts }
  }
}

export default function Home({ posts }) {
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug.current}>
            <Link href={`/blog/${post.slug.current}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
