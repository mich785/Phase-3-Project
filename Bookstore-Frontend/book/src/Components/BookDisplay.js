import React from 'react'

export default function BookDisplay({image,author,description,id,handleCart}) {
  return (
            <div className="col-2 card m-3" key={id}>  
                <img className="card-img-top img-thumbnail " src={image} alt="Card image cap"/>
                <div className="card-body">
                <h5 className="card-title text-muted">{author}</h5>
                <p className="card-text">{description}</p>
                <button type="button" onClick={() => handleCart(id)}  className="btn btn-outline-success m-2">Add to Cart</button> 
                <button type="button" className="btn btn-outline-success">Purchase</button>
                </div>
            </div>
  )
}
