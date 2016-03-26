import React from 'react';

const LoginForm = ({ user, userRejectedAt, onSubmit }) => {
  let emailField;
  let passwordField;

  const onLoginFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(emailField.value, passwordField.value);
  };

  return (
    <form onSubmit={onLoginFormSubmit}>
      <strong>last rejection at:</strong>
      <span>{ userRejectedAt }</span><br />

      <strong>user:</strong>
      <span>{ user }</span><br />

      <input
        type="text"
        placeholder="your email address"
        ref={node => { emailField = node; }}
      />

      <input
        type="password"
        placeholder="your password"
        ref={node => { passwordField = node; }}
      />

      <input type={'submit'} />
    </form>
  );
};

LoginForm.propTypes = {
  user: React.PropTypes.shape({
    email: React.PropTypes.string,
    password: React.PropTypes.string
  }),
  userRejectedAt: React.PropTypes.string,
  onSubmit: React.PropTypes.func.isRequired
};

export default LoginForm;
