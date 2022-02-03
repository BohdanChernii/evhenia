import React from 'react';
import './data.scss';
import arrowRight from '../.././images/arrowRight.svg';
const Data = () => {
  return (
    <article className="main__data data">
      <section className="data__title">
        <div className="data__title-info">
          <h1 className="title">Актуальные даные</h1>
          <p className="date">Февраль 17.2021 - чт, 08:43</p>
        </div>

        <div className="data__title-showMore">
          <a href="#" className="link" onClick={(e) => e.preventDefault()}>
            Показать все
          </a>
          <img src={arrowRight} alt="arrow" className="arrow" />
        </div>
      </section>
      <table className="data__table table">
        <thead className="data__table-head  table__head">
          <tr className="table__head-row">
            <td className="position">Вакансии</td>
            <td className="article">Новые Отклики</td>
            <td className="article">Ожидают звонка</td>
            <td className="article">Прошли тестирование</td>
            <td className="article">Ожидают собеседования</td>
          </tr>
        </thead>
        <tbody className="data__table-body table__body">
          <tr className="table__body-row">
            <td className="position">Юрист</td>
            <td className="table-item">5</td>
            <td className="table-item">1</td>
            <td className="table-item">3</td>
            <td className="table-item">3</td>
          </tr>
          <tr className="table__body-row">
            <td className="position">Дизайнер</td>
            <td className="table-item">10</td>
            <td className="table-item">4</td>
            <td className="table-item">3</td>
            <td className="table-item">3</td>
          </tr>
          <tr className="table__body-row">
            <td className="position">Бухгалтер</td>
            <td className="table-item">0</td>
            <td className="table-item">0</td>
            <td className="table-item">0</td>
            <td className="table-item">0</td>
          </tr>
          <tr className="table__body-row">
            <td className="position">Full Stack Developer</td>
            <td className="table-item active">
              <span className="value">8</span>
              <span className="add"> + 1</span>
            </td>
            <td className="table-item">6</td>
            <td className="table-item">1</td>
            <td className="table-item">1</td>
          </tr>
          <tr className="table__body-row">
            <td className="position">Финансист</td>
            <td className="table-item">5</td>
            <td className="table-item">1</td>
            <td className="table-item">3</td>
            <td className="table-item">1</td>
          </tr>
          <tr className="table__body-row">
            <td className="position">Front-End</td>
            <td className="table-item">10</td>
            <td className="table-item">4</td>
            <td className="table-item">3</td>
            <td className="table-item">3</td>
          </tr>
          <tr className="table__body-row">
            <td className="position">QA-специалист</td>
            <td className="table-item">0</td>
            <td className="table-item">0</td>
            <td className="table-item">0</td>
            <td className="table-item">0</td>
          </tr>
          <tr className="table__body-row">
            <td className="position">HR</td>
            <td className="table-item">8</td>
            <td className="table-item">6</td>
            <td className="table-item">1</td>
            <td className="table-item">1</td>
          </tr>
          <tr className="table__body-row">
            <td className="position">Маркетолог</td>
            <td className="table-item">0</td>
            <td className="table-item">0</td>
            <td className="table-item">0</td>
            <td className="table-item">0</td>
          </tr>
        </tbody>
      </table>
    </article>
  );
};
export default Data;
