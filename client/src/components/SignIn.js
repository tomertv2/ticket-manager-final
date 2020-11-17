import React from 'react';

function SignIn(props) {
  const signInFunc = () => {
    const provider = new props.firebase.auth.GoogleAuthProvider();
    props.auth.signInWithRedirect(provider);
  };
  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={signInFunc}>Sign In</button>
    </div>
  );
}

export default SignIn;
