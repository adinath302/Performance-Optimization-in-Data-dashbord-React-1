import React from 'react'

const ProductCard = () => {
    return (
        <div className=''>
            <div className='flex-col p-2 shadow-sm shadow-black rounded-md'>
                <div className='text-gray-400 text-sm font-semibold'>
                    Electronic
                </div>
                <div>
                    <h2 className='font-bold text-lg'>
                        Grip master gaming mousepad
                    </h2>
                    <div className='text-gray-700'>
                        extra large cloth pad with anti fray edges.
                    </div>
                    <div className='flex justify-between items-center mt-3'>
                        <div className='font-bold text-lg'>$15.00</div>
                        <div className='p-1 rounded-md bg-blue-400 text-white font-semibold text-sm'>Add to Cart</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard