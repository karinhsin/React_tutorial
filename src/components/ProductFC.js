import React, { useEffect, useState } from 'react'

// 產品訂購的項目
const productsFromServer = [
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
]

function ProductFC(props) {
    //假使裡面是個陣列 最好把樣子應該長怎樣寫出來給個註解 養成習慣 可以減少很多錯誤
    // [{
    //   id: 1,
    //   name: '咖啡色 T-shirt',
    //   category: 'Shirt',
    //   image: 'https://i.imgur.com/1GrakTl.jpg',
    //   price: 300,
    // }]

    const [products, setProducts] = useState([])//寫null undefine都不好
    //為了要切換載入動畫提示
    //這是一種做法，資料較多且複雜時可以用也可以用place holder
    const [isLoading, setIsLoading] = useState(true)

    // didMount
    // 第二個傳入參數為空陣列時，只執行第一次(讀取到時)
    useEffect(() => {
        // 模擬商品從伺服器來(fetch/ajax)
        //設定經過1秒才跟伺服器要資料
        setTimeout(() => {
            setProducts(productsFromServer)
        }, 1000)

        // 把載入動畫提示關起來
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    }, [])

    const spinner = (
        <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    )

    const display = (
        <ul>
            {products.map((v, i) => {
                return <li key={i}>{v.name}</li>
            })}
        </ul>
    )

    return (
        <>
            <h1>商品資料</h1>
            {/* 用載入指示的旗標來切換呈現 */}
            {isLoading ? spinner : display}
        </>
    )
}

export default ProductFC