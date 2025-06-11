import React from 'react'

const Home = () => {
  return (
    <div>
      <Parrallax pages={4}>
        <ParrallaxLayer offset={0} speed = {1} factpr={2} style={}/>
        <ParrallaxLayer offset={0} speed = {1} factpr={2} style={}/>
        <ParrallaxLayer offset={0} speed = {1} factpr={2} style={}/>
      </Parrallax>
    </div>
  )
}

export default Home
