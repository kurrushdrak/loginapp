import React, { useState } from 'react'
import LoginServices from '../services/LoginServices';

const Register = () => {
    const[id,setId]=useState();
    const[name,setName]=useState();
    const[type,setType]=useState();
    
    const RegisterForm=(e)=>{
        alert("----registering---->")
        e.preventDefault();
        let user={
            id:id,
            name:name,
            type:type,
           

        }
        LoginServices.create(user).then(res=>{
            console.log(res.data)
        })


    }
    return (
        <div className='container'>
            <div className="card">
            <div  style={{marginTop:20}}>
                <h1  style={{marginTop:10}}>Registation</h1>
                <form>
                    <div className='mb-3' style={{marginTop:40}}>
                        <label className='form-label' > Id</label><br/>
                        <input type="text" name="username" onChange={(e)=>setId(e.target.value)}/>

                    </div>
                    <div className='mb-3'>
                        <label className='form-label'> Name</label><br/>
                        <input type="text" name="username"  onChange={(e)=>setName(e.target.value)} />

                    </div>

                    <div className='mb-3'>
                        <label className='form-label'>Type value</label><br/>
                        <input type="text" name="userpassword"  onChange={(e)=>setType(e.target.value)} />
                    </div>
                   

                    <div className='mb-3'>
                        <button className='btn btn-primary' style={{ marginTop:5}} onClick={RegisterForm}>Register</button>

                    </div>
                </form>
            </div>
        </div>
        </div>
    )
}

export default Register
