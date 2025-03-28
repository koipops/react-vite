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
    padding: '10px',
    position: 'fixed',
    bottom: '0',
    width: '100%',
  },
};

export default Footer;