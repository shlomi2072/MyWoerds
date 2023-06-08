import React from 'react';
import style from './style.module.css';

const Logo = (props) => {
  return (
    <div className={style.logoContainer}>
      <h1 className={style.logoText}>My<span className={style.logoAccent}>Words</span></h1>
    </div>
  );
};

export default Logo;

