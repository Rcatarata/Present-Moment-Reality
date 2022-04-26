import React from 'react'
import {Link} from 'react-router-dom'

export default function Nav(){
    return (
        <div className='Nav'>
            <Link to='/login'><button>Login In</button></Link>
            <Link to='/signup'><button className='signUp' id='hello'>Sign Up</button></Link>
        </div>
    )
}