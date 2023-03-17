
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';
const Cart = () => {
    
    const products = useSelector((state) => state.cart)

    const dispatch = useDispatch();
    const handleClick = (id) => {
        dispatch(remove(id));
        console.log(products)
    }
    
    return (
        <>
            {
                products.length === 0? 
                <div className='text-center mt-10 text-3xl font-bold text-red-500'>
                    <h1>No data to display yet...</h1>
                </div>
                :""
            }
            <div className='flex flex-col items-center'>
                {
                    products.map((product) => (
                        <div key={product.id} className="p-2 flex flex-row border-2 gap-4 w-[900px] justify-between items-center">
                            <img className='w-[100px]' src={product.image} alt="" />
                            <h5 className='flex-1'>{product.title}</h5>
                            <h5>{product.price}</h5>
                            <button onClick={() => handleClick(product.id)} className='bg-red-400 p-1 text-lg text-[#fff]'>Remove from Cart</button>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Cart;