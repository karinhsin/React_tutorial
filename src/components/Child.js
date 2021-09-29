import React, { Children } from 'react'
import PropTypes from 'prop-types'

function Child(props) {
    //先解構出屬性名稱變數
    //屬性值來源只有兩種 父母給的或自己設定
    const {name, text} = props
    return (
        <>
            {/* 子女元件透過props得到父母元件傳來的資料 */}
            <h1>{props.name}</h1>
            <p>{props.text}</p>
        </>
    )
}

//設定預設屬性（當父母元件沒給定時應用）
Child.defaultProps = {
    name: 'Karin',
    text: 'Hello',
}

Children.PropTypes = {
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}
export default Child