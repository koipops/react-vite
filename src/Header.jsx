import React from 'react';

function Header() {
  return (
    <header style={styles.header}>
      <h1>Welcome to My App</h1>
    </header>
  );
}

const styles = {
  header: {
    background: '#282c34',
    color: 'white',
    padding: '10px',
    textAlign: 'center',
  },
};

export default Header;