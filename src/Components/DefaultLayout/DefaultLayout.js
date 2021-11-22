import React from 'react'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HeaderforHome from '../HeaderforHome/HeaderforHome';

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