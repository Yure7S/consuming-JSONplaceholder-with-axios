import { useEffect, useState } from "react"
import blogFetch from "../../axios/config"
import "./style.css"
import { useParams } from "react-router-dom"

export const Single = () => {

   const [post, setPost] = useState([])

   const getPosts = async () => {
      try {
         let url_atual = window.location.href.split("http://localhost:5173")[1]
         const response = await blogFetch.get(url_atual)
         const content = response.data
         setPost(content)
      } catch (error) {
         console.log(error)
      }
   };
      
   useEffect(() => {
      getPosts()
   }, [])

   return(
      <section className="single">
         <h2>Publicação</h2>
         <div className="content">{post.length === 0 ? <h3>Carregando...</h3> : (
            <div className="post" key={post.id}>
               <div className="box">
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
               </div>
            </div>
         )}</div>
      </section>
   )
}