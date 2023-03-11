import axios from "axios";

const blogFetch = axios.create({
   baseURL: "https://jsonplaceholder.typicode.com",
   headers: {
      "Content-Type" : "application.json" // Configurando o tipo de dado a ser trocado com o servidor
      // Pode ser usado para transmitir e receber tokens 
   }
})

export default blogFetch