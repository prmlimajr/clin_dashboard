import React, { Component } from 'react';

import './DataCard.css';

export default class DataCard extends Component {
  render() {
    return (
      <div className='dataCard' onClick={this.props.onClickDetail}>
        <div className='mainInfo'>
          <h3>{this.props.name}</h3>
          <small>Data de nascimento: {this.props.birthday}</small>
        </div>

        <div className='secondaryInfo'>
          <small>
            {this.props.age} anos. Sexo: {this.props.gender} - Médico:{' '}
            <h2>{this.props.doctor}</h2>
          </small>
        </div>
      </div>
    );
  }
}
