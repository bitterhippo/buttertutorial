import React from 'react';

const NavHeader = () => {
  return (
    <div style={styles.navWrapper}>
      <div style={styles.navBarContent}>
        <div>
          Xplenty
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
          GET STARTED
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
    border: '2px solid gray'
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
  }
}

export default NavHeader;