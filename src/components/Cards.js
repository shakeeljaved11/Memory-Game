import { useState } from "react"
import Card from './Card'

function Cards(){
     const [Items, setItems]=useState([
        {id: 1, img: '/image/html.png', stat: ""},
        {id: 1, img: '/image/html.png', stat: ""},
        {id: 2, img: '/image/css.png', stat: ""},
        {id: 2, img: '/image/css.png', stat: ""},
        {id: 3, img: '/image/bootstrap.png', stat: ""},
        {id: 3, img: '/image/bootstrap.png', stat: ""},
        {id: 4, img: '/image/jera.png', stat: ""},
        {id: 4, img: '/image/jera.png', stat: ""},
        {id: 5, img: '/image/react.png', stat: ""},
        {id: 5, img: '/image/react.png', stat: ""},
        {id: 6, img: '/image/slack.png', stat: ""},
        {id: 6, img: '/image/slack.png', stat: ""},
        {id: 7, img: '/image/download.png', stat: ""},
        {id: 7, img: '/image/download.png', stat: ""},
        {id: 8, img: '/image/react.png', stat: ""},
        {id: 8, img: '/image/react.png', stat: ""},
     ].sort(()=> Math.random() - 0.5))

     const [prev, setPrev]=useState(-1)

     function check(current){
         if(Items[current].id ==Items[prev].id){
         Items[current]. stat="correct"
         Items[prev].stat="correct"
         setItems([...Items])
         setPrev(-1)
         }else{
            Items[current]. stat="wrong"
            Items[prev].stat="wrong"
            setItems([...Items])
            setTimeout(()=>{
               Items[current]. stat=""
         Items[prev].stat=""
         setItems([...Items])
         setPrev(-1)

            }, 1000)
         }
     }

     function handleClick(id){
       if(prev === -1){
         Items[id].stat="active"
         setItems([...Items])
           setPrev(id)
       }else{
         check(id)
       }

     }

    return (
     <div className="container">
     {Items.map((item, index)=>(
       <Card key={index} item={item} id={index} handleClick={handleClick}/>
    ))}

     </div>
    )
      

}

export default Cards