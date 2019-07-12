import React from 'react';
import { Input, Button } from './';

function Popup(props) {
  return (
    <div className={props.class}>
      <h3>popup</h3>
      <Input placeholder='username' type='text'/>
      <Input placeholder='password' type='text'/>
      <Button text='Submit'/>
    </div>
  );
}

export { Popup };
