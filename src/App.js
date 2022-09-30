import React from 'react'
import Home from './Components/Home'
import Footer from './Components/Footer'
import { GlobalStyle } from './Global/GlobalStyle'

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Home />
      <Footer />
    </>
  )
}
