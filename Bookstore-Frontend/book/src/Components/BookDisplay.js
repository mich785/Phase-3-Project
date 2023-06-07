import React from 'react'

export default function BookDisplay({image,author,title,id,handleCart}) {
  return (
            <div className="col-2 card m-3" key={id}>  
                <img className="card-img-top img-thumbnail " src={image} alt="cover"/>
                <div className="card-body">
                <h5 className="card-title">{author}</h5>
                <p className="card-text text-muted">{title}</p> 
                <button type="button" onClick={() => handleCart(id)}  className="btn btn-outline-success m-2">Add to Cart</button> 
                </div>
            </div>
  )
}
