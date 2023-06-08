import React from 'react';


export default function CartItem({ id, author, image, title, description, amazon, publisher }) {
  return (
    <>
      <div className='col-2 card m-3' key={id}>
        <img className='card-img-top img-thumbnail' src={image} alt='cover' />
        <div className='card-body'>
          <h5 className='card-title'>{author}</h5>
          <p className='card-text text-muted'>{title}</p>
          <p className='card-text text-muted'>{description}</p>
          <h5 className='card-text font-italic'>{title}</h5>
          <p className='card-text'>Description: {description}</p>
          <p className='card-text'>Publisher: {publisher}</p>
          <button
            type='button'
            onClick={() => (window.location.href = `${amazon}`)}
            className='btn btn-outline-success m-2'
          >
            Purchase
          </button>
        </div>
      </div>
    </>
  );
}


