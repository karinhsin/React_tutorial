import React from 'react'

const students = [
  { id: 1, name: 'a' },
  { id: 2, name: 'b' },
  { id: 3, name: 'c' }
]

function App() {
  return (
    <>
      {/* 用map把陣列每個成員處理過變一個新的陣列 */}
      {/* 用陣列索引值當key要注意是不是變動性 */}
      {/* 用id值當key是最佳解 */}
      <ul>
        {/* 把每個學生資料一個一個拿過來 套上li */}
        {students.map((student,i)=>{
          {/* 使用map時要使用key屬性(可以使用索引值，但不穩定不太好) */}
          {/* 因為react對於列表清單要做最佳化，key可以幫助react分辨 */}
          return <li key={student.id}>{student.name}</li>
        })}
      </ul>
      {/* 上面執行的結果 */}
      <ul>{[<li>a</li>, <li > b</li>, <li > c</li>]}</ul>
    </>
  )
}

export default App