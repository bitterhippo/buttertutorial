import React, { useState, useEffect } from 'react';
import butter from './butter-client';
import './App.css';

//Component imports
import ImageBanner from './components/ImageBanner/ImageBaner';
import SponseredBanner from './components/SponseredBanner/SponseredBanner';
import Footer from './components/navigation/Footer';
import NavHeader from './components/navigation/NavHeader';
import Post from './components/Post/Post';

function App() {

  const [fetchData, setFetchData] = useState('');
  const [bannerMessage, setBannerMessage] = useState('');
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    butter.post.list({ page: 1, page_size: 10 })
      .then(function (response) {
        setBannerMessage(response.data.data.shift());
        setFetchData(response);
      })
  }, []);

  // This is a subrender function that enables the main content to be rendered once the neccesary JSON data is fetched from butter.
  const content = () => {

    return (
      <div>
        <NavHeader />
        <div
          style={styles.bannerBox}
          onMouseEnter={() => setToggle(!toggle)}
          onMouseLeave={() => setToggle(!toggle)}
        >
          {
            toggle === false ? <ImageBanner
              message={bannerMessage.title}
              image={'./MaskGroup5.png'}
            /> : <ImageBanner
              message={bannerMessage.title}
              image={'./MaskGroup4.png'}
            />
          }
        </div>
        <SponseredBanner />
        <div style={styles.postList}>
          {
            fetchData.data.data.map(currentPost =>
              <Post
                key={currentPost.created}
                title={currentPost.title}
                summary={currentPost.summary}
              />
            )
          }
        </div>
        <Footer />
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
  postList: {
    marginTop: 40,
    marginLeft: '7.5vw',
    marginRight: '7.5vw',
  },
  bannerBox: {
    height: '45vh',
    width: '100%',
  },
}

export default App;
