import './App.css';
import React, {useState, useEffect} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../../Header';
import Error from '../../Error';
import Home from '../../Home';

const App = () => {
  const [stories, setStories] = useState([]);
  const [error, setError] = useState('');

  const fetchStories = () => {
    fetchData.getData(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=5tD1M6InGK2xFGKqj8uIHTo5EZJ6Yo0i`)
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

    </div>
  );
}

export default App;
