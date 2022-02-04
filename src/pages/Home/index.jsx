import React from 'react';
import  {FiLink}  from "react-icons/fi";
import './index.css'

export default function Home() {
  return (
  <div className='container-home'>
    
    <div className='logo'>
      <img src="./logo.png" alt="logo" />
      <h1>Sujeito Link</h1>
      <span>Cole seu link aqui para encurtar 👇</span>
    </div>

    <div className='area-input'>
      <div>
        <FiLink size={24} color='#fff'/>
        <input
          type="text"
          placeholder="Cole o seu link aqui..."
          />
      </div>

      <button>Encurtar Link</button>
    </div> 
    
  </div>
  )
}
  
