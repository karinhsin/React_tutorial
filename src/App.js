import React from 'react'

function App() {
  const count = 0
  const foo = true

  return (
    <>
      {/* https://reactjs.org/docs/conditional-rendering.html */}
      {/* if... */}
      {/* &&前面的要轉為布林值(一般情況下)(才不會跑出一個0) */}
      {/* !!是強制轉成布林值 */}
      {/* 注意：只能在jsx語法裡寫 */}
      {count > 0 && `目前總數為${count}`}
      <hr />
      {/* if...else */}
      {foo ? 1 : 2}
    </>
  )
}

export default App