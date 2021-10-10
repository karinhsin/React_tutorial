import { useState, useEffect } from 'react'
import TodoList from './TodoList'

const App = () => {
  //後面的方法set..是用來蓋掉前面變數的值
  const [item, setItem] = useState('')
  const [todoList , setTodoList] = useState([])

  return (
    <>
     <input type="text" value={item} onChange={(e)=>{
       setItem(e.target.value)
       //()裡面是輸入在input欄位的值
     }} />
      <button 
      onClick={() => {
        let newList = [...todoList] //複製陣列
        let newItem = { name: item } //把輸入的值(item)加入到物件裡的name屬性 
        newList.push(newItem) //將newItem加入到newList
        setTodoList(newList) //新的取代舊的
      }}
      >
      Enter
      </button>
      <TodoList todoList={todoList} setTodoList={setTodoList}/>
    </>
  )
}

export default App