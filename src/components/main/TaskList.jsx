import React from 'react';
import './taskList.scss';
import star from '../.././images/star.svg';
const TaskList = () => {
  return (
    <ul className="taskList">
      <li className="taskList__item">
        <p className="taskList__item-date">
          04 <span className="month">Июн</span>
        </p>
        <div className="taskList__item-info">
          <p className="toDO">Позвонить кандидату Шевченко...</p>
          <p className="whichPosition">Кандидат на должность Front ...</p>
        </div>
        <img src={star} alt="" className="star" />
      </li>
      <li className="taskList__item">
        <p className="taskList__item-date">
          04 <span className="month">Июн</span>
        </p>
        <div className="taskList__item-info">
          <p className="toDO">Собеседование Коломиец</p>
          <p className="whichPosition">Кандидат на должность QA Manual</p>
        </div>
      </li>
      <div className="candidate">
        <li className="taskList__item candidate__info">
          <p className="taskList__item-date">
            04 <span className="month">Июн</span>
          </p>
          <div className="taskList__item-info">
            <p className="toDO">Собеседование Швец</p>
            <p className="whichPosition">Кандидат на должность CTO</p>
          </div>
        </li>
        <p className="candidate__messages">+4</p>
      </div>
    </ul>
  );
};
export default TaskList;
