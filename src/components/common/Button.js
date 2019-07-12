import React from 'react';

function Button(props) {
  return (
    <button style={styles.button} onClick={props.click}>{props.text}</button>
  );
}

const styles = {
  button: {
    fontSize: '15px',
    padding: '10px 20px'
  }
}

export { Button };
