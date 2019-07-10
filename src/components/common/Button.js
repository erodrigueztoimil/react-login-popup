import React from 'react';

function Button(props) {
  return (
    <button style={styles.button} onClick={props.click}>Log In</button>
  );
}

const styles = {
  button: {
    fontSize: '20px',
    padding: '10px 20px'
  }
}

export { Button };
