import React from 'react';
import './greetings.scss';
import close from '../.././images/close.svg';
import illistration from '../.././images/illistration.svg';
const Greetings = () => {
  return (
    <section className="main__greetings">
      <h1 className="main__greetings-title">Привет, Юлия!</h1>
      <p className="main__greetings-text">
        Добро пожаловать в Ваш профиль, Вы получили новые отклики на Вакансии,
        рекомендуем ответить на них как можно быстрее, чтобы не упустить ценного
        сотрудника
      </p>
      <div className="main__greetings-close close">
        <img src={close} alt="close" className="close__icon" />
        <a href="#" className="close__text" onClick={(e) => e.preventDefault()}>
          Закрыть
        </a>
      </div>
      <img src={illistration} alt="" className="woman" />
    </section>
  );
};
export default Greetings;
