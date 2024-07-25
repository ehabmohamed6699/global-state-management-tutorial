import React from 'react'
import { posts } from '../utils/posts'
import { usePostsStore } from '../utils/postsStore'
const ZustandComp = () => {
    const {posts:savedPosts, savePost, removePost} = usePostsStore((state) => ({
        posts: state.posts,
        savePost: state.savePost,
        removePost: state.removePost
    }))
  return (
    <div>
        <h1>User posts and saved posts using Zustand</h1>
        <div style={{display:"flex", flex:"1 1 0px", justifyContent:"center"}}>
            <div style={{width:"50%"}}>
                <h2>Feed</h2>
                {posts.map((post, _) => (<div key={post.id} style={{textAlign:"left"}}>
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                    <button onClick={()=>{savePost(post)}}>Save</button>
                </div>))}
            </div>
            <div style={{width:"50%"}}>
                <h2>Saved posts</h2>
                {savedPosts.map((post, _) => (<div key={post.id} style={{textAlign:"left"}}>
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                    <button onClick={()=>{
                        removePost(post)
                    }}>Unsave</button>
                </div>))}
            </div>
        </div>
    </div>
  )
}

export default ZustandComp