import React from 'react';
import './SingleArticle.css';
import SingleArticleView from '../SingleArticleView/SingleArticleView';
import { Link } from 'react-router-dom';

const SingleArticle = ({ section, title, abstract, multimedia, id, setArticle }) => {

  return (
    <Link to={`/article-view/${id}`}>
      <div className='card' onClick={() => setArticle(id)}>
        <img src={multimedia[2].url} alt={multimedia[2].section}/>
        <h1>{title}</h1>
        <p>{section}</p>
      </div>
    </Link>
  )
}

export default SingleArticle;
