import logo from '../../assets/logo.png';

const Navbar = () => {
    return (
        <nav className="container navbar">
            <div className="logo">
                <a href="#">
                    <img src={logo} alt="logo" />
                </a>
            </div>

            <ul className="nav-links">
                <li>
                    <a href="#" className="nav-link">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link">
                        About
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link active">
                        Tours
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
