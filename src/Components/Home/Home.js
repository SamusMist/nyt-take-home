import './Home.css';
import SingleArticle from '../SingleArticle/SingleArticle';
import nextId from "react-id-generator";

const Home = ({ stories, setArticle, filterSearch }) => {
  let allStories
    if(stories !== null) {
      allStories = stories.map(data => {
        data.id = Date.now();
        return (
          <div className='article-display' key={nextId()}>
            <SingleArticle setArticle={setArticle} { ...data } />
          </div>
        )
      })
    }

  return (
    <section>
      <div className='input-box'>
         <input
           className='search-bar'
           type='text'
           placeholder='search for an article'
           onChange={(e) => {
             filterSearch(e.target.value)
           }}
         />
       </div>
      <div className='stories-display'>
        {allStories}
      </div>
    </section>
  )
}

export default Home;
