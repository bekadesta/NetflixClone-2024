import React from 'react'
import "./Header.css"
import NetflixLogo from "../../Pictures/Netflix_Logo_CMYK.png"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Header() {
  return (
    <div className='HeaderHolder'>
        <div className='HeaderContainer'>
             <div className='LeftHeader'>
                <ul>
                <li><img src={NetflixLogo} width='100' /></li>
                <li>Home</li>
                <li>TVShows</li>
                <li>Movies</li>
                <li>Latest</li>
                <li>Browse By Languages</li>
                </ul>
            </div>            
            <div className='RightHeader'>
              <ul>
                <li><SearchIcon /></li>
                <li><NotificationsIcon /></li>
                <li><AccountBoxIcon /></li>
                <li><ArrowDropDownIcon /></li>

              </ul>
            </div>
        </div>            

    </div>
  )
}

export default Header
