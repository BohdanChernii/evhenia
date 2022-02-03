import React from 'react';
import './newsBoard.scss';
import user1 from '../.././images/user1.svg';
import user2 from '../.././images/user2.svg';
import birthdayCake from '../.././images/birthdayCake.svg';
import connect from '../.././images/connect.svg';
const NewsBoard = () => {
  return (
    <div className="newsBoard">
      <div className="newsBoard__item">
        <img src={birthdayCake} alt="" className="newsBoard__item-logo" />
        <div className="newsBoard__item-info">
          <p className="event">Дни рождения</p>
          <p className="description">В етом месяце</p>
        </div>
        <div className="newsBoard__item-employees">
          <img className="employee person" src={user1} alt="" />
          <img className="employee" src={user2} alt="" />
        </div>
      </div>
      <div className="newsBoard__item">
        <img src={connect} alt="" className="newsBoard__item-logo" />
        <div className="newsBoard__item-info">
          <p className="event">Сейчас offline</p>
          <p className="description">2 сотрудника</p>
        </div>
        <div className="newsBoard__item-employees">
          <img className="employee person" src={user1} alt="" />
          <img className="employee" src={user2} alt="" />
        </div>
      </div>
    </div>
  );
};
export default NewsBoard;
