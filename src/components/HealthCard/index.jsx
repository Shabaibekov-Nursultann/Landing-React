import React from 'react'
import css from './HealthCard.module.css'
export const HealthCard = ({detail}) => {
    return <>
        {
            detail.color
            ?<div style={{backgroundColor: detail.color}} className={css.healthCard}>
                <h4 className={css.name}>{detail.title}</h4>
            </div>
            :<div style={{backgroundImage: `url(${detail.img})`}} className={css.healthCard}>
               <h4 className={css.name}>{detail.title}</h4>
            </div>
}
    </>
}