import React, { useState } from 'react';
// import { Redirect } from 'react-router-dom';

const SignIn = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  const submit = async (e) => {
    e.preventDefault();

    // const response = await fetch('http://localhost:8000/api/login', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   credentials: 'include',
    //   body: JSON.stringify({
    //     email,
    //     password,
    //   }),
    // });

    // const content = await response.json();

    // setRedirect(true);
    console.log(email, password);
  };

  // if (redirect) {
  //   return <Redirect to="/" />;
  // }

  return (
    <form className="form form--sm" onSubmit={submit}>
      <h1 className="form__title">Sign In</h1>

      <div className="form__fields">
        <div className="form__field field">
          <label className="field__label">Email</label>
          <input
            type="email"
            className="field-input"
            placeholder="Email address"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form__field field">
          <label className="field__label">Password</label>
          <input
            type="password"
            className="field-input"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      <div className="form__actions">
        <button className="btn btn--primary btn--lg" type="submit">
          Sign In
        </button>
      </div>
    </form>
  );
};

export { SignIn };
