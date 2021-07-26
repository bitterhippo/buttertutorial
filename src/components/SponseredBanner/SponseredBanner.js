import React from 'react';
import Colors from '../Colors';

const SponseredBanner = props => {
  return (
    <div style={styles.sponseredBannerWrapper}>
      <div style={styles.text}>TRUSTED BY COMPANIES WORLDWIDE:</div>
      <div style={styles.logoList}>
        <div style={styles.logoItem}>
          fortel now
        </div>
        <div style={styles.logoItem}>
          Gap
        </div>
        <div style={styles.logoItem}>
          Samsung
        </div>
        <div style={styles.logoItem}>
          Caterpillar
        </div>
        <div style={styles.logoItem}>
          Ikea
        </div>
        <div style={styles.logoItem}>
          Sabre
        </div>
        <div style={styles.logoItem}>
          Deloitte
        </div>
      </div>
    </div>
  )
};

const styles = {
  sponseredBannerWrapper: {
    height: '15vh',
    width: '100%',
    borderBottom: `1px solid ${Colors.TextBody}`,
    textAlign: 'center',
  },
  logoList: {
    marginTop: '5vh',
    display: 'flex',
    gap: '10px',
    marginLeft: '7.5vw',
    marginRight: '7.5vw',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 10,
    fontWeight: 'bold',
    color: Colors.TextBody,
    opacity: 0.4,
    marginTop: '2.5vh',
    fontFamily: 'Open Sans'
  },
  logoItem: {
    fontSize: 18,
    color: Colors.TextBody,
    fontFamily: 'Open Sans'
  }
};

export default SponseredBanner;