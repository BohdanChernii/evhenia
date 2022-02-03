import React from 'react';
import Menu from './Menu';
import './sidebar.scss';
import ulia from '../.././images/ulia.svg';
import arrowLeft from '../.././images/arrowLeft.svg';
const SideBar = () => {
  return (
    <div className="sideBar">
      <div className="user">
        <img src={ulia} alt="Owner" className="user__avatar" />
        <div className="user__info">
          <p className="user__info-name">Юлия Н.</p>
          <p className="user__info-position">Owner</p>
        </div>
      </div>
      <Menu />
      <img src={arrowLeft} alt="arrow" className="sideBar__ArrowBottom" />
    </div>
  );
};
export default SideBar;
