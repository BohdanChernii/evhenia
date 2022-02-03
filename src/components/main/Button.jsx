import React from 'react';
const Button = ({ name, description }) => {
  return (
    <div className={name}>
      <div className={`add`}>+</div>
      <p className={`${name}-text`}>{description}</p>
    </div>
  );
};
export default Button;
