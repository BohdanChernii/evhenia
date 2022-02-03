import React from 'react';
import home from '../.././images/Home.svg';
import calendar from '../.././images/calendar.svg';
import work from '../.././images/work.svg';
import employees from '../.././images/employees.svg';
import heart from '../.././images/heart.svg';
import twoFriends from '../.././images/twoFriends.svg';
import rating from '../.././images/rating.svg';
import game from '../.././images/game.svg';
import hrAnaclitic from '../.././images/hrAnaclitic.svg';
import education from '../.././images/education.svg';
import hr from '../.././images/hr.svg';
import questions from '../.././images/questions.svg';
import tasks from '../.././images/tasks.svg';
import setting from '../.././images/setting.svg';

const Menu = () => {
  return (
    <menu className="menu">
      <div className="menu__item active">
        <img src={home} alt="icon" className="menu__item-icon" />
        <p className="menu__item-text">Главная</p>
      </div>
      <div className="menu__item">
        <img src={calendar} alt="icon" className="menu__item-icon" />
        <p className="menu__item-text">Календарь</p>
      </div>
      <div className="menu__item">
        <img src={work} alt="icon" className="menu__item-icon" />
        <p className="menu__item-text">Моя компания</p>
      </div>
      <div className="menu__item">
        <img src={employees} alt="icon" className="menu__item-icon" />
        <p className="menu__item-text">Отбор персонала</p>
      </div>
      <div className="menu__item">
        <img src={heart} alt="icon" className="menu__item-icon" />
        <p className="menu__item-text">Адаптация персонала</p>
      </div>
      <div className="menu__item">
        <img src={twoFriends} alt="icon" className="menu__item-icon" />
        <p className="menu__item-text">Оценка персонала</p>
      </div>
      <div className="menu__item">
        <img src={rating} alt="icon" className="menu__item-icon" />
        <p className="menu__item-text">оценка исполнителя</p>
      </div>
      <div className="menu__item">
        <img src={game} alt="icon" className="menu__item-icon" />
        <p className="menu__item-text">Корпоративная культура</p>
      </div>

      <div className="menu__item">
        <img src={hrAnaclitic} alt="icon" className="menu__item-icon" />
        <p className="menu__item-text">HR-администрирование</p>
      </div>
      <div className="menu__item">
        <img src={education} alt="icon" className="menu__item-icon" />
        <p className="menu__item-text">Обучение персонала</p>
      </div>
      <div className="menu__item">
        <img src={hr} alt="icon" className="menu__item-icon" />
        <p className="menu__item-text">HR-аналитика</p>
      </div>
      <div className="menu__item">
        <img src={questions} alt="icon" className="menu__item-icon" />
        <p className="menu__item-text">Опросы</p>
      </div>
      <div className="menu__item">
        <img src={tasks} alt="icon" className="menu__item-icon" />
        <p className="menu__item-text">Мои задачи</p>
      </div>
      <div className="menu__item">
        <img src={setting} alt="icon" className="menu__item-icon" />
        <p className="menu__item-text">Настройки</p>
      </div>
    </menu>
  );
};
export default Menu;
