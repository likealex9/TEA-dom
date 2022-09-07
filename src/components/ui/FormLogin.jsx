import React, { useState } from 'react';

export default function FormLogin() {
  const [inputs, setInputs] = useState({ login: '', password: '' });
  const inputHandler = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(inputs),
    });
    if (response.ok) {
      console.log('Все верно');
    } else {
      console.log('Неправильный логин или пароль');
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="form-group mb-3">
        <label htmlFor="exampleInputEmail1">
          Логин
          <input onChange={inputHandler} name="login" type="text" className="form-control input" id="exampleInputEmail1" />
        </label>
      </div>
      <div className="form-group mb-3">
        <label htmlFor="exampleInputPassword1">
          Пароль
          <input onChange={inputHandler} name="password" type="password" className="form-control input" id="exampleInputPassword1" />
        </label>
      </div>
      <button type="submit" className="btn btn-outline-success mb-3">Авторизоваться</button>
    </form>
  );
}
