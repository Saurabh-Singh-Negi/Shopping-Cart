import axios from 'axios';
import { useEffect, useState } from 'react';
const Products = () => {
    const [data,setData] = useState([]);
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
        .then(res => {
            setData(res.data);
            console.log(res.data);
        })
        .catch(error => {
            console.log(error.message);
        })
    },[])
    return (
        <>
            <div className='flex justify-center gap-2rem flex-wrap items-center'>
                {
                    data.map((ele) => {
                        return (
                            <div className='w-[200px] border-2 border-red-600'>
                                <img className='w-[80px]' src={ele.image} alt="" />
                                <p>{ele.title}</p>
                                <p>{ele.price}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Products;