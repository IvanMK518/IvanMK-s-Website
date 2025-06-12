import React, {useState} from "react";
import styles from "../styles/nav.module.css"
import Button from "../functions/Button";


const Nav = () => {

  return (
    
    
      <div className={styles.nav}>
     
      
      <header className={styles.header}>
      <nav className={styles.nav}> 

          <a href='/About'><Button text='About me'/></a>
         
          <a href = '/Portfolio'><Button text='Portfolio'/></a>

          <a href = '/Filler'><Button text='Filler'/></a>



      </nav>
      </header>  
      </div>
  )
}

export default Nav

