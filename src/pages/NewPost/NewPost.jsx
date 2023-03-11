import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ButtonSubmit } from "../../components/Buttons"
import blogFetch from "../../axios/config"

import "./style.css"

export const NewPost = () => {

   const navigate = useNavigate()

   const [title, setTitle] = useState()
   const [body, setBody] = useState()

   const createPost = async (e) => {
      e.preventDefault()
      const post = {title, body, userId: 1}
      await blogFetch.post("/posts", {
         body: post
      })
      navigate("/") // Redirecionando para home
   }

   return (
      <section className="container">
         <h2>Inserir post</h2>
         <form onSubmit={(e) => createPost(e)}>
            <label htmlFor="title">Título</label>
            <input onChange={(e) => setTitle(e.target.value)} placeholder="Digite o título.." id="title" name="title" type="text" />
            <label htmlFor="content">Comentário</label>
            <textarea onChange={(e) => setBody(e.target.value)} placeholder="Digite o conteúdo.." name="content" id="content"></textarea>
            <ButtonSubmit type="submit" value={"Enviar"} />
         </form>
      </section>
   )
}