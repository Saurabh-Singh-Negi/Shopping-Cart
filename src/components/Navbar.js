import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
    const items = useSelector((state) => state.cart);
    
    return (
        <>
        <div className="flex flex-row items-center justify-between bg-black text-white p-5">
            <div>
               <Link className="font-lg text-xl" to="/"> REDUX STORE</Link>
            </div>
            <div className="flex gap-2 mr-5 items-center">
                <Link className="font-lg text-xl" to="/">Home</Link>
                <Link className="font-lg text-xl" to="/cart">Cart</Link>
                <span className="font-semibold text-2xl">Cart Items : {items.length}</span>
            </div>
        </div>
        </>
    )
}

export default Navbar;