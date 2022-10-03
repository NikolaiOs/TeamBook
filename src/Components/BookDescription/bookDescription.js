import React from "react";
import {Link, useParams} from "react-router-dom";
import './bookDescription.css';
import {AddToYourLibraryBtn} from "./Button/addToYourLibraryBtn";
import {Description} from "./Button/description";
import {Messages} from "../Messages/messages";
import {CarouselBookPage} from "./carouselBookPage";
import {Carousel2BookPage} from "./carousel2BookPage";
import {useSelector} from "react-redux";
import {getBookSelector} from "../../Redux/reducers/bookReducer/bookSelector";

export const BookDescription = () => {

    const { bookId } = useParams()
    const books  = useSelector(getBookSelector)

    return (
        <>
            <div className="layout-info">
                <div className="layout-info__left">
                    <img className="layout-info__left-img" src="/Images/cover.jpeg" alt="book cover"/>
                    <Link className="layout-info__left-link" to={`/book/${bookId}`}>читать отрывок</Link>
                </div>
                <div className="layout-info__right">
                    <div className="layout-info__right-top">
                        <h1 className="right-top__title">{books[bookId].name}</h1>
                        <span className="right-top__subtitle">
                            <a className="right-top__subtitle-link" href="#">{books[bookId].author}</a>
                        </span>
                        <div className="right-top__topic-list">
                            <ul className="topic-list">
                                <li className="topic-list__links">
                                    <Link to="/genres" className="topic-list__link">Зарубежная литература</Link>
                                </li>
                                <li className="topic-list__links">
                                    <Link to="/genres" className="topic-list__link">Проза</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <AddToYourLibraryBtn />
                    <Description />
                    <Messages />
                    <CarouselBookPage />
                    <Carousel2BookPage />
                </div>
            </div>
        </>
    )
}