
import { useEffect } from 'react';
import { add } from '../store/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import {fetchProducts} from '../store/productSlice';
import { STATUSES } from '../store/productSlice'
const Products = () => {
    const dispatch = useDispatch();
    const { data:products, status } = useSelector((state) => state.product);
    useEffect(() => {
        dispatch(fetchProducts())
    },[dispatch])

    const handleClick = (product) => {
        dispatch(add(product));
    }
    
    if(status === STATUSES.LOADING) {
        return "Loading the data..."
    }
    if(status === STATUSES.ERROR) {
        return <h2>SOMETHING WENT WRONG...</h2>
    }
    

    
    return (
        <>
            <div className='flex flex-wrap justify-center py-5'>
                {
                    products.map((product) => {
                        return (
                            <div key={product.id} className='w-1/5 m-1 p-6 bg-white flex flex-col items-center'>
                                <img className='w-[100px]' src={product.image} alt="" />
                                <h5 className='flex-1'>{product.title}</h5>
                                <h5>{product.price}</h5>
                                <button onClick={() => handleClick(product)} className='bg-green-500 p-1'>Add to Cart</button>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Products;