import React, { useState } from 'react';
import { signUp } from '../features/userSlice';
import { useDispatch } from 'react-redux';

// import { Redirect } from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [warning, setWarning] = useState(null);
  const [redirect, setRedirect] = useState(false);
  //const [signedUp, setsignedUp] = useState(false);

  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();

    try {
      dispatch(
        signUp({
          name,
          email,
          password,
        })
      );
      setWarning(null);
    } catch (e) {
      setWarning(e.message);
    }

    // add to localStr
    // setRedirect(true);
  };

  // if (redirect) {
  //   return <Redirect to="/login" />;
  // }

  return (
    <form className="form form--sm" onSubmit={submit}>
      <h1 className="h3 mb-3 fw-normal">Sign Up</h1>

      <div className="form__fields">
        <div className="form__field field">
          <label className="field__label">Name</label>
          <input
            type="text"
            className="field-input"
            placeholder="Name"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>

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
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      {warning && <div className="form__error">{warning}</div>}

      <div className="form__actions">
        <button className="btn btn--primary btn--lg" type="submit">
          Sign Up
        </button>
      </div>
    </form>
  );
};

export { SignUp };
