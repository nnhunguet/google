import React, { Component } from 'react';

import './App.css';
import {ReactComponent as Search} from './icons/search.svg'
import {ReactComponent as Mic} from './icons/mic.svg'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.inputElement = React.createRef();
  }

  componentDidMount() {
    this.inputElement.current.focus();
  }
  render() {
    return(
      <div className='App'>  
        <div className='header'>
          <p>Gmail</p>
          <p>Hình ảnh</p>
        </div>
        <div className='container'>
          <div>
            <img src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' alt='photo'/>
          </div>
          <div className='wrap-input'>
            <Search/>
            <input type='text' ref={this.inputElement}/>
            <img src='https://www.google.com/tia/tia.png'/>
            <Mic/>
          </div>
          <div className='option'>
            <div><p>Google Search</p></div>
            <div><p>I'm Feeling Lucky</p></div>
          </div>
          <div>Nguyen Nghia Hung - UET</div>
        </div>
        <div className='footer'>
          <div className='wrap-ul'>
            <ul className='d-flex'>
              <li>Advertising</li>
              <li>Business</li>
              <li>About</li>
              <li>How search work</li>
            </ul>
            <ul className='d-flex'>
              <li>Privacy</li>
              <li>Term</li>
              <li>Settings</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
