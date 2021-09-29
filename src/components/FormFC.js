import React, { useState } from 'react'

function FormFC() {
    // [得到狀態, 設定狀態] = useState(初始值)
    //這個範例的狀態其實是物件
    //state(是物件值時)，初始值不要寫以下幾種：null, {} , 沒寫
    //要把物件值中的屬性描述寫出來
    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
    })

    return (
        <>
            <h2>Form-FC函式型元件</h2>
            username:
            <input 
            type="text" 
            value={loginData.username} 
            onChange={(event)=>{
                setLoginData({
                    ...loginData,
                    username: event.target.value,
                })
              }}
            />
            password:
            <input 
            type="text" 
            value={loginData.password} 
            onChange={(event) => {
                setLoginData({
                    ...loginData,
                    password: event.target.value,
                })
             }}
            />
        </>
    )
}

export default FormFC