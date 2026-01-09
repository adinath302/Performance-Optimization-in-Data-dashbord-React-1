import React, { memo } from 'react'
import ProductCard from './ProductCard'
import Productdata from './Productdata'
const ProductList = memo(() => {

    // console.log("ProductList rendered") // it will print only when the component will render again

    return (
        <div>
            <div className='flex-wrap gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {
                    Productdata ? Productdata.map((product) => (
                        <div key={product.id} className=''>
                            <ProductCard product={product} />
                        </div>
                    ))
                        :
                        "Data is not available"
                }
            </div>
        </div>
    )
})

export default ProductList;