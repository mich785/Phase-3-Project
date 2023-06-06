import React from 'react'

export default function BookDisplay({image,author,url,description}) {
  return (
    <div>
        <img src ={image} alt="image" /> 
        <h2>{author}</h2>
    </div> 
  )
}
