import React from 'react';

import './style.css';

const Books = (props) => {
    return (
        <div className="booksField" >
                <div className="field">
                    <h4>Search Term: <span>"{props.searchTerm}"</span> </h4>
                    <div className="grid">
                        {props.bookContent.map(book => (

                            <figure key={book.id}>
                               <a href={book.volumeInfo.previewLink}> <img src={book.volumeInfo.imageLinks.thumbnail} alt="book"/> </a>
                                <figcaption>{book.volumeInfo.title}</figcaption>
                                <p>{book.volumeInfo.authors}</p>
                            </figure>

                        ))}

                    </div>
                </div>
            </div>
    )
}

export default Books;