import axios from 'axios';
import { useEffect, useState } from 'react';
import { add } from '../store/cartSlice';
import { useDispatch } from 'react-redux';

const Products = () => {
    
    
    const [products,setProducts] = useState([]);
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
        .then(res => {
            setProducts(res.data);
            console.log(res.data);
        })
        .catch(error => {
            console.log(error.message);
        })
    },[])

    const dispatch = useDispatch();
    const handleClick = (product) => {
        dispatch(add(product));
    }
    return (
        <>
            <div className='flex justify-center gap-2rem flex-wrap items-center'>
                {
                    products.map((products) => {
                        return (
                            <div key={products.id} className='w-[200px] border-2 border-red-600 flex flex-col items-center'>
                                <img className='w-[80px]' src={products.image} alt="" />
                                <p>{products.title}</p>
                                <p>{products.price}</p>
                                <button onClick={() => handleClick(products)} className='bg-green-500 p-1'>Add to Cart</button>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Products;