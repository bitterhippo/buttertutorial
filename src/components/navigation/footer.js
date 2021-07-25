import React from 'react';
import Colors from '../Colors';

const Footer = () => {
  return (
    <div style={styles.footerWrapper}>
      <div style={styles.footerNav}>
        <div style={styles.footerNavItem}>
          Terms
        </div>
        <div>
          Privacy Policy
        </div>
        <div>
          Contact
        </div>
        <div>
          hello@xplenty.com
        </div>
      </div>
    </div>
  )
};

const styles = {
  footerWrapper: {
    backgroundColor: Colors.Highlights,
    height: '5vh',
  },
  footerNav: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '7.5vw',
    gap: 10,
  },
  footerNavItem: {
    marginTop: 'auto',
    marginBottom: 'auto',
    color: 'white'
  }
};

export default Footer;

