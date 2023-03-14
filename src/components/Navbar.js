import { Link } from "react-router-dom";
const Navbar = () => {

    return (
        <>
        <div className="flex flex-row justify-between bg-black text-white">
            <div>REDUX STORE</div>
            <div >
                <Link to="/">Home</Link>
                <Link to="/cart">Cart</Link>
                <span>cart Items : 0</span>
            </div>
        </div>
        </>
    )
}

export default Navbar;