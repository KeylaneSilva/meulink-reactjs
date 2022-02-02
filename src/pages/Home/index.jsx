import React from 'react';
import  {FiLink}  from "react-icons/fi";
export default function Home() {
  return (
  <div className='container-home'>

    <div className='logo'>
      <img src="./logo.png" alt="logo" />
      <h1>Sujeito Link</h1>
      <span>Cole seu link aqui 👇</span>
    </div>

    <div className='area-input'>
      <div>
        <FiLink size={24} color='#fff'/>
        <input
          type="text"
          placeholder='link...'
          />
      </div>

      <button>Encurtar Link</button>
    </div> 
    
  </div>
  )
}
  
