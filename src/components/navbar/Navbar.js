import "./navbar.css";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <a href="#">shopFlex.</a>
            </div>
            <div className="links">
                <a className="a" href="#">Home</a>
                <a className="a" href="#">Blog</a>
                <a className="a" href="#">Shop</a>
                <a className="a" href="#">Chat</a>
            </div>
            <div className="icons">
                <i class="fas fa-shopping-cart"></i>
                <i class="far fa-user"></i>
            </div>
        </div>
    )
}

export default Navbar
