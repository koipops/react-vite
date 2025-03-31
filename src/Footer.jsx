import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2025 My App. All rights reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    background: '#282c34',
    color: 'white',
    textAlign: 'center',
    padding: '0px',
    position: 'fixed',
    bottom: '0',
    left: '0',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default Footer;