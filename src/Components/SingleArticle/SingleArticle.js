import React from 'react';
import './SingleArticle.css'

const SingleArticle = ({ section, title, abstract, multimedia }) => {

  return (
    <div className='card'>
      <img src={multimedia[2].url} alt={multimedia[2].section}/>
      <h1>{title}</h1>
      <p>{section}</p>
      <p>{abstract}</p>
    </div>
  )
}

export default SingleArticle;
