import React from 'react'
import styles from '../styles/about.module.css'
import { LuInstagram } from "react-icons/lu";
import { CiLinkedin } from "react-icons/ci";

function About() {
  return (
    <div className={styles.wrapper}>
    <image></image>
      <h2>Academic Email:</h2>
        <p>iemarti@emory.edu</p>
      <h2>Personal Email:</h2>
        <p>martinezkayivan@gmail.com</p>
    <LuInstagram />
    <CiLinkedin />
    </div>
  )
}

export default About
