import React from 'react';
import Colors from '../Colors';

const NavHeader = () => {
  return (
    <div style={styles.navWrapper}>
      <div style={styles.navBarContent}>
        <div>
          <span style={{ fontWeight: 'bold' }}>Xplenty</span>
        </div>
        <div>
          Product
        </div>
        <div>
          Integrations
        </div>
        <div>
          Solutions
        </div>
        <div>
          Resources
        </div>
      </div>
      <div style={styles.navBarConfiguration}>
        <div>
          Language
        </div>
        <div>
          Sign In
        </div>
        <div>
          <button style={styles.button}>GET STARTED</button>
        </div>
      </div>
    </div>
  )
};

const styles = {
  navWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  navBarContent: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '3vw',
    marginTop: '1vh',
    width: '40%',
    gap: '2vw',
    height: '3vh',
  },
  navBarConfiguration: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '3vw',
    marginTop: '1vh',
    gap: '2vw',
    height: '3vh',
    marginRight: '3vh'
  },
  button: {
    backgroundColor: Colors.Button,
    color: 'white',
    borderRadius: 4,
    border: 'none',
    height: '2.5vh',
    boxShadow: '0px 2px 7px #00000033',
    opacity: 1
  }
}

export default NavHeader;