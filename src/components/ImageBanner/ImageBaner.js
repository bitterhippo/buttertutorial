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
        <button style={{ ...styles.button, ...styles.buttonCallToAction }}>Secure My Data</button>
        <button style={{ ...styles.button, ...styles.buttonCallToNotAction }}>Take A Chance</button>
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
    height: '50vh',
    objectFit: 'cover'
  },
  text: {
    width: '35%',
    position: 'absolute',
    textAlign: 'left',
    top: '15%',
    marginLeft: '12.5vw',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 48
  },
  buttonList: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    top: '65%',
    marginLeft: '12.5vw',
    gap: '0.5vw'
  },
  button: {
    border: 'none',
    height: '6vh',
    borderRadius: '4px',
    paddingLeft: '2vw',
    paddingRight: '2vw',
    fontWeight: 'bold',
    fontSize: 16
  },
  buttonCallToAction: {
    backgroundColor: Colors.CallToAction,
    border: 'none'
  },
  buttonCallToNotAction: {
    backgroundColor: '#11ffee00',
    color: 'white',
    border: '1px solid white'
  }
};

export default ImageBanner;
