import React from 'react'
import './card-list.styles.css'
import { Card } from '../card/card.component'
import { Monster } from '../../interfaces'

type Props = {
    monsters: Monster[],
}

export const CardList = (props: Props) => {
    return (
        <div className='card-list'>
        {
            props.monsters.map(monster => 
            (<Card key={monster.id} monster={monster} />))
        }
        </div>    
    )
}