import React, {  useState } from 'react'
import { useNavigate } from 'react-router-dom';
import LoginServices from '../services/LoginServices';

const Login = () => {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();
    const SubmitButton = (e) => {
        e.preventDefault();
        LoginServices.login(username,password).then(res=>{
            console.log(res.data);
            localStorage.setItem("user",res.data);
            if(username===res.data[0].username && password===res.data[0].password){
                navigate("/dashboard");

            }
            else{
                navigate("/login");
            }
        })
    }
    return (
        <div className='container'>
            <div className='card'>
                <div style={{ marginTop: 20 }}>
                    <h1>Login</h1>
                    <br />
                </div>
                <div >
                    <form>
                        <div className='mb-3'>
                            <label >Username</label><br />
                            <input type="text" name="username" onChange={(e) => setUserName(e.target.value)} />

                        </div>
                        <div className='mb-3'>
                            <label >Password</label><br />
                            <input type="password" name="userpassword" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className='mb-3'>
                            <button className='btn btn-primary' onClick={SubmitButton}>Submit</button>

                        </div>
                    </form>

                </div>

            </div>
        </div>
    )
}

export default Login
