import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import '../styles/home.module.css'

const Home = () => {
  return (
    <div>
      <Parallax pages={4}>
        <ParallaxLayer offset={0} speed = {1} factor={2} />
        <ParallaxLayer offset={0} speed = {1} factor={2} />
        <ParallaxLayer offset={0} speed = {1} factor={2} />
      </Parallax>
    </div>
  )
}

export default Home
