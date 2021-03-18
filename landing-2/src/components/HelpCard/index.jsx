import React from 'react'
import css from './HelpCard.module.css'

export const HelpCard = ({title, bg}) => {
    return <div style={{backgroundColor: bg}} className={css.helpCard}>
        <hr/>
        <h3>{title}</h3>
    </div>
}