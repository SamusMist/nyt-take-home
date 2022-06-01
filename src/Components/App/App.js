import React, {useState, useEffect} from 'react';
import { Route, Routes, useRoutes } from 'react-router-dom';
import fetchData from '../../ApiCalls';
import Header from '../Header/Header';
import Error from '../Error/Error';
import Home from '../Home/Home';
import './App.css';


const App = () => {
  const [stories, setStories] = useState([]);
  const [error, setError] = useState('');

  const fetchStories = () => {
    fetchData.getData(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`)
       .then(data => setStories(data.results))
       .catch((error) => {
         setError(error)
      });
  }

  useEffect(() => {
    fetchStories();
  }, [])

  return (
    <div className="App">
    <Header />
      <Routes>
        <Route path='/' element={ <Home stories={stories} /> } />
        <Route path='/error' element={ <Error /> } />
      </Routes>
    </div>
  );
}

export default App;
