import React, { useState, useEffect } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login, checkAuthenticate } from '../../actions/auth';
import CSRFToken from '../../components/auth/CSRFToken';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
  const [csrfToken, setCsrfToken] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const { username, password } = formData;
  
  const isAuthenticated = useSelector(
    (state) => state.auth.isAuthenticated
  );

  const isAuthenticated_state = useSelector(
    (state) => state.auth.isAuthenticated_state
  );
  
  const dispatch = useDispatch();
  useEffect(() => {
    if (isAuthenticated === 'init') {
      fetchToken();
      dispatch(checkAuthenticate('csrfToken'));
    }
  }, [isAuthenticated_state, dispatch]);

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    dispatch(login(formData));
  };

  async function fetchToken() {
    let token = CSRFToken();
    setCsrfToken(token);
  }

  if (isAuthenticated === true)
    return <Navigate to='/admin' />;

  return (
    <div>
      <h1>Sign In</h1>
      <p>Sign into your Session Auth account</p>
      <form
        // value={formData}
        id='archiveEditorForm'
        onChange={(newValue) => setFormData({
          ...formData, 
          [newValue.target.name] : newValue.target.value
        })}
        onSubmit={(e) => onSubmit(e)}
      >
        <input type='hidden' name='csrfmiddlewaretoken' value={csrfToken} />
        <div>
          <label>Username: </label>
          <input
            type='text'
            placeholder='Username*'
            name='username'
            onChange={e => onChange(e)}
            value={username}
            required
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type='password'
            placeholder='Password*'
            name='password'
            onChange={e => onChange(e)}
            value={password}
            minLength='6'
            required
          />
        </div>
        <button type='submit'>Login</button>
      </form>
      <p>
        Not having an Account? <Link to='/register'>Sign Up</Link>
      </p>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
