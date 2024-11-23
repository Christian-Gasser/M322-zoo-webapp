import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import css from './Header.css';
import logo from './logo.png';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div id="header-div">
                <img id="header-logo" alt="Zoo Logo" src={logo}/>
                
                <div className="menu-container">
                    <div className={`menu-items ${isOpen ? 'open' : ''}`}>
                        <nav className="nav-menu">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Attraktionen</a></li>
                                <li><a href="#">Details</a></li>
                                <li><a href="#">Zooplan</a></li>
                            </ul>
                        </nav>
                    </div>

                    <button
                        onClick={toggleMenu}
                        className="burger-button"
                        aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
                    >
                        {isOpen ? (<X className="menu-icon" />) : (<Menu className="menu-icon" />)}
                    </button>
                </div>
            </div>
        </>
    );
}
