import React, {useState} from  'react';

import { FiSearch } from 'react-icons/fi';

import Books from '../../components/Books';

import './style.css';

const BooksDetail = ({ onHide })=> {

    const [searchTerm, setSearchTerm] = useState('')
    const [books, setBooks] = useState([])
    const [bookFieldHide, setBookFieldHide] = useState(true)

    function handleInputChange(e) {
        const inputvalue = e.target.value
        setSearchTerm(inputvalue)
    }

    async function handleSearchSubmit(e) {
        e.preventDefault()
        
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
        .then(response => response.json())
        .then(data => {
            setBooks([...data.items])

        }).catch(()=> {
             alert('There is a ERROR, try again with other Keyword')
             return window.location.reload(false);
            } )

        setBookFieldHide(false)
    }

    return (
        <div className="searchField resultField" >
            <span onClick={onHide} className="close">&times;</span>

            <div className='searchMessage'>
                <h2>Know't Book name?</h2>
                <p>No problem. search for author, dates, first name...</p>
            </div>

            <form onSubmit={handleSearchSubmit} >
                <input 
                    type="text"
                    value={searchTerm}
                    onChange={handleInputChange}
                    placeholder='Enter a KEYWORD and find your book.'/>
                <FiSearch onClick={handleSearchSubmit}/>
            </form>

            {bookFieldHide ? null : <Books bookContent={books} searchTerm={searchTerm} /> }
            
            
        </div>
    )
}

export default BooksDetail;