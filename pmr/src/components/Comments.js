import React from 'react'

export default function Comments(props) {
    return (
        <div className='comment--container'>
            <p className='comment'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit vero iusto velit nostrum dolore, veniam quibusdam magnam commodi. Eaque neque autem accusamus tenetur dolore voluptatibus maxime fugiat iste odit optio vitae, doloremque recusandae ipsa. Pariatur non aut necessitatibus magni quis.</p>
            <div className='inner--comment--container'>
                <h4 className='author'>author</h4>
                <h4 className='date'>date</h4>
            </div>
            <p className='comment'></p>
        </div>
    )
}