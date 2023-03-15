import { useEffect, useState } from "react"
import blogFetch from "../../axios/config"
import "./style.css"
import { Link } from "react-router-dom"

export const Home = () => {
   const [posts, setPosts] = useState([])

   const getPosts = async () => {
      try {
         const response = await blogFetch.get("/posts")
         const content = response.data
         console.log(content)
         setPosts(content)
      } catch (error) {
         console.log(error)
      }
   };
      
   useEffect(() => {
      getPosts()
   }, [])

   return (
      <section className="container">
         <h2>Ultimas publicações</h2>
         <div className="content">{posts.length === 0 ? <h3>Carregando...</h3> : posts.map((post) => (
            <div className="post" key={post.id}>
               <div className="box">
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
               </div>
               <span><Link to={`/posts/${post.id}`}>Ler mais</Link></span>
            </div>
         ))}</div>
      </section>
   )
}