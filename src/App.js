import React, { useState } from 'react'

function App(props) {
  //使用物件值作為狀態值，儲存所有欄位的值
  const [fields, setFields] = useState({
    username: '',
    email: '',
    password: '',
    //不要隨便用null跟undefine 要小心一點
  })

  //專門用來處理每個欄位的輸入用
  const handleFieldChange = (e) =>{
    //狀態是陣列或物件是一定要遵循以下三步驟
    //1.從原本的狀態物件拷貝新物件
    //2.在拷貝的新物件上處理
    const updateFields = {
      ...fields, //展開運算符（可用在物件）
      [e.target.name]:e.target.value //計算得來的屬性名稱
    }
    //3.設定回原狀態物件
    setFields(updateFields)
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

    // ex. 用fetch api/axios送到伺服器
  }

  return (
    <>
      <h1>HTML5表單驗證</h1>
      {/* 表單的預設行為是他會送到另一個網址
      action跟method有預設值
       */}
      <form onSubmit={handleSubmit}>
        <label>帳號</label>
        <input
          type="text"
          name="username"
          value={fields.username}
          onChange={handleFieldChange}
          required
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={fields.email}
          onChange={handleFieldChange}
          required
        />
        <label>密碼</label>
        <input
          type="text"
          name="password"
          value={fields.password}
          onChange={handleFieldChange}
          required
          minLength="5"  //最少要輸入5個字元
        />

        <button type="submit">提交</button>
        {/* button in form tag
      1.要有type 
      2.裡面不要再加onclick 不然行為會不正常 */}
      </form>
        
    </>
  )
}

export default App