import React, {useState, useEffect} from  'react';

import { FiSearch } from 'react-icons/fi';

import './style.css';

const BooksDetail = (props)=> {
    const [modalDisplay, setModalDisplay] = useState('none')


    useEffect(()=>{
        if(props.modalState === 'block') {
            console.log('Se aparecer muito, tá doido')
            setModalDisplay('block')

        }

    },[props.modalState])

    function handleClickX() {
            setModalDisplay('none')
            console.log('Se aparecer muito, tá doido')
    }

    return (
        <div className="searchField resultField" style={{display:`${modalDisplay}`}}>
            <span onClick={handleClickX} className="close">&times;</span>

            <div className='searchMessage'>
                <h2>Know't Book name?</h2>
                <p>No problem. search for author, dates, first name...</p>
            </div>

            <form >
                <input type="text" placeholder='Enter a KEYWORD and find your book.'/>
                <FiSearch/>
            </form>
        </div>
    )
}

export default BooksDetail;