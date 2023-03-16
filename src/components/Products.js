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
            <div className='flex flex-wrap justify-center py-5'>
                {
                    products.map((products) => {
                        return (
                            <div key={products.id} className='w-1/5 m-1 p-6 bg-white flex flex-col items-center'>
                                <img className='w-[100px]' src={products.image} alt="" />
                                <h5 className='flex-1'>{products.title}</h5>
                                <h5>{products.price}</h5>
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