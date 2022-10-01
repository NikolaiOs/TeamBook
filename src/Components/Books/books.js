import React from "react";
import { MakeBooks } from "../../helpers/filter";
import { BookToShow } from "../BookToShow/bookToShow";
import './books.css'
import {useSelector} from "react-redux";
import {loader} from "../../Redux/reducers/bookReducer/bookSelector";


const Books = ({ books = MakeBooks() }) => {

    const loading = useSelector(loader);

if(loading) {
    return (
        <h1>One moment...</h1>
    )
}
    return (
        <div className=" no-gradient">
            <div className="container">
                <main className="books">
                    {books.map(book => {
                        return <BookToShow key={book.id} book={book} book_className={'book_page'} />
                    })}
                </main>
            </div>
        </div>
    )
}

export { Books }