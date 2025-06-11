import React, {useState} from "react";
import styles from "./styles/nav.module.css"

const Nav = () => {

  return (
    
    
      <div className={styles.nav}>
     
      
      <header className={styles.header}>
      <nav className={styles.nav}> 

          <a href='/About'><Button2 text='About me'/></a>

          <a href = '/Portfolio'><Button2 text='Portfolio'/></a>

      </nav>
      </header>  
      </div>
  )
}

export default Nav

