import React from 'react'
import './header.css'

export default ({black}) => {

     return (
        <header className={black ? 'black' : ''} >
              <div className="header--logo"> 
                <a href="/"> 
                      <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="NetFlix" />
                
                 </a>
              
                </div>
                <div className="header--user"> <a href="/"> 
                       <img src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-vector-add-user-icon-png-image_3773557.jpg"/>
                  </a> </div>
             
        </header>

     )
}