import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
    const items = useSelector((state) => state.cart);
    
    return (
        <>
        <div className="flex flex-row justify-between bg-black text-white p-5">
            <div>REDUX STORE</div>
            <div >
                <Link to="/">Home</Link>
                <Link to="/cart">Cart</Link>
                <span>cart Items : {items.length}</span>
            </div>
        </div>
        </>
    )
}

export default Navbar;