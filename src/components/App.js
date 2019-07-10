import React from 'react';
import { Login } from './common';

function App() {
  return (
    <div className="app" style={styles.app}>
      <label style={styles.label}>TEST</label>
      <Login />
    </div>
  );
}

const styles = {
  app: {
    textAlign: 'center'
  },
  label: {
    fontSize: '25px'
  }
}

export default App;
