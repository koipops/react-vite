import React from 'react';

function Sidebar() {
  return (
    <aside style={styles.sidebar}>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </aside>
  );
}

const styles = {
    sidebar: {
      width: '200px',
      height: '100vh',
      background: '#f4f4f4',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'fixed',
      top: '0',
      left: '0',
    },
    list: {
      listStyle: 'none',
      padding: '0',
      textAlign: 'center',
      fontSize: '18px',
      fontWeight: 'bold',
    },
  };
  
  export default Sidebar;