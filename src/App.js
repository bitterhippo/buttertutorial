import React, { useState, useEffect } from 'react';
import butter from './butter-client';
import './App.css';
import { CSSTransitionGroup } from 'react-transition-group';

//Component imports
import ImageBanner from './components/ImageBanner/ImageBaner';
import SponseredBanner from './components/SponseredBanner/SponseredBanner';
import Footer from './components/navigation/Footer';
import NavHeader from './components/navigation/NavHeader';
import Post from './components/Post/Post';


function App() {

  const [fetchData, setFetchData] = useState('');
  const [bannerMessage, setBannerMessage] = useState('');

  useEffect(() => {
    butter.post.list({ page: 1, page_size: 10 })
      .then(function (response) {
        setBannerMessage(response.data.data.shift());
        setFetchData(response);
      })
  }, []);

  console.log(bannerMessage);
  console.log(fetchData);


  // This is a subrender function that enables the main content to be rendered once the neccesary JSON data is fetched from butter.
  const content = () => {

    console.log(bannerMessage);

    return (
      <div>
        <NavHeader />
        <CSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={false}>
          <ImageBanner message={bannerMessage.title}/>
        </CSSTransitionGroup>
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
  }
}

export default App;
