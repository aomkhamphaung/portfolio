import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Aom Kham Phaung</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className='footer__link'>About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className='footer__link'>Projects</a>
                    </li>

                    <li>
                        <a href="#contact" className='footer__link'>Contact</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.instagram.com/aom_kham_phaung" target='blank' className='footer__social-link'><i class="uil uil-instagram"></i></a>

                    <a href="https://www.facebook.com/aomkhamphaung" target='blank' className='footer__social-link'><i class="uil uil-facebook-f"></i></a>

                    <a href="https://github.com/aomkhamphaung" target='blank' className='footer__social-link'><i class="uil uil-github-alt"></i></a>
                </div>

                <span className='footer__copy'>&#169; aomkhamphaung All rights reserved</span>
            </div>
        </footer>
    )
}

export default Footer