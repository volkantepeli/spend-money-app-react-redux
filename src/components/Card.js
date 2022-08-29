import { useSelector } from 'react-redux'
import * as React from 'react';


function Card() {
  const data = useSelector((state) => state.products)
  return (
    <div>
        {data.items.map((product) => (
            <div key={product.id}>
                {product.productName}{product.productPrice}
            </div>
        ))}
    </div>
  )
}

export default Card



