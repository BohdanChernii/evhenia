import React from 'react';
import './main.scss';
import Data from './Data';
import Header from './Header';
import Plans from './Plans';
import TaskList from './TaskList';
import NewsBoard from './NewsBoard';
import Greetings from './Greetings';
import AddButtons from './AddButtons';
const Main = () => {
  return (
    <main className="main">
      <Header />
      <div className="main__info">
        <div className="main__info-statistic">
          <Greetings />
          <AddButtons />
          <Data />
        </div>
        <div className="main__info-dates">
          <Plans />
          <TaskList />
          <NewsBoard />
        </div>
      </div>
    </main>
  );
};
export default Main;
