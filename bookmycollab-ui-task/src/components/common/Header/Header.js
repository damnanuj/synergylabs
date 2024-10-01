import React from 'react'
import PurpleButton from '../Button/PurpleButton'

const Header = () => {
  return (
    <header className='header_container'>
        <h2>BookMyCollab</h2>
        <div className='nav_list_items'>
            <a href=''>What we Do</a>
            <a href=''>How it works</a>
            <a href=''>Join us as Brand</a>
            <a href=''>Join us as creator</a>
        </div>
        <PurpleButton text={"Login"}/>
    </header>
  )
}

export default Header
