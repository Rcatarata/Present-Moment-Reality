import React from 'react'

export default function Hero() {
    let today = new Date();
    console.log(today.getDate());
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let name = month[today.getMonth()];


    return (
        <div className='Hero'>
            <h3>Today is {`${name} ${today.getDate()}, ${today.getFullYear()}`}</h3>
            <form className='hero--form'>
                <label htmlFor='entry' >Todays Entry</label>
                <br></br>
                <textarea className='hero--textbox' name='entry' id='entry'/>
                <br></br>
                <button className='submit--button'>Submit</button>
            </form>
        </div>
    )
}