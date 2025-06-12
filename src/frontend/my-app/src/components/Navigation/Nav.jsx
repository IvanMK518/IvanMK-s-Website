import React, {useState} from "react";
import styles from "../styles/nav.module.css"
import Button from "../functions/Button";
import Ivan from '../../assets/Ivan.png';


const Nav = () => {

  return (
    
      <div className={styles.main}>
      <header className={styles.header}>

      <a className={styles.logo}>Ivan</a>

      <nav> 
        <ul className={styles.list}>
          <li><a href='/About'><Button text='About me'/></a></li>
          <li><a href = '/Portfolio'><Button text='Portfolio'/></a></li>
        </ul>
      </nav>

          <a href = '/Contact'><Button text='Contact'/></a>

      </header>  
      </div>
  )
}

export default Nav

