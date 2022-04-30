import React, {useState} from 'react'
import '../Styles/Signup.css'
import {Link} from 'react-router-dom'
import Axios from 'axios'


export default function Signup(){
    const [firstName, setFirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [email, setEmail] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')
    
    
    const createUser = () =>{
        Axios.post('http://localhost:3001/createUser', {
            firstName: firstName, 
            lastName: lastName, 
            email: email,
            password1: password1, 
            password2: password2,
        }
        ).then((response) => {
            console.log('user Created')
        })
    }

    return (
        <div className="container">
            <div className="background--filter">
                <div className='signup--form--container'>
                    <form action="/">  
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id='firstName' name='firstName' onChange={(event)=> {setFirstName(event.target.value)}}/>
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id='lastName' onChange={(event)=> {setlastName(event.target.value)}}/>
                        <br />
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id='email' onChange={(event)=> {setEmail(event.target.value)}}/>
                        <br />
                        <label htmlFor="password1">Password</label>
                        <input type="password" id="password1" onChange={(event)=> {setPassword1(event.target.value)}}/>
                        <label htmlFor="password2">Password</label>
                        <input type="password" id="password2" onChange={(event)=> {setPassword2(event.target.value)}}/> 
                        <button onClick={createUser}>Submit</button>           
                    </form>
                </div>
                <Link to='/'><button>home</button></Link>
             </div>
        </div>
        
    )
} 