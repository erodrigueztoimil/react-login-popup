import React from 'react';

function Input(props) {
  return  (
    <input placeholder={props.placeholder} type={props.type} value={props.value} style={styles.input}/>
  );
}

const styles = {
  input: {
    fontSize: '15px',
    color: '#000',
    padding: '10px 25px'
  }
}

export { Input };
