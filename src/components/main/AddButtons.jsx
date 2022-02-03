import React from 'react';
import './addButtons.scss';
import Button from './Button';
const AddButtons = () => {
  return (
    <div className="addButtons">
      <Button
        name="addButtons__newTask addButtons__item"
        description="Добавить кандидата"
      />
      <Button
        name="addButtons__newMeeting addButtons__item"
        description="Добавить вакансию"
      />
      <Button
        name="addButtons__newPosition addButtons__item"
        description="Добавить встречу"
      />
      <Button
        name="addButtons__newCandidates addButtons__item"
        description="Добавить задание"
      />
    </div>
  );
};
export default AddButtons;
