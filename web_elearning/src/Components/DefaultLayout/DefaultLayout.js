import React from 'react'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function DefaultLayout(props) {
  return (
    <div>
      <Header/>
      {props.children}
      <Footer/>
    </div>
  )
}

export default DefaultLayout