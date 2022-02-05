import React from 'react';
import { FiArrowLeft, FiLink, FiTrash } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import './index.css'

export default function Links() {
  return (
    <div className='link-container'>

      <div className='links-header'>
        <Link to="/">
          <FiArrowLeft size={38} color="#FFF"/>
        </Link>
        <h1>Meus Links</h1>
      </div>

      <div className='links-item'>
        <button className='link'>
          <FiLink size={19} color="#FFF"/>
          https://keylanessilva-portfolio
        </button>
        <button className='link-delete'>
          <FiTrash size={24} color="#FF5454"/>
        </button>
      </div>

      <div className='links-item'>
        <button className='link'>
          <FiLink size={19} color="#FFF"/>
          https://keylanessilva-postfolio
        </button>
        <button className='link-delete'>
          <FiTrash size={24} color="#FF5454"/>
        </button>
      </div>
      
    </div>
  );
}
