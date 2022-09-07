import React from "react";
import { Link } from "react-router-dom";
import { makeBooks } from "../../helpers/filter";
import './books.css'

const Books = () => {

    const book = makeBooks();
    return (
        <>
            <main className="books">
                {book.map(book => {
                    return (
                        <Link className="bookItem" key={book.id} to={`/book/${book.id}`}>
                            <img src={book.cover} className="book__cover" alt='book cover'></img>
                            <div className="book__text">
                                <p className="book__author">{book.name}</p>
                                <p className="book__author">{book.author}</p>
                            </div>
                        </Link>
                    )
                })}
            </main>
        </>
    )
}

export { Books }