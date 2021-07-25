import React from 'react';

const ImageBanner = ({ message }) => {
  return (
    <div style={styles.imgBannerWrapper}>
      <img
        alt="A back drop of buildings meant to represent commerce."
        style={styles.image}
        src={'./MaskGroup5.png'} />
    </div>
  )
};

const styles = {
  imgBannerWrapper: {
    marginTop: 10,
  },
  image: {
    opacity: 1,
    width: '100%',
    height: '26vh'
  }
};

export default ImageBanner;
