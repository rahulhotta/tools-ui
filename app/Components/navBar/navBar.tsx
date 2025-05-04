import React from 'react'
import './navBar.scss';
import CommonCard from '@/app/Utils/CommonElements/Card/CommonCard';
import Image from 'next/image';
import LittleToolsLogo from '../../../public/Images/little_tools_logo.png';
import Link from 'next/link';
function NavBar() {
  return (
    <div className='nav_bar_container'>
      <CommonCard>
        <Link href={"/"} className='nav_bar' prefetch={true}>
          <h4>
            Little Tools
          </h4>
        </Link>
      </CommonCard>
    </div>
  )
}

export default NavBar