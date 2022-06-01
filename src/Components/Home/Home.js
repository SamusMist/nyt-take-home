import './Home.css';
import SingleArticle from '../SingleArticle/SingleArticle';
import nextId from "react-id-generator";

const Home = ({ stories, setArticle }) => {

  const allStories = stories.map(data => {
    data.id = Date.now();
    return (
      <div className='article-display' key={nextId()}>
        <SingleArticle setArticle={setArticle} { ...data } />
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
