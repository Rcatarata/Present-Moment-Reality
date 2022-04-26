import '../Styles/Login.css';
import {Link} from 'react-router-dom'

export default function Login(){
    return (
        <div>
            <div className='login--container'>   
                <div className='inner--container'>
                    <form className='form--container'>
                        <label htmlFor='username'>Username</label>
                        <input type='text' name='username' id='username'></input>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' name='password'></input>
                        <button>Login</button>
                    </form>
                    <Link to='/'><button>home</button></Link>
                </div>
             </div>
        </div>
        
    )
} 