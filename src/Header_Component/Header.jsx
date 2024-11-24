import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Header.css';
import logo from './logo.png';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navigateAndCloseMenu = (path) => {
        navigate(path);
        setIsOpen(false);
    };

    const goToHome = () => navigateAndCloseMenu('/');
    const goToAttractions = () => navigateAndCloseMenu('/attractions');
    const goToDetails = () => navigateAndCloseMenu('/details');
    const goToZooplan = () => navigateAndCloseMenu('/map');

    const handleLogoClick = () => navigateAndCloseMenu('/');

    return (
        <>
            <div id="header-div">
                <img id="header-logo" alt="Zoo Logo" src={logo} onClick={handleLogoClick} />
                
                <div className="menu-container">
                    <div className={`menu-items ${isOpen ? 'open' : ''}`}>
                        <nav className="nav-menu">
                            <ul>
                                <li><a onClick={goToHome}>Home</a></li>
                                <li><a onClick={goToAttractions}>Attraktionen</a></li>
                                <li><a onClick={goToDetails}>Details</a></li>
                                <li><a onClick={goToZooplan}>Zooplan</a></li>
                            </ul>
                        </nav>
                    </div>

                    <button
                        onClick={toggleMenu}
                        className="burger-button"
                        aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
                    >
                        {isOpen ? (<X size={32} className="menu-icon" />) : (<Menu size={32} className="menu-icon" />)}
                    </button>
                </div>
            </div>
        </>
    );
}
