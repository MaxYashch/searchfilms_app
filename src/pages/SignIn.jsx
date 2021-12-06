import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signIn } from '../features/userSlice';
// import { Redirect } from 'react-router-dom';

const SignIn = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [warning, setWarning] = useState(null);
  const [redirect, setRedirect] = useState(false);

  const dispatch = useDispatch();

  const submit = async (e) => {
    e.preventDefault();

    try {
      dispatch(
        signIn({
          email,
          password,
        })
      );
      setWarning(null);
    } catch (e) {
      setWarning(e.message);
    }

    // setRedirect(true);
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

      {warning && <div className="form__error">{warning}</div>}

      <div className="form__actions">
        <button className="btn btn--primary btn--lg" type="submit">
          Sign In
        </button>
      </div>
    </form>
  );
};

export { SignIn };
