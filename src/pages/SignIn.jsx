import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../features/userSlice';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

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
      setError(null);
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <>
      <h1 className="page-title">Sign In</h1>

      <form className="form form--sm" onSubmit={submit}>
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

        {error && <div className="form__error">{error}</div>}

        <div className="form__actions">
          <button className="btn btn--primary btn--lg" type="submit">
            Sign In
          </button>
        </div>
      </form>
    </>
  );
};

export { SignIn };
