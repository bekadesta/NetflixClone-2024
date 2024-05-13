import React from 'react'
import Header from '../../componentss/Header/Header'
import Footer from '../../componentss/Footer/Footer'
import Banner from '../../componentss/Banner/Banner'
import RowList from '../../componentss/Rows/RowList/RowList'

function HomePage() {
  return (
    <div>
      <Header/>
      <Banner />
      <RowList />
      <Footer/>
    </div>
  )
}

export default HomePage

