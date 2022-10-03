import React from "react";
import { MakeBooks } from "../../helpers/filter";
import {BookToShow, BookToShowBooks} from "../BookToShow/bookToShow";
import './books.css';
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
        <div className="no-gradient gradient">
            <div className="container ">
                <main>
                    <section className="main center">
                        <h2 className="main__heading">Книги</h2>
                        <div className="main__row">
                            <div className="main__left">
                                {books.map(book => {
                                    return <div>
                                        <BookToShowBooks  key={book.id} book={book} />
                                    </div>
                                })}
                            </div>
                            <div className="main__right">
                                <h3 className="main__right_heading">Фильтр</h3>
                                <div className="main__right_select">
                                    <select>
                                        <option disabled selected>Сортировать по</option>
                                        <option>Популярности</option>
                                        <option>Новизне</option>
                                        <option>Рейтингу</option>
                                    </select>
                                    <select>
                                        <option disabled selected>Подписка</option>
                                        <option>Бесплатные книги</option>
                                        <option>По подписке</option>
                                        <option>Все книги</option>
                                    </select>
                                    <select>
                                        <option disabled selected>Жанры</option>
                                        <option>Бизнес-книги</option>
                                        <option>Детективы и триллеры</option>
                                        <option>Детские книги</option>
                                        <option>Документальная литература</option>
                                        <option>Дом, дача</option>
                                        <option>Зарубежная литература</option>
                                        <option>История</option>
                                        <option>Классическая литература</option>
                                        <option>Компьютеры и интернет</option>
                                        <option>Любовные романы</option>
                                        <option>Научно-образовательная</option>
                                        <option>Приключения</option>
                                        <option>Проза</option>
                                        <option>Психология, мотивация</option>
                                        <option>Религия и духовность</option>
                                        <option>Справочная литература</option>
                                        <option>Хобби и досуг</option>
                                        <option>Юмор</option>
                                        <option>Фантастика и фэнтези</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}

export { Books }