import React, { useState } from 'react'
import ProductList from '../components/Product/ProductList'
import Other from '../components/other/Other.jsx';

const Dashboard = () => {
    const [count, setCount] = useState(1);
    const [othercount, setothercount] = useState(1)

    console.log("Dashboard");
    return (
        <div className=''>
            <div className='bg-blue-300 p-2 flex justify-between'>
                <div className='font-bold text-md'>
                    Dashboard
                </div>
                <div
                    className='font-semibold text-sm cursor-pointer select-none'
                    onClick={() => setCount(count + 1)}
                >
                    Update {count}
                </div>
                <div>
                    <Other setothercount={setothercount} othercount={othercount} />
                </div>
            </div>
            <div className='px-2 py-2'>
                <ProductList />
            </div>
        </div>
    )
}

export default React.memo(Dashboard);