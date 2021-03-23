import React from 'react'
import css from './Main.module.css'
import mainPic from '../../images/bg.png'
import { HelpCard } from '../HelpCard'
import { HealthCard } from '../HealthCard'
import pic from '../../images/j.png'
export const MainPage = () => {
        const data = [ 
            {
                bg: "#FFE2DE",
                title:"Weight Lifting"
            },
            {
                bg: "#C4E769",
                title:"Running  & Spinning"
            },
            {
                bg: "#62D0DF",
                title:"Pumping Iron"
            },
            {
                bg: "#0052C1",
                title:"Pumping Iron"
            },
        ]
        const detail = [ 
            {
                color: "#22356F",
                title:"Physical Health"
            },
            {
                color: "#0052C1",
                title:"Mental Health"
            },
            {
                color: null,
                title:"Nutrition",
                img:pic
            },
            {
                color: "#62D0DF",
                title:"Gymnastics"
            },
            {
               color: "#DEE1FF",
                title:"Crossfit"
            },
            {
                color: "#8F00FF",
                title:"Aerobics"
            }
        ]
    return <div className={css.mainPage}>
        <div className={css.container}>
            <nav>
                <span style={{color: '#62D0DF',
                                marginTop:27,
                                fontFamily:'Larsseit',
                                fontSize:24}}>Thrivetalk</span>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Blog</li>
                </ul>
                <button style={{background: '#62D0DF',
                                borderRadius: 50,
                                marginTop:27,
                                marginBottom:127,
                                }}>CONTACT US</button>
            </nav>
            <div className={css.mainBlock}>
                <div>
                    <p style={{color:'#62D0DF',
                              fontFamily:'Larsseit',
                              fontSize:20 }}>Thrivetalk</p>
                    <h1 style={{color: '#22356F',
                                marginBottom:19}}>HELPING YOU THRIVE IN ALL AREAS OF LIFE</h1>
                    <p style={{color: '#22356F'}}>Our highly talented therapists can help you with a range of
                    issues including relationships, sex, PTSD, depression, social
              anxiety, or even just caring for yourself more.</p>
                    <div>
                        <button style={{color: '#FFFFFF',background: '#F9B640',
                                         marginTop:73,marginBottom:86}}>WHO AM I</button>
                        <button style={{color: '#FFFFFF',background: '#F9B640',
                                         marginTop:73,marginLeft:38,marginBottom:86}}>WHAT DO I DO</button>
                    </div>
                </div>
                <div>
                    <img style={{
                                width: 807.71,
                                height: 544.93,
                                left: 1139.93,
                                top: -170.66,
                                borderRadius: 312.159
                                     }} src={mainPic} alt="" />
                                    </div>
                                </div>
                            </div>
        <div>
            <h5>WE CAN HELP YOU WITH</h5>
                <div style={{display:'flex',
                flexWrap:'wrap',
                flexDirection:'row',
                }}>
                    {
                        data.map((el) => {
                            return <HelpCard 
                                    bg={el.bg}
                                    title={el.title} />
                        })
                    }
                </div>
        </div>
    <div style={{width: 1440,
  margin: 0,
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap'}} >{
        detail.map((el,id) => {
            return <HealthCard detail={el} key={id}/>
        })
        }
    </div>
    </div>
}