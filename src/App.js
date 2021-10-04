import React, { useState } from 'react'
import RadioButton from './components/RadioButton'
import CheckBox from './components/CheckBox'

import './App.css'

function App(props) {
  //使用物件值作為狀態值，儲存所有欄位的值
  const [fields, setFields] = useState({
    username: '',
    email: '',
    password: '',
    intro: '',
    gender: '',
    likeList: [],
    //不要隨便用null跟undefine 要小心一點
  })

  // 存入錯誤訊息用
  const [fieldErrors, setFieldErrors] = useState({
    username: '',
    email: '',
    password: '',
  })
  
  // radio - 專用元件
  // RadioButton元件有作修改
  const genderOptions = ['男', '女', '不提供', '不確定']
  // checkbox - 專用元件
  // CheckBox 元件有修改
  const fruitOptions = ['芒果', '西瓜', '芭樂', '香蕉']

  //專門用來處理每個欄位的輸入用
  const handleFieldChange = (e) =>{
    const name = e.target.name
    const value = e.target.value
    const type = e.target.type

    // 預設值為輸入值
    let newValue = value

    // checkbox為陣列值
    if (type === 'checkbox') {
      // toggle 切換
      // 如果目前包含在這狀態陣列 -> 移出 / 如果沒包含在這狀態陣列中 -> 加入
      newValue = fields[name].includes(value)
        ? fields[name].filter((v, i) => {
          return v !== value
        })
        : [...fields[name], value]
    }

    //狀態是陣列或物件是一定要遵循以下三步驟
    //1.從原本的狀態物件拷貝新物件
    //2.在拷貝的新物件上處理
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Object_initializer#%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7%E5%90%8D
    const updateFields = {
      ...fields, //展開運算符（可用在物件）
      [name]: newValue, 
    }
    //3.設定回原狀態物件
    setFields(updateFields)
  }

  // 當整個表單有變動時觸發
  // 認定使用者正在輸入有錯誤的欄位
  // 清除某個欄位錯誤訊息
  const handleFormChange = (e) => {
    // 設定錯誤訊息狀態
    const updatedFieldErrors = {
      ...fieldErrors,
      [e.target.name]: '',
    }

    // 3. 設定回原錯誤訊息狀態物件
    setFieldErrors(updatedFieldErrors)
  }

  // 當表單有檢查有不合法出現時觸發
  const handleFormInvalid = (e) => {
    // 阻擋form的預設行為(泡泡訊息)
    e.preventDefault()

    // 設定錯誤訊息狀態
    const updatedFieldErrors = {
      ...fieldErrors,
      [e.target.name]: e.target.validationMessage,
    }

    // 3. 設定回原錯誤訊息狀態物件
    setFieldErrors(updatedFieldErrors)
  }

  //在表單完成驗證之後，這邊才會觸發
  const handleSubmit = (e) => {
    //這行一定要寫 為了阻擋form的預設送出行為
    e.preventDefault()

    //利用FormData Api 得到各欄位的值 or 利用狀態值
    //FormData 利用的是表單元素的名字(name)
    const formData = new FormData(e.target) //e.target指的是這個表單
    console.log(formData.get('username'))
    console.log(formData.get('email'))
    console.log(formData.get('password'))
    console.log(formData.get('intro'))
    console.log(formData.get('gender')) //只需要一個值
    console.log(formData.getAll('likeList')) //需要所有值

    // ex. 以下用fetch api/axios送到伺服器
  }

  return (
    <>
      <h1>HTML5表單驗證</h1>
      {/* 表單的預設行為是他會送到另一個網址
      action跟method有預設值
       */}
      <form
        onSubmit={handleSubmit}
        onChange={handleFormChange}
        onInvalid={handleFormInvalid}
        //invalid：不合法 無效
      >
        <label>帳號</label>
        <input
          type="text"
          name="username"
          value={fields.username}
          onChange={handleFieldChange}
          required
        />
        {fieldErrors.username !== '' && (
          <div className="error">{fieldErrors.username}</div>
        )}
        <br/>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={fields.email}
          onChange={handleFieldChange}
          required
        />
        {fieldErrors.email !== '' && (
          <div className="error">{fieldErrors.email}</div>
        )}
        <br/>
        <label>密碼</label>
        <input
          type="text"
          name="password"
          value={fields.password}
          onChange={handleFieldChange}
          required
          minLength="5"  //最少要輸入5個字元
        />
        {fieldErrors.password !== '' && (
          <div className="error">{fieldErrors.password}</div>
        )}
        <br />
        <label>簡歷</label>
        <textarea
          name="intro"
          value={fields.intro}
          onChange={handleFieldChange}
        />
        <br />
        <label>性別</label>
        {genderOptions.map((v, i) => {
          return (
            <RadioButton
              key={i}
              name="gender"
              value={v}
              onChange={handleFieldChange}
              checked={fields.gender === v}
            />
          )
        })}
        <br />
        <label>喜好</label>
        {fruitOptions.map((v, i) => {
          return (
            <CheckBox
              name="likeList"
              key={i}
              value={v}
              onChange={handleFieldChange}
              checked={fields.likeList.includes(v)}
            />
          )
        })}
        <br />
        <button type="submit">提交</button>
        {/* button in form tag
      1.要有type 
      2.裡面不要再加onclick 不然行為會不正常 */}
      </form>
        
    </>
  )
}

export default App