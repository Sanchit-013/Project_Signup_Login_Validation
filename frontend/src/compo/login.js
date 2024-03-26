import React from 'react';
import { useNavigate } from 'react-router-dom';
function Login(){

    const[email, setEmail]= React.useState('')
    const[pass, setPass]= React.useState('')
    const navigate = useNavigate()

    const Logs = async ()=>{

        if(email.length === 0 || pass.length === 0){
            alert("email cannot be blank")
            return
        }
        else if(pass.length<8){
            alert("password must contain atleast 8 characters")
            return 
        }
        
            
            console.warn("email, pass", email, pass);
            let result = await fetch('http://localhost:5000/login',{
                method:'post',
                body: JSON.stringify({email, pass}),
                headers:{
                    "Content-Type":"application/json"
                }
            })
            result = await result.json();
            console.warn(result);
            if(result.name){
                navigate("/Home")
            }
            else{
                alert("Invalid Password OR Email")
            }
            
        
        
    }

    const handle=(e)=>{
        e.preventDefault();
    }

    return(
        <>
        <div className='left1'> 
            <img src={require('./img/bg2.png')} />
        </div>
        <div className='right1'> 
            <div className='right-outside1'>
                <div>
                <h1>LOG-IN</h1>
                <p className='log1'>If you don't have an account <a href='/'>Sign Up</a> </p>
                <p className='or'>OR</p>
                <p className='rend'>Enter the details below for Login to your account</p>
                <form onSubmit={handle}>
                    <table>
                    
                    <tr>
                    <td> <label for="email" className='mail'>E-mail</label></td>
                    <td> <input type="email" placeholder='Enter Email' id='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} /></td>
                    </tr>
                    
                    <tr>
                    <td> <label for="pass">Password</label></td>
                    <td> <input type="password" placeholder='Enter Password' id='pass'value={pass} onChange={(e)=>{setPass(e.target.value)}} /></td>
                    </tr>
                    
                    
                    </table>
                    <div className='signup1'><button onClick={Logs}>Login</button></div>
                </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login;