import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

 

const Blog = () => {
  const { posts } = useLoaderData()
  console.log(posts)
  return (
    <div className="container   ">
 <div className='fs-1 mb-4 text-center text-dark'>  <i className="fa-solid fa-blog"></i> Lista de Posts</div>

 

      <ol >
        {posts.length > 0 ? (
          posts.map((post) => (
            <li key={post.id}  >
              <Link to={`/blog/${post.id}`} className='text-dark fs-3 mb-4' >{post.title}</Link>
            </li>
          ))
        ) : (
          <li>No blogs found</li>
        )}
      </ol>

    </div>
  )
}

export default Blog

export const loaderBlogs = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!data.ok)
    throw {
      status: data.status,
      statusText: "Code: " + data.status,
    };

  const posts = await data.json();
  return { posts };
};