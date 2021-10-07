import { useState } from 'react'
import React from 'react'

function MenuItem(props) {
    //item 名稱
    //active class
    //setActive 通知父元件重新設定class的方法
    const { item, active, setActive } = props

    return (
        <>
            <li><a onClick={()=>{
                setActive()
            }} className={active}>{item}</a></li>
        </>
    )
}

export default MenuItem