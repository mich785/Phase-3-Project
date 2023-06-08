import React from 'react'

export default function Cart({cart}) {  
  //console.log(cart)

  const addCart = cart.map((b, index) => {  
    return ( 
      <div key={index} className="col-2 card m-3">     
                <img className="card-img-top img-thumbnail" src={b.book_image} alt="cover"/>
                <div className="card-body">
                <h5 className="card-text font-italic">{b.title}</h5> 
                <h5 className="card-title">{b.author}</h5>
                <p className="card-text">Description: {b.description}</p>
                <p className="card-text">Publisher: {b.publisher}</p>
                <button type="button" onClick={event =>  window.location.href=`${b.amazon_product_url}`}  className="btn btn-outline-success m-2">Purchase</button> 
                </div> 
      </div>
    )
  }) 

  return (
    <>
     {addCart}
    </>
  )
}
