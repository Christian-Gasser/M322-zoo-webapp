import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Instagram, Facebook, Youtube, Twitter, CircleUserRound } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerLeft}>
                    <h3 className={styles.sectionTitle}>INFORMATIONEN</h3>
                    <div className={styles.footerLinks}>
                        <a onClick={() => handleNavigation('/about')}>ÜBER UNS</a>
                        <span className={styles.separator}>|</span>
                        <a onClick={() => handleNavigation('/contact')}>KONTAKT</a>
                        <span className={styles.separator}>|</span>
                        <a onClick={() => handleNavigation('/imprint')}>IMPRESSUM</a>
                        <span className={styles.separator}>|</span>
                        <a onClick={() => handleNavigation('/privacy')}>DATENSCHUTZ</a>
                        <span className={styles.separator}>|</span>
                        <a onClick={() => handleNavigation('/terms')}>AGB</a>
                    </div>
                    <p className={styles.copyright}>2024; Designed by Tim Held & Christian Gasser.</p>
                </div>

                {/* <div className={styles.verticalSeparator}></div> */}

                <div className={styles.footerRight}>
                    <h3 className={styles.sectionTitle}>FOLGE UNS:</h3>
                    <div className={styles.socialIcons}>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <Instagram size={24} className={styles.socialIcon} />
                        </a>
                        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                            <CircleUserRound size={24} className={styles.socialIcon} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <Twitter size={24} className={styles.socialIcon} />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <Facebook size={24} className={styles.socialIcon} />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                            <Youtube size={24} className={styles.socialIcon} />
                        </a>
                        <a href="https://tripadvisor.com" target="_blank" rel="noopener noreferrer">
                            <CircleUserRound size={24} className={styles.socialIcon} />
                        </a>
                    </div>
                    <p className={styles.tagline}>Wer Tiere kennt, wird Tiere schützen.</p>
                </div>
            </div>
        </footer>
    );
}
