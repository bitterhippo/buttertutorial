import React from 'react';

const NavHeader = () => {
  return (
    <div style={styles.navWrapper}>
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
  )
};

const styles = {
  navWrapper: {
    display: 'flex',
    flexDirection: 'row'
  }
}

export default NavHeader;