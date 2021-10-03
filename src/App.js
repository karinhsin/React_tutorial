import { useState } from 'react'
import './App.css'
import './menu.css'
import OrderList from './components/OrderList'
import Summary from './components/Summary'

// 產品訂購的項目
const products = [
  {
    id: 1,
    name: '咖啡色 T-shirt',
    category: 'Shirt',
    image: 'https://i.imgur.com/1GrakTl.jpg',
    price: 300,
  },
  {
    id: 2,
    name: '白色 T-shirt',
    category: 'Shirt',
    image: 'https://i.imgur.com/ba3tvGm.jpg',
    price: 200,
  },
  {
    id: 3,
    name: '黑色 T-shirt',
    category: 'Shirt',
    image: 'https://i.imgur.com/pHQ3xT3.jpg',
    price: 450,
  },
  {
    id: 4,
    name: '黑色素面 T-shirt',
    category: 'Shirt',
    image: 'https://i.imgur.com/pHQ3xT3.jpg',
    price: 100,
  },
]

// const initState = () => {
//   console.log(products)
//   const array = []

//   for (let i; i < products.length; i++) {
//     array.push(1)
//   }
//   console.log(array)
//   return array
// }

function App() {
  // 多樣產品狀態：陣列
  // ex. 三樣商品 -> [1,1,1]
  const [counts, setCounts] = useState(Array(products.length).fill(1))

  // Summary
  // 計算目前所有的商品數量
  const productCount = () => {
    let totalCount = 0

    for (let i = 0; i < counts.length; i++) {
      totalCount += counts[i]
    }

    return totalCount
  }

  // 計算目前所有的商品總價
  const total = () => {
    let sum = 0

    for (let i = 0; i < products.length; i++) {
      sum += counts[i] * products[i].price
    }

    return sum
  }

  return (
    <div className="card">
      <ul>
        <li><a>首頁</a></li>
        <li><a>關於我們</a></li>
        <li><a>產品</a></li>
      </ul>
      <div className="row">

        <OrderList products={products} setCounts={setCounts} counts={counts} />
        <Summary productCount={productCount()} total={total()} />
      </div>
    </div>
  )
}

export default App