import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Posts = () => {

    const { post } = useLoaderData()
    return (
        <>
 <div className='fs-1 mb-4 text-center text-black'>  <i className="fa-solid fa-blog"></i>  Post: {post.id} </div>
            <h1>Title : {post.title}</h1>
            <h4> Text :<br/> {post.body}</h4>
        </>
    )
}

export default Posts


export const loaderPost = async ({ params }) => {
    const data = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.id}`
    );

    if (!data.ok)
        throw {
            status: data.status,
            statusText: "Code: No encontrado" + data.status,
        };


    const post = await data.json();
    return { post };
};