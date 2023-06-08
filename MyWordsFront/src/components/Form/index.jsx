import React from 'react';
import style from './style.module.css'



function MyForm(props) {
  return (
    <form className={style.myForm} onSubmit={props.handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" onChange={props.handleInputChange}/>
      </div>
      {
        props.email &&
        <div className={style.formGroup}>
          <label htmlFor="email">email:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" onChange={props.handleInputChange}/>
        </div>
      }
      {
        props.phone &&
        <div className={style.formGroup}>
          <label htmlFor="number">phone:</label>
          <input type="text" id="number" name="number" placeholder="Enter your phone" onChange={props.handleInputChange}/>
        </div>
      }
      <div className={style.formGroup}>
        <label htmlFor="password">password:</label>
        <input type="password" id="password" name="password" placeholder="Enter a password" onChange={props.handleInputChange}/>
      </div>
      <button type="submit">{props.textButton}</button>
    </form>
  );
};

export default MyForm;

