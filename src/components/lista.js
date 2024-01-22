import React,{useContext} from "react";
import "../css/lista.css";
import { contextPersonas } from "../context/contexto";
function Lista() {
    const { persona,dispatch } = useContext(contextPersonas);
  return (
    <div className="container">
     
     {persona?.map((item,index)=>(
        
         <div class="card text-center">
           { console.log(item)}
         <img src={item.foto} class="card-img-top" alt="..." style={{width:"350px"}} onClick={()=>{
            dispatch({
                
                type:'eliminar',
                title:item.email
            })
         }} />
         <div class="card-body">
           <h5 class="card-title">{item.name} {item.lastname}</h5>
           
         </div>
         <ul class="list-group list-group-flush">
           <li class="list-group-item">Telefono : {item.phone}</li>
           <li class="list-group-item">Email : {item.email}</li>
           <li class="list-group-item">A third item</li>
         </ul>
       </div>
     ))}
      
    </div>
  );
}

export default Lista;
