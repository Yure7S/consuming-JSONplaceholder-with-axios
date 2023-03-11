import { useEffect, useState } from "react"
import axios from "axios"
import blogFetch from "../../axios/config"
import "./style.css"
import { Link } from "react-router-dom"

export const Home = () => {
   const [posts, setPosts] = useState([])

   const getPosts = async () => {
      try {
         const response = await blogFetch.get("/posts")
         const content = response.data
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
         <h2>Últimos posts</h2>
         <div className="content">{posts.length === 0 ? <h3>Carregando...</h3> : posts.map((posts) => (
            <div className="post" key={posts.id}>
               <h3>{posts.title}</h3>
               <p>{posts.body}</p>
               <span><Link to={`/posts/${posts.id}`}>Ler mais</Link></span>
            </div>
         ))}</div>
      </section>
   )
}