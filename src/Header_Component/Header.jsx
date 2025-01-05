import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import styles from './Header.module.css';
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
    const goToActivity = () => navigateAndCloseMenu('/activity');
    const goToZooplan = () => navigateAndCloseMenu('/map');

    const handleLogoClick = () => navigateAndCloseMenu('/');

    return (
        <div className={styles.headerDiv}>
            <img className={styles.headerLogo} alt="Zoo Logo" src={logo} onClick={handleLogoClick} />
            
            <div className={styles.menuContainer}>
                <div className={`${styles.menuItems} ${isOpen ? styles.open : ''}`}>
                    <nav className={styles.navMenu}>
                        <ul>
                            <li><a onClick={goToHome}>Home</a></li>
                            <li><a onClick={goToActivity}>Aktivitäten</a></li>
                            <li><a onClick={goToZooplan}>Zooplan</a></li>
                        </ul>
                    </nav>
                </div>

                <button
                    onClick={toggleMenu}
                    className={styles.burgerButton}
                    aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
                >
                    {isOpen ? (<X size={32} className={styles.menuIcon} />) : (<Menu size={32} className={styles.menuIcon} />)}
                </button>
            </div>
        </div>
    );
}
