import React from 'react'
import './TodoList.css'

function TodoList(props) {
    const { todoList, setTodoList } = props

    return (
        <>
            <div>
                <ul>
                    {todoList.map((v, i) => {
                        return (
                            //一開始v.classname是空白(黑色的)點擊後更新v.classname改變成active(紅色)
                            <li key={i} className = {v.className} onClick={() => {

                                //將todolist複製到newlist
                                let newList = [...todoList]

                                //設定新的classname
                                //若舊的classname是active則改為空白，反之則改為active
                                let newClassName = v.className == 'active' ? '' : 'active'

                                //將新陣列中此項目的classname改為設定好的newclassname
                                newList[i].className = newClassName

                                //呼叫方法 更新todolist
                                setTodoList(newList)
                            }}>{v.name}</li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default TodoList