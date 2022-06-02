import React from 'react';
import './SingleArticle.css';
import SingleArticleView from '../SingleArticleView/SingleArticleView';
import { Link } from 'react-router-dom';

const SingleArticle = ({ section, title, abstract, multimedia, id, setArticle }) => {

  return (
    <Link to={`/article-view/${id}`}>
      <div className='card' onClick={() => setArticle(id)}>
        <img className='card-img'src={multimedia[2].url} alt='Image thumbnail for article'/>
        <h1 className='card-title'>{title}</h1>
        <p className='card-section'>{section}</p>
      </div>
    </Link>
  )
}

export default SingleArticle;
