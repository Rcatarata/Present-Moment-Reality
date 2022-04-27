import React from 'react'

export default function Comments(props) {
    return (
        <div className='comment--container'>
            <p className='comment'>{props.entry}</p>
            <div className='inner--comment--container'>
                <h4 className='author'>{props.name}</h4>
                <h4 className='date'>{props.date}</h4>
            </div>
            <p className='comment'></p>
        </div>
    )
}