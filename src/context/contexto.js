import { createContext, useEffect, useState,useReducer } from "react";

export const contextPersonas = createContext()


export const Provide= ({children})=>{
    const init = [];
    const reducer = (state, action) => {
      switch (action.type) {
        case "agregar":
          console.log(action.payload, "estoy aqui");
          return [
            ...state,
            {
              name: action.payload.name,
              lastname: action.payload.lastname,
              phone: action.payload.phone,
              foto: action.payload.foto,
              email: action.payload.email,
            },
          ];
         case "eliminar":
            console.log(action.title)
            const dat= state.filter(val=>val.email!==action.title)
            console.log(dat,"as3")
            return dat
  
        default:
          return state;
      }
      
    };
    const [persona, dispatch] = useReducer(reducer, init);
    const [person,setperson] = useState()

    const cargar = async()=>{
       const response = await fetch('https://randomuser.me/api/')
       const datos = await response.json()
       console.log(datos)
       setperson(datos.results)
    }

    useEffect(()=>{
        cargar()
    },[])
    return(
        <contextPersonas.Provider value={{person,setperson,cargar,persona,dispatch}}>
            {children}
        </contextPersonas.Provider>
    )
}