import { useState, useEffect } from 'react';
import butter from './butter-client';

//Component imports
import imgBanner from './components/imgBanner/imgBanner';
import footer from './components/navigation/footer';
import NavHeader from './components/navigation/NavHeader';
import posts from './components/posts/posts';

function App() {

  const [fetchData, setFetchData] = useState('');

  useEffect(() => {
    butter.post.list({page: 1, page_size: 10})
    .then(function(response) {
      setFetchData(response)
    })
  }, []);


  // This is a subrender function that enables the main content to be rendered once the neccesary JSON data is fetched from butter.
  const content = () => {
    return (
      <div>
        <NavHeader />
      </div>
    )
  };

  return (
    <div>
      {fetchData === '' ? 'Data not loaded!' : content()}
    </div>
  );
};

const styles = {

}

export default App;
