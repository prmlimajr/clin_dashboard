import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as DateFNS from 'date-fns';

import {
  getPatient,
  updatePatient,
  createCondition,
  deleteCondition,
} from '../../../../api/patients';

import ChevronLeft from '../../../../assets/img/chevron-left.svg';
import Plus from '../../../../assets/img/plus.svg';
import TrashCan from '../../../../assets/img/trash-2.svg';

import './PatientDetail.css';

class PatientDetail extends Component {
  state = {
    name: '',
    cpf: '',
    gender: null,
    birthday: '',
    condition: '',
    relative: null,
    self: 1,
    healthConditions: [],
  };

  componentDidMount = async () => {
    const id = this.props.match.params.id;
    const patient = await getPatient(id);

    this.setState({
      name: patient.name,
      cpf: patient.cpf,
      gender: patient.gender,
      birthday: patient.birthday,
      healthConditions: [...patient.conditions],
    });
  };

  render() {
    console.log('estado', this.state);
    return (
      <>
        <div className='patients'>
          <div className='patientsTitle'>
            <Link to='/main' className='back'>
              <img src={ChevronLeft} alt='Voltar' />
              <h1>{this.state.name}</h1>
            </Link>
          </div>
        </div>

        <div className='patientsContainer'>
          <h4>Dados pessoais:</h4>

          <label htmlFor='name'>Nome</label>
          <input
            type='text'
            id='name'
            className='inputForm'
            value={this.state.name}
            readOnly
          />
          <label htmlFor='birthday'>Data de nascimento</label>
          <input
            type='text'
            id='birthday'
            value={this.state.birthday}
            className='inputForm'
            readOnly
          />
          <label htmlFor='gender'>Sexo:</label>
          <input
            type='text'
            id='gender'
            name='gender'
            value={this.state.gender}
            className='inputForm'
            readOnly
          />

          <label htmlFor='cpf'>CPF</label>
          <input
            type='text'
            value={this.state.cpf}
            className='inputForm'
            readOnly
          />

          <form id='patientsForm  '>
            <h4>Histórico de saúde:</h4>

            <ul className='conditionList'>
              {this.state.healthConditions.map((row) => {
                return (
                  <li key={row.id}>
                    {row.description} -{' '}
                    {row.relative === 1 ? 'O próprio' : 'Membro da família'}
                  </li>
                );
              })}
            </ul>
          </form>
        </div>
      </>
    );
  }
}

export default PatientDetail;
