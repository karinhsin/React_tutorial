import React from 'react'
import ProductItem2 from './ProductItem2'

function ProductList(props) {
  console.log(props.products)
  const { products } = props

  return (
    <>
      <div className="table-responsive">
        <table className="table table-hover">
          <tbody>
            {products.map((product, i) => {
              return <ProductItem2 product={product} />
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ProductList
