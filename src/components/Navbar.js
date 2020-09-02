import React, { useState } from 'react'; // React Hook 사용하기
import { Button } from './Button'; // named eport 불러오기
import { Link } from 'react-router-dom'; // react-router-dom Link 사용하기
import './Navbar.css';
import Dropdown from './Dropdown'; // 컴포넌트 불러오기

function Navbar(){
    // React Hooks
    const [ click, setClick ] = useState(false); // click 초기값
    const handleClick = () => { 
        setClick(!click); // click 변경값
    }
    const [ dropdown, setDropdown ] = useState(false);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if(window.innerWidth < 960) {
            setDropdown(false)
        }else{
            setDropdown(true)
        }
    }
    const onMouseLeave = () => {
        if(window.innerWidth < 960) {
            setDropdown(false)
        }else{
            setDropdown(false)
        }
    }

    return (
        <>
            <nav className="navbar">
                <Link to='/' className="navbar-logo">
                    EPIC <i className="fab fa-firstdraft"></i>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                            Services <i className="fas fa-caret-down" />
                        </Link>
                        {/* dropdown state는 상단에 Hook으로 정의함 */}
                        {dropdown && <Dropdown />} 
                    </li>
                    <li className="nav-item">
                        <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
                            Products
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact-us" className="nav-links" onClick={closeMobileMenu}>
                            Contact Us
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li>
                </ul>
                {/* ↓ 모바일에서만 보여짐 */}
                <Button></Button>
            </nav>
        </>
    )
}

export default Navbar;