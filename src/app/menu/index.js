import { NavLink } from 'react-router-dom';
import React from 'react';
import './styles.scss';

export default function Menu() {
  return (
    <div className="app-menu">
      <NavLink exact className="app-menu__link" to="/">Synthesize</NavLink>
      <NavLink exact className="app-menu__link" to="/voiceList">Voices</NavLink>
    </div>
  );
}
