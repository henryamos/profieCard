import React,{useState} from 'react'

const ToggleButton = () => {
    const[toggleOn,setToggleOn]=useState(true);
    const handleClick=(e)=>{
        e.preventDefault()
        // alert("Link Clicked")
        setToggleOn(!toggleOn); // Toggle the state between true and false
    }
  return (
    <div className='m-4'>
      <button className='p-2 bg-blue-600 rounded-sm text-white' onClick={handleClick}>{toggleOn?"Turn On" : "Turn Off"}</button>
        {/* <a href="#href" onClick={handleClick}>Page</a> */}
    </div>
  )
}

export default ToggleButton
