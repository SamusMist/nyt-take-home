import './App.css';
import React, {useState, useEffect} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../../Header';
import Error from '../../Error';
import Home from '../../Home';

const key = process.env.REACT_APP_API_KEY

const App = () => {
  const [stories, setStories] = useState([]);
  const [error, setError] = useState('');

  const fetchStories = () => {
    fetchData.getData(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${key}`)
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
      <Route exact path='/home'>
        <Home stories={stories} />
      </Route>
      <Route exact path='/error'>
        <Error />
      </Route>
    </div>
  );
}

export default App;
