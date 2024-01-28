import React from 'react'

const Lessons = () => {
    function formatName(userName){
        return  userName.toUpperCase()
    }
    function  getGreeting(username){
        if(username){
            return <h2>Hello, {formatName(username)}!</h2>
        }else{
            return <h2>Hello Stranger !</h2>
        }
    }
    const name = "amos"
    const message= "good to see you"
    const userImgage ="/src/assets/react.svg"
    const image = <img src={userImgage} alt='logo'></img>
    const element = (
        <div>
            <h1>Hello {formatName(name)}</h1>
            <p>{formatName(message)}</p>
            {image}
        </div>
    )
    
  return  element;
}

export default Lessons
