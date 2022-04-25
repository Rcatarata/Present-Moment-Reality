import React from 'react'

export default function Hero() {
    return (
        <div className='Hero'>
            <h1 className='title--header'>Present Moment Reality</h1>
            <form className='hero--form'>
                <label htmlFor='entry' >Todays Entry</label>
                <br></br>
                <textarea className='hero--textbox' name='entry' id='entry'/>
                <br></br>
                <button>Submit</button>
            </form>
        </div>
    )
}