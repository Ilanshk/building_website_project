import React,{useState} from "react";
export const Login = (props) => {
    const [username,setUsername] = useState('');
    const [password,setPassword]  =useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(username);

    }

    return (
        <div className="auth-form-container">
            <h2>Login page</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlform = "username">username</label>
                <input value = {username} onChange={(e) =>setUsername(e.target.value)} type="username" placeholder= "Enter your username here" id="username" name="username" /> 
                <label htmlform = "password">password</label>
                <input value = {password} onChange={(e) =>setPassword(e.target.value)} type = "password"  placeholder= "Enter your password here" id="password" name="password" /> 
                <button type = "submit">Log In</button>
            </form>
            <button className = "link-btn" onClick={() => props.onFormSwitch('register')}> Don't have an account? Register here.</button>
        </div>
    );
}