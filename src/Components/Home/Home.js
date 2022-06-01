import './Home.css';
import SingleArticle from '../SingleArticle/SingleArticle';
import React, {useState} from 'react';
import nextId from "react-id-generator";

const Home = ({ stories }) => {

  const allStories = stories.map(data => {
    return (
      <div className='article-display' key={nextId()}>
        <SingleArticle {...data}/>
      </div>
    )
  })

  return (
    <div className='stories-display'>
      {allStories}
    </div>
  )
}

export default Home;
