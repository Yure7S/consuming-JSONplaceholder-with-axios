import { Link } from "react-router-dom"
import styled from "styled-components"

const Head = styled.header`
   padding: 15px 20px;
   display: flex;
   justify-content: space-between;
   background: #2b2b2b;

   & *{
      color: #ffffffe2;
      transition: 0.3s ease;
   }

   & *:hover:not(.links){
      opacity: 0.8;
   }
`

const Links = styled.ul`
   display: flex;
   gap: 1rem;
`

const LiHead = styled.li`
   padding: 4px 10px;
`

export const Header = () => {
   return (
      <Head key={"Navbar"} className="navbar">
         <h2>
            <Link to={"/"}>Logo</Link>
         </h2>
         <nav>
            <Links className="links">
               <LiHead><Link to={"/"}>Home</Link></LiHead>
               <LiHead><Link to={"/new"}>New Post</Link></LiHead>
            </Links>
         </nav>
      </Head>
   )
}