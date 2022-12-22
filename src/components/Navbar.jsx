
import {Link} from "react-router-dom"


export default function(){

return <nav className="navbar">
     <ul>
       <li><Link to="/" >Home</Link></li>
       <li><Link to="/articles" >Article</Link></li>
      <li><Link to="/aboutus" >Contact Us</Link></li>
     </ul>

</nav>
  
}