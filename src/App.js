import {useState} from 'react'

function App() {
  //寫react前要先想好這個應用程式的狀態是什麼？（會隨著使用者改變的）
  //[得到狀態(函式), 設定狀態(常數)（感變他的狀態）] =useState(初始值)  [getter ,setter]
  const [total, setTotal] = useState(0) 

  return (
    <>
      <h1>{total}</h1>
      <button
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setTotal(total - 1)
        }}
      >
        -
      </button>
    </>
  )
}

export default App;