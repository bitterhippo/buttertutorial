import React from 'react';
import Colors from '../Colors';

const ImageBanner = ({ message }) => {
  return (
    <div style={styles.imgBannerWrapper}>
      <img
        alt="A back drop of buildings meant to represent commerce."
        style={styles.image}
        src={'./MaskGroup5.png'} />
      <div style={styles.text}>{message}
      </div>
      <div style={styles.buttonList}>
          <button style={{...styles.button, ...styles.buttonCallToAction}}>Secure My Data</button>
          <button style={{...styles.button, ...styles.buttonCallToNotAction}}>Take A Chance</button>
        </div>
    </div>
  )
};

const styles = {
  imgBannerWrapper: {
    marginTop: 10,
    position: 'relative',
  },
  image: {
    opacity: 1,
    width: '100%',
    height: '26vh'
  },
  text: {
    position: 'absolute',
    textAlign: 'center',
    top: '20%',
    marginLeft: '12.5vw',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 32
  },
  buttonList: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    top: '70%',
    marginLeft: '12.5vw',
    gap: '3vw'
  },
  button: {
    border: 'none',
    height: '3vh',
    borderRadius: '4px',
    paddingLeft: '1vw',
    paddingRight: '1vw'
  },
  buttonCallToAction: {
    backgroundColor: Colors.CallToAction,
    border: 'none'
  },
  buttonCallToNotAction: {
    color: 'white',
    border: '1px solid white'
  }
};

export default ImageBanner;
