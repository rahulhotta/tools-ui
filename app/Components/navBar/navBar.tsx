import React from 'react'
import './navBar.scss';
import CommonCard from '@/app/Utils/CommonElements/Card/Card';
function NavBar() {
  return (
    <div className='nav_bar_container'>
      <CommonCard>
        <div className='nav_bar'>
          littleTools
        </div>
      </CommonCard>
    </div>
  )
}

export default NavBar