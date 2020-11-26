import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { userSignIn } from '../../../api/users';
import Button from '../../components/Button';

import Logo from '../../../assets/img/farmaciaalt.svg';
import Login from '../../../assets/img/log-in.svg';

import './SignIn.css';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    const data = {
      email,
      password,
    };

    await userSignIn(data);
    history.push('/main');
  }

  return (
    <div className='signInContainer'>
      <img src={Logo} alt='Logo' className='logo' />
      <h1>Faça o seu login:</h1>

      <form onSubmit={handleSubmit} id='signinForm'>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          className='inputForm'
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor='password'>Senha</label>
        <input
          type='password'
          id='password'
          className='inputForm'
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button logo={Login} content='ENTRAR' />
      </form>

      <p>
        Ainda não tem uma conta?{' '}
        <Link to='/register'>Faça o seu cadastro!</Link>
      </p>
    </div>
  );
}
