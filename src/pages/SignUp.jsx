import { useState } from 'react';
import { signUp } from '../features/userSlice';
import { useDispatch } from 'react-redux';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

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
      setError(null);
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <>
      <h1 className="page-title">Sign Up</h1>

      <form className="form form--sm" onSubmit={submit}>
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

        {error && <div className="form__error">{error}</div>}

        <div className="form__actions">
          <button className="btn btn--primary btn--lg" type="submit">
            Sign Up
          </button>
        </div>
      </form>
    </>
  );
};

export { SignUp };
