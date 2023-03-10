import { useEffect, useState } from "react"
export async function getServerSideProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

    return {
        props: {
            posts: data
        }
    }
}


export default function Posts({ posts }) {

    // const [posts, setPosts] = useState([])
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    //         const data = await response.json()
    //         setPosts(data)
    //         console.log(posts)

    //     }
    //     fetchData()
    // }, [])

    return (
        <>
            <h1>This is the Posts Page</h1>
        {posts?.map((post) => {
            return <li key={post.id}>{post.title}</li>
        })}
        </>
    )
}