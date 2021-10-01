import React, { useState } from 'react'
import RadioButton from './components/RadioButton'

function App(props) {
  const [inputText, setInputText] = useState('')
  const [textArea, setTextArea] = useState('')
  const [selectedOption, setSelectedOption] = useState('') //注意初始值
  //radio 狀態紀錄是被選中選項按鈕的值
  const [gender, setGender] = useState('')
  //radio - 專用元件
  const [gender2, setGender2] = useState('')
  const genderOptions = ['男', '女', '不提供', '不確定']
  //checkbox - single
  const [agree, setAgree] = useState(false)

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
        <input
          type="radio"
          value="男"
          checked={gender === '男'}
          onChange={(e) => {
            setGender(e.target.value)
          }}
        />
        <label>男</label>
        <input
          type="radio"
          value="女"
          checked={gender === '女'}
          onChange={(e) => {
            setGender(e.target.value)
          }}
        />
        <label>女</label>
        <input
          type="radio"
          value="未定"
          checked={gender === '未定'}
          onChange={(e) => {
            setGender(e.target.value)
          }}
        />
        <label>未定</label>
      </section>

      <section id="radioButton">
        <h2>選項按鈕（專用元件）</h2>
        {genderOptions.map((v, i) => {
          return (
            <RadioButton
              key={i}
              value={v}
              checkedValue={gender2}
              setCheckedValue={setGender2}
            />
          )
        })}
      </section>

      <section id="checkbox-single">
        <h2>單一核取方塊</h2>
        <input
          type="checkbox"
          checked={agree}
          onChange={(e) => {
            setAgree(e.target.checked)
          }}
        />
        <label>我同意網站註冊規定</label>
      </section>
    </>
  )
}

export default App