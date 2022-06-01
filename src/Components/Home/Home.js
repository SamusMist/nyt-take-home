import './Home.css';
import SingleArticle from '../SingleArticle/SingleArticle';
import React, {useState} from 'react';
import nextId from "react-id-generator";

const Home = ({ stories }) => {
  htmlID = nextId();

  const allStories = stories.map(data => {
    return (
      <div className='article-display' key={htmlID}>
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
