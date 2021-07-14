import React from 'react'
import logo from '../img/logo-black.png'
// Firebase Authentication
import { auth, provider } from '../firebase'
// Zustand (State Management) store
import useStore from '../store'

function UserLogin({ setUserName }) {

  // Fetching the functions from the store
  const storeUserName = useStore(state => state.setUserName);
  const storeUserPic = useStore(state => state.setUserPic);

  // Function which enables user authentication and stores the data fetched in a Global State
  const signIn = () => {
    auth.signInWithPopup(provider)
      .then(result => {
        //Storing the values in the store
        setUserName(result.user.displayName)
        storeUserName(result.user.displayName)
        storeUserPic(result.user.photoURL)
      })
      .catch(error => alert(error.message))
  }
  return (
    <div className="user-login">
      <div className="login-container">
        <img src={logo} alt="Logo" />
        <h3>Sign In with Google</h3>
        <button onClick={signIn}>Sign In</button>
      </div>
    </div>
  )
}

export default UserLogin