import React from "react";
import {Link, useParams} from "react-router-dom";
import './book.css';
import {AddToYourLibraryBtn} from "./Button/addToYourLibraryBtn";
import {Description} from "./Button/description";
import {Messages} from "../Messages/messages";
import {CarouselBookPage} from "./carouselBookPage";
import {Carousel2BookPage} from "./carousel2BookPage";

export const BookPage = () => {
    const { bookId } = useParams();

    return (
        <>
            <div className="layout-info">
                <div className="layout-info__left">
                    <img className="layout-info__left-img" src="/Images/sympathizer.png" alt="Сочувствующий"/>
                    <Link className="layout-info__left-link" to="/reader">читать отрывок</Link>
                </div>
                <div className="layout-info__right">
                    <div className="layout-info__right-top">
                        <h1 className="right-top__title">Сочувствующий</h1>
                        <span className="right-top__subtitle">
                            <a className="right-top__subtitle-link" href="#">Нгуен Вьет Тхань</a>
                        </span>
                        <div className="right-top__topic-list">
                            <ul className="topic-list">
                                <li className="topic-list__links">
                                    <Link to="books" className="topic-list__link" target="_blank">Зарубежная литература</Link>
                                </li>
                                <li className="topic-list__links">
                                    <Link to="books" className="topic-list__link" target="_blank">Проза</Link>
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