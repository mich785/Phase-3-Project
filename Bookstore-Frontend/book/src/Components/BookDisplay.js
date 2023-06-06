import React from 'react'

export default function BookDisplay({image,author,description,amazon}) {
  return (
            <div className="col-2 card m-3"> 
                <img className="card-img-top img-thumbnail " src={image} alt="Card image cap"/>
                <div className="card-body">
                <h5 className="card-title text-muted">{author}</h5>
                {/* <p className="card-text">{description}</p> */} 
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                <button type="button" className="btn btn-outline-success m-2">Add to Cart</button> 
                <button type="button" className="btn btn-outline-success">Description</button>
                </div>
            </div>
  )
}
