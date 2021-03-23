import React from 'react'
import css from './HelpCard.module.css'
export const HelpCard = ({title, bg}) => {
    return <div style={{backgroundColor: bg,height:360,width:360}} className={css.helpCard}>
        <hr/>
        <h4 style={{marginLeft: 75,
                    marginRight: 50}}>{title}</h4>
    </div>
}