import {articles} from "../utils/articles"
import Article from "../components/Article"
import { useNavigate } from "react-router-dom"
export default function(props){
    const navigator=useNavigate()
    function handleClick(index) {
        props.setArticle(index)
        navigator("/articles")
    }

return <div className="home">
    {articles.map((item,index)=>{
    return <div onClick={()=>handleClick(index)} key={item.id}>
        <Article item={item}/>
        </div>
    })
    }
</div>
  
}