import PostCard from '@/components/PostCard'


async function loadPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()

    await new Promise(res => setTimeout( res, 5000)) 
    return data
}

// React Server component
async function PostPages() {
    const posts = await loadPosts()
    return <div>{
            posts.map(post =>(
                <PostCard post={post} key={post.id}/>
            ))
    }</div>
    
}

export default PostPages