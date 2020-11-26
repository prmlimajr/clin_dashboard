import React from 'react';
import { useHistory } from 'react-router-dom';

import { userSignOut } from '../../../api/users';
import { getName } from '../../services/auth';

import './Header.css';

export default function Header() {
  const history = useHistory();

  function handleSignOut() {
    userSignOut();
    history.push('/');
  }

  return (
    <header>
      <span onClick={handleSignOut}>Oi, {getName().toUpperCase()} - Sair</span>
    </header>
  );
}
