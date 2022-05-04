import React, {useState} from 'react'
import Axios from 'axios'

export default function Hero() {
    let today = new Date();
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let name = month[today.getMonth()];
    let todaysDate = `${name} ${today.getDate()}, ${today.getFullYear()}`
    const [entry, setEntry] = useState('')


    const createEntry = () =>{
        Axios.post('http://localhost:3001/createEntry', {
            user: todaysDate, 
            entry: entry
        }
        ).then((response) => {
            console.log('user Created')
        })
    }


    return (
        <div className='Hero'>
            <h3>Today is {todaysDate}</h3>
            <form action='/' className='hero--form'>
                <label htmlFor='entry' >Todays Entry</label>
                <br></br>
                <textarea className='hero--textbox' name='entry' id='entry'
                    onChange={(event)=> {setEntry(event.target.value)}}
                />
                <br></br>
                <button className='submit--button' onClick={createEntry}>Submit</button>
            </form>
            
        </div>
    )
}