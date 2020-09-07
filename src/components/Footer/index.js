import React from 'react';

import { FiInstagram, FiGithub, FiLinkedin } from 'react-icons/fi';

import './style.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="socialMedia">
                <ul>
                    <li>
                        <a href="http://instagram.com/jeffmendes__"> <FiInstagram/> </a>
                    </li>

                    <li>
                        <a href="http://github.com/jeferson-mendes"> <FiGithub/> </a>
                    </li>

                    <li>
                        <a href="http://linkedin/in/jeferson-mendes"> <FiLinkedin/> </a>
                    </li>
                </ul>
            </div>
            <section className='subFooter'>
                <div className="fieldFooter">
                    <h2>Books Seacher</h2>
                    <div>
                        <h4>CREDITS</h4>
                       <p> <a href="https://developers.google.com/books" >Google Books APIs</a> </p>
                    </div>
                    <div>
                        <h4>MORE</h4>
                       <p> <a href="http://linkedin.com/in/jeferson-mendes">Contact</a> </p>
                       <p> <a href="http://github.com/jeferson-mendes/book-seacher">About WebApp</a> </p>
                    </div>

                </div>
                <hr/>
                <span>&copy; <a href="http://github.com/jeferson-mendes"> Jeferson Mendes </a> </span>
            </section>
        </div>
    )
}

export default Footer;