import React, { useState } from 'react'
import Counter2 from './components/Counter2'

//用useEffect來解決state的初始值來自props的問題
//狀態一定要往上提，每個子元件上面的值全部都是來自於父母，元件不要有自己的狀態，除非子元件狀態是做一些很簡單的事 ex.跳出對話框跟關起來或動畫切換，若資料是來自於資料庫，會改變的資料或關係重大的話就不要
function App() {
  const [start, setStart] = useState(0)

  return (
    <>
      <Counter2 start={start} />
      <button
        onClick={() => {
          setStart(111)
        }}
      >
        start to 111
      </button>
      <button
        onClick={() => {
          setStart(999)
        }}
      >
        start to 999
      </button>
    </>
  )
}

export default App