import React, { Component } from 'react';
import './Button.css';

export default class Button extends Component {
  render() {
    return (
      <button type='submit' onClick={this.props.handleClick}>
        <div className='btn'>
          <div className='btn-img'>
            <img src={this.props.logo} alt={this.props.content} />
          </div>
          <div className='btn-text'>
            <span>{this.props.content}</span>
          </div>
        </div>
      </button>
    );
  }
}
