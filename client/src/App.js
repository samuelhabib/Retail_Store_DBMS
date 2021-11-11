import React, { useState, useEffect }from 'react'


function App() {
  const[data,setData] = useState([{}])

  useEffect (() => {
    
    fetch("/tshirts").then(
      res => res.json()
    ).then(

      data =>{
        setData(data)
        console.log(data)
      }
    )
  }, [])

  return (
    <div>
      {(typeof data.tshirts === 'undefined') ? (

        <p>Loading ...</p>
      ) : (
        data.tshirts.map((tshirt,i) => (
          <p key={i}>{tshirt}</p>
        ))
      )}
    </div>
  )
}

export default App
