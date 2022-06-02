import React, {useState, useEffect} from 'react';
import { Route, Routes, useRoutes } from 'react-router-dom';
import fetchData from '../../ApiCalls';
import SingleArticleView from '../SingleArticleView/SingleArticleView';
import Header from '../Header/Header';
import Error from '../Error/Error';
import Home from '../Home/Home';
import './App.css';


const App = () => {
  const [stories, setStories] = useState([]);
  const [error, setError] = useState('');
  const [article, setArticle] = useState(null);
  const [searchedArticles, setSearchedArticles] = useState(null);
  const [errorMsg, setErrorMsg] = useState('')

  const fetchStories = () => {
    fetchData.getData(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`)
       .then((data) => {
         setSearchedArticles(data.results);
         setStories(data.results)})
       .catch((error) => {
         setError(error)
      });
  }

  useEffect(() => {
    fetchStories();
  }, [])

  const filterSearch = (input) => {
    const results = stories.filter((story) =>
      story.title.toLowerCase().includes(input.toLowerCase())
    )
    if (results !== undefined) {
      setSearchedArticles(results)
      setErrorMsg('')
      if (!results[0]) {
        setErrorMsg('No results found')
      }
    }

    if (input === '') {
      setSearchedArticles(stories)
    }
  }

  return (
    <div className="App">
    <Header />
      <Routes>
        <Route path='/' element={ <Home filterSearch={filterSearch} stories={searchedArticles} setArticle={setArticle}/> } />
        <Route path='/error' element={ <Error /> } />
        <Route path='/article-view/:id' element={ <SingleArticleView article={article} stories={stories}/> } />
      </Routes>
    </div>
  );
}

export default App;
