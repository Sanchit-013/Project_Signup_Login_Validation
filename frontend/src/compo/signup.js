import React from 'react';
import { useNavigate } from "react-router-dom"

function Signup(){
    
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const phoneRegex = /^[0-9]{10}$/
    
    const[name, setName]=React.useState('');
    const[email, setEmail]=React.useState('');
    const[phone, setPhone]=React.useState('');
    const[pass, setPass]=React.useState('');
    const navigate = useNavigate()
    
    
        const addUser = async()=>{
            
            if( name.length === 0 ){
                alert("Please fill all the fields")
                return false
            }
            if(!phone.match(phoneRegex) || phone.length <10){
                alert("phone No. only Should be 10 digits NUMBER")
                return
            }
            if(!email.match(regex)){
                alert("Invalid format of Email ")
                return
            }
    
            if(pass.length < 8 || !pass.match(regex)){
                alert("password must contain atleast 8 characters and password must contain alphabet, special char & number")
                return 
            }
    
           
            else{
            console.warn(name, email, phone, pass);
            let result = await fetch('http://localhost:5000/',{
                method: 'post',
                body: JSON.stringify({name, email, phone, pass}),
                headers:{
                    "Content-Type":"application/json"
                }
            })
            result = await result.json()
            console.warn(result);
            navigate('/Home')
        }
            
            
           
        }
        
        const handle = (e)=>{
            e.preventDefault()
            }
      
    
    
        return(
            <>
            <div className='left'> 
                <img src={require('./img/Side2.png')} />
            </div>
            <div className='right'> 
                <div className='right-outside'>
                    <div>
                    <h1>SIGN-UP</h1>
                    <p className='log'>If you already have an account <a href='/login'>Log In</a> </p>
                    <p className='or'>OR</p>
                    <p className='para'>Enter all the details below for creating a new account</p>
                    <form onSubmit={handle}>
                        <table>
                        <tr>
                        <td><label for="name">Name</label></td>
                        <td>  <input type="text" placeholder='Enter Name' id='name' value={name} onChange={(e)=>{setName(e.target.value)}}/></td>
                        </tr>
                        <tr>
                        <td> <label for="email">E-mail</label></td>
                        <td> <input type="text" placeholder='Enter Email' id='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/></td>
                        </tr>
                        <tr>
                        <td> <label for="phone">Phone No.</label></td>
                        <td> <input type="text" placeholder='Enter Phone Number' id='phone' value={phone} onChange={(e)=>{setPhone(e.target.value)}}/></td>
                        </tr>
                        <tr>
                        <td> <label for="pass">Password</label></td>
                        <td> <input type="password" placeholder='Enter Password' id='pass' value={pass} onChange={(e)=>{setPass(e.target.value)}}/></td>
                        </tr>
                        
                        
                        </table>
                        <div className='signup'><button type='submit' onClick={addUser}>Sign Up</button></div>
                    </form>
                    </div>
                </div>
            </div>
            </>
        )
    }
    
    export default Signup;

