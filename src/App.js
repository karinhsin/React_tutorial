import React, { useState } from 'react'

function App(props) {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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
          value={username}
          onChange={(e) => {
            setUsername(e.target.value)
          }}
          required
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          required
        />
        <label>密碼</label>
        <input
          type="text"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
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