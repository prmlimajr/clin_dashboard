import React from 'react';
import Github from '../../../assets/img/github.svg';
import LinkedIn from '../../../assets/img/linkedin.svg';
import Phone from '../../../assets/img/smartphone.svg';
import Mail from '../../../assets/img/mail.svg';

import './Sidebar.css';

export default function Side() {
  return (
    <div className='sidebar'>
      <ul>
        <li>
          <a href='https://github.com/prmlimajr'>
            <img src={Github} alt='Github' />
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/prmlimajr/'>
            <img src={LinkedIn} alt='LinkedIn' />
          </a>
        </li>
        <li>
          <a href='https://api.whatsapp.com/send?phone=5581999813319&text=Oi%2C%20Paulo!'>
            <img src={Phone} alt='Phone' />
          </a>
        </li>
        <li>
          <a href='mailto:prmlimajr@hotmail.com'>
            <img src={Mail} alt='Mail' />
          </a>
        </li>
      </ul>
    </div>
  );
}
