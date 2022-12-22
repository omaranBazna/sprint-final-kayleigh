
export default function({item}){

  return  (<div className="article" >
    <div className="left">
    <h1>{item.title}</h1>
    <p className="des">{item.description}</p>
    </div>
    <div className="right">
       <p>author: {item.author}</p>
  </div>
  </div>)
  
}