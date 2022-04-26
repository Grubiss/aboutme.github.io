import React from 'react'
import github from "../images/github.svg"
import FontAwesomeIcon from "../images/telegram.svg"


function Footer() {
    return (
        <div className='Footer'>
            <div className='networks'>
                <ul>
                    <li><a href='https://t.me/Lagunov_DA' rel='noopener noreferrer' target='_blank'><i class="fa-brands fa-telegram"></i></a></li>
                    <li><a href='https://github.com/badurbanization' rel='noopener noreferrer' target='_blank'><i class="fa-brands fa-github"></i></a></li>                    
                </ul>
            </div>
        </div>
    )
}

export default Footer