import React from 'react'
import Hero from '../Components/Hero/Hero'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollections/NewCollections'
import Newsletter from '../Components/NewsLetter/NewsLetter'
import Popuplar from '../Components/Popular/Popuplar'


function Shop() {
  return (
    <div>
        <Hero/>
        <Popuplar/>
        <Offers/>
        <NewCollections/>
        <Newsletter/>
    </div>
  )
}

export default Shop