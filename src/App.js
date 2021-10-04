import React from 'react'
import InputId from './components/InputId'
import InputRefs from './components/InputRefs'

function App(props) {
  return (
    <>
      <InputId />
      <InputId />
      <InputRefs />
      <InputRefs />
    </>
    // 為什麼要使用ref而不用id
    // 1.元件生命週期問題
    // refs可以確保這個東西會出現在網頁上，id不一定
    // 2.元件的可重複利用性
    // 使用id的話，如果重複使用兩次同樣的元件，只有第一個跑得出來，第二個會當作沒看到
  )
}

export default App