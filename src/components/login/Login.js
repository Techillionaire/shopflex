import "./login.css";

const Login = ({ email, setEmail, password, setPassword, handleSignIn, handleSignUp, hasAccount, setHasAccount, passwordError, emailError }) => {
    
    return (
        <section>
            <div className="split-screen">
                <div className="left">
                    <section className="copy">
                        <h1>shopFlex</h1>
                        <p>Your cravings, our saisfaction...</p>
                    </section>
                </div>
                <div className="right">
                        { hasAccount ? (
                        <form>
                            <section className="copy">
                                <h2>Login</h2>
                                <div className="login-container">
                                    <p>Don't have an account? <a href="#">
                                        <strong onClick={() => setHasAccount(!hasAccount)}>Sign Up</strong></a></p>
                                </div>
                            </section>
                            <div className="input-container email">
                                <label for="email">Email</label>
                                <input 
                                    id="email" 
                                    name="email" 
                                    type="email" 
                                    placeholder="Enter your email" 
                                    autoFocus 
                                    required  
                                    value={email} 
                                    onChange={(e)=> setEmail(e.target.value)} 
                                />
                                <p className="errorMsg">{emailError}</p>
                            </div>
                            <div className="input-container password">
                                <label for="password">Password</label>
                                <input 
                                    id="password" 
                                    name="password" 
                                    type="password" 
                                    placeholder="Must be atleast 6 characters" 
                                    required 
                                    value={password}
                                    onChange={(e)=> setPassword(e.target.value)}
                                />
                                <p className="errorMsg">{passwordError}</p>
                            </div>
                            <button className="login-btn" type="submit" onClick={handleSignIn}>Login</button>
                            <section className="copy legal">
                                <p><span className="small">By continuing, you agree to accept our <br /> <a href="#">Privacy Policy</a> &amp; <a href="#">Terms of Services</a></span></p>
                            </section>
                            </form>

                        ):(
                            <form>
                                <section className="copy">
                                    <h2>Sign Up</h2>
                                    <div className="login-container">
                                        <p>Already have an account? <a href="#">
                                            <strong onClick={() => setHasAccount(!hasAccount)}>Log In</strong></a></p>
                                    </div>
                                </section>

                                <div className="input-container email">
                                    <label for="email">Email</label>
                                    <input 
                                        id="email" 
                                        name="email" 
                                        type="email" 
                                        placeholder="Enter your email" 
                                        autoFocus 
                                        required  
                                        value={email} 
                                        onChange={(e)=> setEmail(e.target.value)} 
                                    />
                                    <p className="errorMsg">{emailError}</p>
                                </div>
                                
                                <div className="input-container password">
                                    <label for="password">Password</label>
                                    <input 
                                        id="password" 
                                        name="password" 
                                        type="password" 
                                        placeholder="Must be atleast 6 characters" 
                                        required 
                                        value={password}
                                        onChange={(e)=> setPassword(e.target.value)}
                                    />
                                    <p className="errorMsg">{passwordError}</p>
                                </div>
                    
                                <button className="signup-btn" type="submit" onClick={handleSignUp}>Sign Up</button>
                                <section className="copy legal">
                                    <p><span className="small">By continuing, you agree to accept our <br /> <a href="#">Privacy Policy</a> &amp; <a href="#">Terms of Services</a></span></p>
                                </section>
                            </form>
                            )
                        }
                </div>
            </div>
        </section>
                    
                    
        
    )
}

export default Login
