import React from 'react';
import { Link } from 'react-router-dom';

const SingleArticleView = ({ stories, article }) => {

  const articleView = stories.find(story => story.id === article)


  return (
    <div>
      <img src={articleView.multimedia[0].url} alt={articleView.multimedia[0].caption}/>
      <h1>{articleView.title}</h1>
      <p>{articleView.abstract}</p>
      <a href={articleView.url}>{articleView.url}</a>
      <p>{articleView.byline}</p>
    </div>
  )
}

export default SingleArticleView;
