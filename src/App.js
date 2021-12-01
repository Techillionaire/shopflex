// import { Routes, Route } from "react-router-dom";
import { useState } from 'react'
import Home from "./components/home/Home";
import Chat from "./components/chat/Chat";
import Login from "./components/login/Login";

const App = () => {




  const [user, setUser] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [hasAccount, setHasAccount] = useState("")


  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  }

  const handleSignUp = () => {
    clearErrors();
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
  }

  const handleSignIn = () => {

    let storedEmail = localStorage.getItem("email");
    let storedPassword = localStorage.getItem("password");

    if (( storedEmail === email ) && ( storedPassword === password )) 
    {
      setUser(email);
    }

    if (storedEmail !== email) {
      setEmailError("Email does not match");
    }

    if (storedPassword !== password) {
      setPasswordError("Password does not match");
    }
  }

  const handleSignOut = () => {
    localStorage.clear();
    setUser("")
  }
  

    return (
      <div className="App">
        {user ? (
          <Home handleSignOut={handleSignOut} />
        ) : (
          <Login 
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleSignOut={handleSignOut}
            handleSignIn={handleSignIn}
            handleSignUp={handleSignUp}
            hasAccount={hasAccount}
            setHasAccount={setHasAccount}
            emailError={emailError}
            passwordError={passwordError}
            />
        )}
        {/* <Home /> */}
        {/* <Chat /> */}
      </div>
    )
}

export default App
