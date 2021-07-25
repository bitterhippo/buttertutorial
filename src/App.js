import { useState, useEffect } from 'react';
import butter from './butter-client';

//Component imports
import ImageBanner from './components/ImageBanner/ImageBaner';
import NavHeader from './components/navigation/NavHeader';
import Post from './components/Post/Post';

function App() {

  const [fetchData, setFetchData] = useState('');

  useEffect(() => {
    butter.post.list({page: 1, page_size: 10})
    .then(function(response) {
      setFetchData(response)
    })
  }, []);

  console.log(fetchData);


  // This is a subrender function that enables the main content to be rendered once the neccesary JSON data is fetched from butter.
  const content = () => {
    return (
      <div>
        <NavHeader />
        <ImageBanner />
        <div>
          {
            fetchData.data.data.map(currentPost => 
            <Post 
              key={currentPost.created}
              title={currentPost.title}
              body={currentPost.summary}
            />)
          }
        </div>
      </div>
    )
  };

  return (
    <>
      {fetchData === '' ? 'Data not loaded!' : content()}
    </>
  );
};

const styles = {

}

export default App;
