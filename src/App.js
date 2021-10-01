import React, { useState } from 'react'

function App(props) {
  const [inputText, setInputText] = useState('')
  const [textArea, setTextArea] = useState('')
  const [selectedOption, setSelectedOption] = useState('') //注意初始值
  //radio 狀態紀錄是被選中選項按鈕的值
  const [gender, setGender] = useState('')
  return (
    <>
      <h1>可控表單元素</h1>
      {/* 讓程式碼比較方便折疊加section */}
      <section id="inputText">
        <h2>文字輸入框</h2>
        <input
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value)
          }}
        />
      </section>

      <section id="textArea">
        <h2>文字區域</h2>
        <textarea
          value={textArea}
          onChange={(e) => {
            setTextArea(e.target.value)
          }}
        />
      </section>

      <section id="selectedOption">
        <h2>下拉選單</h2>
        <select
          value={selectedOption}
          onChange={(e) => {
            setSelectedOption(e.target.value)
          }}
        >
          {/* 第一個值會用state的初始值 */}
          <option value="">請選擇</option>
          <option value="雞腿">雞腿</option>
          <option value="魯肉">魯肉</option>
          <option value="排骨">排骨</option>
        </select>
      </section>

      <section id="radioGroup">
        <h2>選項按鈕</h2>
        {/* 這邊的value不一定會用到 只是代表是哪個被選中 */}
        <input type="radio"
          value="男"
          checked={gender === '男'}
          onChange={(e) => {
            setGender(e.target.value)
          }}
        />
        <label>男</label>
        <input type="radio"
          value="女"
          checked={gender === '女'}
          onChange={(e) => {
            setGender(e.target.value)
          }}
        />
        <label>女</label>
        <input type="radio"
          value="未定"
          checked={gender === '未定'}
          onChange={(e) => {
            setGender(e.target.value)
          }}
        />
        <label>未定</label>
      </section>
    </>
  )
}

export default App