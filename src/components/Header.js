import React from 'react'
import {Link} from 'react-router-dom'
import home from '../images/house-solid.svg';
import about from '../images/about.svg'

const Header = () => {

    return (
        <div className="header">
            <div className='icon'>
                <Link to={"/"}> <img src={home} alt="home"/> </Link>
            </div>
            <div className='icon' style={{marginRight: "15px"}}>
                <Link to={"/about"}> <img src={about} alt="about"/> </Link>
            </div>
        </div>
    )
}


export default Header