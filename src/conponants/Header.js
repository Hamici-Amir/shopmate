import{ Link, NavLink} from "react-route-dom" ;
import logo from "../assets/logo.png" ;
import "./Header.css"

export const Header = () => {
  return (
    <header>
        <Link to="/" className="logo">
            <img src={logo} alt="logo" />
            <span>Shopping cart </span>
        <Link/>
        <nav className="navigation">
            <Navlink to="/" className="link">Home</Navlink>
            <Navlink to="/cart" className="link">Cart</Navlink>
        </nav>
        <Link to="/cart" className="items">
            <span>Cart: 2</span>
        </Link>
         
    </header>
    
  )

}