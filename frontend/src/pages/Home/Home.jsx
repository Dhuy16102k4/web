import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import PhoneDisplay from '../../components/PhoneDisplay/PhoneDisplay'

const Home = () => {

    const [category, setCategory] = useState("All")

  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <PhoneDisplay category={category}/>
    </div>
  )
}

export default Home

