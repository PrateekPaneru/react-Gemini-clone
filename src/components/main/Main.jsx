import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'


const Main = () => {
    return(
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img className='user' src={assets.user_icon} alt="user Image" />
        </div>
        <div className="main-container">
            <div className="greet">
                <p><span>Hello,Dev</span></p>
                <p>How Can I help You Today</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest Beautiful Places to see on an upcoming Road trip</p>
                    <img src={assets.compass_icon} alt="" />
                </div>

                <div className="card">
                    <p>Briefly summarize thid concept: Urban Planning</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>

                <div className="card">
                    <p>BrainStrom team bonding activities for our work retreat</p>
                    <img src={assets.message_icon} alt="" />
                </div>

                <div className="card">
                    <p>Improve the readablility of the following code</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
            <div className="main-bottom">
                <div className="search-box">
                    <input type="text" placeholder='Enter A Prompt Here' />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img src={assets.send_icon} alt="" />
                    </div>
            </div>
            <p className="bottom-info">
               Gemini may display inaccurate info, including about people , so double check its response  .Your privacy and Gemini apps 
               
            </p>
            
            
        </div>
        </div>
    </div>
  )
}


export default Main