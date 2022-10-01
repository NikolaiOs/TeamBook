import React, {Component} from "react";
import '../book.css';

function Annotation(props) {
    return (
        <p className="text-description__item">
            Вьетнамская война подходит к концу. Падение Сайгона лишь вопрос времени. Это
            понимают все. Американцы медленно выводят свои войска из страны.
            Теперь уже бывший президент отдал приказ к отступлению и бежал. Готовится к
            эвакуации и один из высокопоставленных генералов, мечтавших превратить
            Вьетнам в цветущий рай с американским образом жизни. Вместе с ним должен
            покинуть родину и главный герой, самый преданный его офицер, правая рука, а по
            совместительству двойной агент, работающий и на США, и на СССР. Он, за весь
            роман ни разу не названный по имени, уже давно перестал различать своих и
            чужих и никак не может понять, на чьей же стороне сражается. Опустошенный,
            измотанный нескончаемой бойней, среди разрухи и хаоса он пытается понять, кто
            же победил в этой войне и победил ли хоть кто‑то? Но впереди его ждут еще
            большие трудности, ведь тот, кто сочувствовал всем, рискует рано или поздно
            стать для всех врагом.
        </p>
    )
}

function Characteristics(props) {
    return (
        <div className="product-feature">
            <ul className="product-feature__list">
                <li className="product-feature__list-item">
                    Автор:<span className="product-feature__list-item-char">Нгуен Вьет Тхань</span>
                </li>
                <li className="product-feature__list-item">
                    Переводчик:<span className="product-feature__list-item-char">Бабков Владимир</span>
                </li>
                <li className="product-feature__list-item">
                    Серия:<span className="product-feature__list-item-char">Corpus.(roman)</span>
                </li>
                <li className="product-feature__list-item">
                    Издательство:<span className="product-feature__list-item-char">Corpus</span>
                </li>
            </ul>
            <ul className="product-feature__list">
                <li className="product-feature__list-item">
                    ISBN:<span className="product-feature__list-item-char">978-5-17-104872-3</span>
                </li>
                <li className="product-feature__list-item">
                    Возрастное ограничение:<span className="product-feature__list-item-char">16+</span>
                </li>
                <li className="product-feature__list-item">
                    Год издания:<span className="product-feature__list-item-char">2019</span>
                </li>
                <li className="product-feature__list-item">
                    Количество страниц:<span className="product-feature__list-item-char">416</span>
                </li>
            </ul>
        </div>
    )
}

function AnnotationButton(props) {
    return (
        <button className="description__links-item tab_active" onClick={props.onClick}>
            Аннотация
        </button>
    )
}

function Annotation2Button(props) {
    return (
        <button className="description__links-item" onClick={props.onClick}>
            Аннотация
        </button>
    )
}

function CharacteristicsButton(props) {
    return (
        <button className="description__links-item" onClick={props.onClick}>
            Характеристики
        </button>
    )
}

function Characteristics2Button(props) {
    return (
        <button className="description__links-item tab_active" onClick={props.onClick}>
            Характеристики
        </button>
    )
}

function ShowDescription(props) {
    const describe = props.describe
    if (describe) {
        return <Characteristics />
    }
    return <Annotation />
}

export class Description extends React.Component {
    constructor(props) {
        super(props)
        this.handleAnnotationClick = this.handleAnnotationClick.bind(this)
        this.handleAnnotation2Click = this.handleAnnotation2Click.bind(this)
        this.handleCharacteristicsClick2 = this.handleCharacteristicsClick2.bind(this)
        this.handleCharacteristics2Click2 = this.handleCharacteristics2Click2.bind(this)
        this.state = {describe: false}
    }

    handleAnnotationClick() {
        this.setState({describe: true})
    }

    handleAnnotation2Click() {
        this.setState({describe: false})
    }

    handleCharacteristicsClick2() {
        this.setState({describe: true})
    }

    handleCharacteristics2Click2() {
        this.setState({describe: false})
    }

    render() {
        const describe = this.state.describe
        let button
        let button2

        if (describe) {
            button = <Annotation2Button onClick={this.handleAnnotation2Click} />
        } else {
            button = <AnnotationButton onClick={this.handleAnnotationClick} />
        }

        if (describe) {
            button2 = <Characteristics2Button onClick={this.handleCharacteristics2Click2} />
        } else {
            button2 = <CharacteristicsButton onClick={this.handleCharacteristicsClick2} />
        }

        return (
            <>
                <div className="description">
                    <div className="description__links">
                        { button }{ button2 }
                    </div>
                    <ShowDescription describe={describe} />
                </div>
            </>
        )
    }
}