import React, {useState} from 'react';


const BookLoad = () => {
    const [book, setBook] = useState('');
    fetch('/Book.txt')
        .then((r) => r.text())
        .then(text => {
            setBook(text)
        })
    return(
        <>
            {book}
        </>
    )}


export default BookLoad;