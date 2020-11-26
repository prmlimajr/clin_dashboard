import React, { useState } from 'react';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import { userSignUp } from '../../../api/users';

import Logo from '../../../assets/img/farmaciaalt.svg';
import Login from '../../../assets/img/log-in.svg';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      password,
      confirmPassword,
    };

    userSignUp(data);
  }

  return (
    <div className='signInContainer'>
      <img src={Logo} alt='Logo' className='logo' />
      <h1>Faça o seu cadastro:</h1>

      <form onSubmit={handleSubmit} id='signinForm'>
        <label htmlFor='name'>Nome</label>
        <input
          type='text'
          id='name'
          className='inputForm'
          onChange={(e) => setName(e.target.value)}
        />
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
        <label htmlFor='confirmPassword'>Confirmar senha</label>
        <input
          type='password'
          className='inputForm'
          id='confirmPassword'
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <Button logo={Login} content='CADASTRAR' />
      </form>

      <p>
        Já tem a sua conta? <Link to='/'>Faça o login!</Link>
      </p>
    </div>
  );
}
