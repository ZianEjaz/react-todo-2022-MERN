import React, { useEffect, useState } from 'react'

const MainContent = () => {

    const [todoArray, setTodoArray] = useState([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos?_page=1&_limit=10")
        .then((res)=>res.json())
        .then((res)=>setTodoArray(res))
    },[])


  return (
    <div>
        {todoArray.map((todo, index)=>{
return <p key={index}>{index + " "+ todo.title}</p>
        })}

    </div>
  )
}

export default MainContent