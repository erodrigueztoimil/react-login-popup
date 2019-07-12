import React, {Component} from 'react';
import '../../styles/Login.css';
import { Button, Popup } from './';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      buttonClicked: false
    }
  }
  buttonClickHandler() {
    this.setState({
      buttonClicked: !this.state.buttonClicked
    });
  }
  render() {
    let classes = 'popup';

    if (this.state.buttonClicked) {
      classes = 'popup open';
    }
    return (
      <div className='login'>
        <Button text='Log In' click={this.buttonClickHandler.bind(this)} />
        <Popup class={classes}/>
      </div>
    );
  }
}

export { Login };
