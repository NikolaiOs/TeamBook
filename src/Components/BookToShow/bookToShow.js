import { Link } from "react-router-dom"
import './bookToShow.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";

export const BookToShow = ({ book, book_className }) => {

    return (
        <Link key={book.id} className={`book ${book_className}`} to={`/book/${book.id}`}>
            <img src={book.cover} className="book__cover" alt='book cover'></img>
            <div className="book__text">
                <p className="book__name p">{book.name}</p>
                <p className="book__author p">{book.author}</p>
            </div>
        </Link>
    )
}

export const BookToShowBooks = ({ book, book_className }) => {

    return (
        <Link key={book.id} className={`book ${book_className}`} to={`/book/${book.id}`}>
            <div className="main__card">
                <div className="main__card_img">
                    <img src={book.cover} alt="book cover"/>
                    <p>Рейтинг 4.4</p>
                </div>
                <div className="main__card_wrapper">
                    <h3 className="main__card_heading">{book.name}</h3>
                    <p className="main__card_text-top">{book.author}</p>
                    <p className="main__card_text-bottom">{book.description}</p>
                    <a href="">Подробнее</a>
                </div>
            </div>
        </Link>
    )
}