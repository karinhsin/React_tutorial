import React from 'react'
import './App.css'

function App() {
    let foo = 10

    return (
        <>
            {1}
            <hr />
            {'abc'}
            <hr />
            {/* 下面這4行都不會呈現 */}
            {true}
            <hr />
            {false}
            <hr />
            {null}
            <hr />
            {undefined}
            <hr />
            {/* 陣列可以直接輸出，下面這行會呈現 1234 */}
            {[1, 2, 3, 4]}
            <hr />
            {/* 下面這行物件會讓程式錯誤 */}
            {/* 純物件不能直接使用，會出錯（物件不是react合法元素） */}
            {/* {{ a: 1, b: 2 }} */}
            <hr />
            {/* 下面這行函式不會呈現 */}
            {function () {
                console.log(1)
            }}
        </>
    )
}

export default App