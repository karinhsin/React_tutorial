import { useState } from 'react'
import './App.css'
import './menu.css'
import OrderList from './components/OrderList'
import Summary from './components/Summary'
import MenuItem from './components/MenuItem'

// 產品訂購的項目
const originalProducts = [
  {
    id: 1,
    name: '咖啡色 T-shirt',
    category: 'Shirt',
    image: 'https://i.imgur.com/1GrakTl.jpg',
    price: 300,
    count: 1
  },
  {
    id: 2,
    name: '白色 T-shirt',
    category: 'Shirt',
    image: 'https://i.imgur.com/ba3tvGm.jpg',
    price: 200,
    count: 1
  },
  {
    id: 3,
    name: '黑色 T-shirt',
    category: 'Shirt',
    image: 'https://i.imgur.com/pHQ3xT3.jpg',
    price: 450,
    count: 1
  },
  {
    id: 4,
    name: '黑色素面 T-shirt',
    category: 'Shirt',
    image: 'https://i.imgur.com/pHQ3xT3.jpg',
    price: 100,
    count: 1
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

const menuLabels = [
  {
    label: '首頁',
    active: ''
  },
  {
    label: '關於我們',
    active: ''
  },
  {
    label: '產品',
    active: ''
  }]

function App() {
  // 多樣產品狀態：陣列
  // ex. 三樣商品 -> [1,1,1]
  const [products, setProducts] = useState(originalProducts)
  const [menu, setMenu] = useState(menuLabels)
  const [shippingfee, setShippingfee ] = useState(0)

  // Summary
  // 計算目前所有的商品數量
  const productCount = () => {
    let totalCount = 0

    totalCount = products.reduce((total, value) => {
      // value是每一個商品項目
      // value.count是每一個商品項目的數量
      // total預設為0
      return value.count + total
    }, 0)

    return totalCount
  }

  // 計算目前所有的商品總價
  const total = () => {
    let sum = 0

    sum = products.reduce((total, value) => {
      return value.count * value.price + total
    }, 0)

    sum += +shippingfee

    return sum
  }

  return (
    <div className="card">
      <ul>
        {menu.map((v, i) => {
          return (
            <MenuItem
              key={i}
              item={v.label}
              active={v.active}
              setActive={() => {
                let newMenu = [...menu]
                newMenu = newMenu.map((value, index) => {
                  return {
                    label: value.label,
                    active: i == index ? 'active' : ''
                  }
                })
                setMenu(newMenu)
              }}
            />
          )
        })}
      </ul>
      <div className="row">

        <OrderList products={products} setProducts={setProducts} />
        <Summary productCount={productCount()} total={total()} setShippingfee={setShippingfee}/>
      </div>
    </div>
  )
}

export default App