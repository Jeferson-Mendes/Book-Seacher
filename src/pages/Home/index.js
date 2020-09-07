import React, {useState} from 'react';

import bookshelvesImg from '../../assets/undraw_bookshelves.svg';
import cssLogo from '../../assets/css-3.svg'
import htmlLogo from '../../assets/html-5.svg'
import jsLogo from '../../assets/javascript.svg'
import reactLogo from '../../assets/react.svg'

import BooksDetail from '../BooksDetail';
import Footer from '../../components/Footer';

import './style.css';
const Home = () => {
    const [modalStateHide, setModalStateHide] = useState(true);


    return(
        <div className="home-page">
            <header >
                <nav className="menu" >
                    <h1>Books Searcher</h1>
                    <div>
                        <a href="http://github.com/jeferson-mendes/book-seacher">About</a>
                        <a href="http://linkedin.com/in/jeferson-mendes">Contact</a>
                    </div>
                </nav>

                <div className="welcome">
                    <div className="field-message">
                        <h1>Expand Your Mind!</h1>
                        <p>Discover the best books and up your mindset. Read up!</p>
                        <button onClick={()=> setModalStateHide(false)}>
                            Search now!
                        </button>
                    </div>
                    <img src={bookshelvesImg} alt="bookshelves"/>
                </div>
            </header>
        
            {modalStateHide ? null : <BooksDetail onHide={()=> setModalStateHide(true)} /> } 

            <section className='tools'>
                <div className="field-tools">
                    <h1>BUILD WITH:</h1>
                    <div className="img-tools">
                        <ul>
                            <li> <img src={reactLogo} alt="react"/> </li>
                            <li> <img src={jsLogo} alt="js"/> </li>
                            <li> <img src={htmlLogo} alt="html"/> </li>
                            <li> <img src={cssLogo} alt="css"/> </li>
                        </ul>
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    )
}

export default Home;