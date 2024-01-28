/* eslint-disable no-unused-vars */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useTransition, animated } from '@react-spring/web'

const Navigation = () => {
    const [showMenu,setShowMenu]=useState(false)
    // const [closeMenu,setCloseMenu]=useState(true);
    //className='fixed bg-white w-4/5 h-full z-50 shadow top-0 left-0 '
    //className="bg-black-t-20 fixed top-0 left-0 w-full h-full z-50"
    const [transitions, api] = useTransition(showMenu, () => ({
      from: { position:'absolute',  opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
    }))
  
  return (
    <nav>
        <span className="text-xl">
       <FontAwesomeIcon icon={faBars}
       onClick={() => setShowMenu(!showMenu)}
       />
       </span>
       {transitions((style, item) => (
    <animated.div style={style}
        className="bg-black-t-20 fixed top-0 left-0 w-full h-full z-50"
>{item}</animated.div>
  ))}
    </nav>
  )
}

export default Navigation