
import React, { useState } from 'react';
import git from '../assests/github.png';
// import '../styles/header.css';
import '../../src/App.css';
export default function Head({handleStyle}){

  return(
    <div className='header'>
      <div className='github-repo'>
        <a href='https://github.com/adnan179/todo-list'>
          <img src={git} alt='github-repo'/>
        </a>
      </div>
      <div className='theme-icons'>
        <div className='theme1-icon'
          onClick={() =>{
            handleStyle(true);
          }}
        ></div>
        <div className='theme2-icon'
          onClick={() =>{
            handleStyle(false);
          }}
        ></div>
      </div>
    </div>

  )
}
