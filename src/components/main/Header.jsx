import React from 'react';
import notification from '../.././images/Notification.svg';
import message from '../.././images/Message.svg';
import logo from '../.././images/Logo.svg';
import search from '../.././images/Search.svg';

const Header = () => {
  return (
    <header className="header">
      <img src={search} alt="" className="header__search" />
      <input
        type="text"
        className="header__input"
        placeholder="Найти на странице"
      />
      <div className="header__panel">
        <img
          src={notification}
          alt="notifications"
          className="header__panel-notifications"
        />
        <img src={message} alt="mail" className="header__panel-mail" />
        <img src={logo} alt="logo" className="header__panel-logo" />
      </div>
    </header>
  );
};
export default Header;
