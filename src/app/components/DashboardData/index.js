import React, { Component } from 'react';

import { getFullPatients } from '../../../api/patients';
import { getFullUsers } from '../../../api/users';

import './DashboardData.css';

export default class DashboardData extends Component {
  state = {
    fullList: [],
    professionals: [],
  };

  componentDidMount = async () => {
    const fullList = await getFullPatients();
    const professionals = await getFullUsers();

    this.setState({
      fullList,
      professionals,
    });

    console.log(this.state);
  };

  getMalePatients = () => {
    const { fullList } = this.state;

    const malesPatients = fullList.filter(
      (patient) => patient.gender === 'Masculino'
    );

    return malesPatients.length;
  };

  render() {
    const { fullList, professionals } = this.state;

    return (
      <div className='dashboardData'>
        <h2>Informações do Sistema:</h2>

        <h4>Total de Pacientes: {fullList.length} pacientes</h4>
        <p>Pacientes do sexo masculino:{this.getMalePatients()} pacientes</p>
        <p>
          Pacientes do sexo feminino: {fullList.length - this.getMalePatients()}{' '}
          pacientes
        </p>

        <h4>
          Total de Profissionais cadastrados: {professionals.length}{' '}
          profissionais
        </h4>
      </div>
    );
  }
}
