import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Instagram, Facebook, Youtube, Twitter, CircleUserRound } from 'lucide-react';
import './Footer.css';

export default function Footer() {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <h3 className="section-title">INFORMATIONEN</h3>
                    <div className="footer-links">
                        <a onClick={() => handleNavigation('/about')}>ÜBER UNS</a>
                        <span className="separator">|</span>
                        <a onClick={() => handleNavigation('/contact')}>KONTAKT</a>
                        <span className="separator">|</span>
                        <a onClick={() => handleNavigation('/imprint')}>IMPRESSUM</a>
                        <span className="separator">|</span>
                        <a onClick={() => handleNavigation('/privacy')}>DATENSCHUTZ</a>
                        <span className="separator">|</span>
                        <a onClick={() => handleNavigation('/terms')}>AGB</a>
                    </div>
                    <p className="copyright">2024; Designed by Tim Held & Christian Gasser.</p>
                </div>

                <div className="vertical-separator"></div>

                <div className="footer-right">
                    <h3 className="section-title">FOLGE UNS:</h3>
                    <div className="social-icons">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <Instagram size={24} className="social-icon" />
                        </a>
                        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                            <CircleUserRound size={24} className="social-icon" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <Twitter size={24} className="social-icon" />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <Facebook size={24} className="social-icon" />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                            <Youtube size={24} className="social-icon" />
                        </a>
                        <a href="https://tripadvisor.com" target="_blank" rel="noopener noreferrer">
                            <CircleUserRound size={24} className="social-icon" />
                        </a>
                    </div>
                    <p className="tagline">Wer Tiere kennt, wird Tiere schützen.</p>
                </div>
            </div>
        </footer>
    );
}