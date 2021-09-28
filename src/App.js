import React from 'react'
import Logo from './logo.svg'
import { debug, devUrl, prodUrl } from './config'

const imgUrl = debug ? devUrl : prodUrl

function App() {
  return (
    <>
      {/* 放在public資料夾，要用http://XXXX/ */}
      <img src={`${imgUrl}/images/sky.jpeg`} alt="" />
      {/* --------------------- */}
      {/* 放在src資料夾，要用import(第2行) */}
      <img src={Logo} alt="" />
    </>
  )
}

export default App