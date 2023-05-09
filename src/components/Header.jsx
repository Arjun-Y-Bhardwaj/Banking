import React from 'react'
import me from '../me.png'

export default function Header() {
    function handleMeClick() {

    }
    return (
        <div className='header-grid'>
            <div>
                Welcome <span>ARJUN</span>
            </div>
            <div> <a href="https://www.linkedin.com/in/arjun-y-bhardwaj/"><img src={me} alt="" className='meimg' /></a> </div>

        </div>
    )
}
