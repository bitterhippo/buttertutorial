import React from 'react';
import Colors from '../Colors';

const Footer = () => {
  return (
    <div style={styles.footerWrapper}>
      <div style={styles.footerNav}>
        <div style={styles.footerNavItem}>
          Terms
        </div>
        <div style={styles.footerNavItem}>
          Privacy Policy
        </div>
        <div style={styles.footerNavItem}>
          Contact
        </div>
        <div style={styles.footerNavItem}>
          hello@xplenty.com
        </div>
      </div>
    </div>
  )
};

const styles = {
  footerWrapper: {
    marginTop: '7vh',
    backgroundColor: Colors.Highlights,
    height: '6.5vh',
    bottom: '0',
    width: '100%'
  },
  footerNav: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '7.5vw',
    gap: 10,
    height: '100%'
  },
  footerNavItem: {
    marginTop: 'auto',
    marginBottom: 'auto',
    color: 'white',
  }
};

export default Footer;

