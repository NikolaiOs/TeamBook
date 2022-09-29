import './carousel.css';
import React, {useEffect, useState, Children, cloneElement} from "react";

function ArrowLeft(props) {
    return (
        <div className="arrow arrow_left" onClick={props.onClick}>
            <svg width="14" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="m11.793.293-11 11a1 1 0 0 0 0 1.414l11 11a1 1 0 0 0 1.414-1.414L2.914 12 13.207 1.707A1 1 0 0 0 11.793.293Z" fill="#000" fill-opacity=".2"/>
            </svg>
        </div>
    )
}

function ArrowRight(props) {
    return (
        <div className="arrow arrow_right" onClick={props.onClick}>
            <svg width="14" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="m2.207 23.707 11-11a1 1 0 0 0 0-1.414l-11-11A1 1 0 0 0 .793 1.707L11.086 12 .793 22.293a1 1 0 1 0 1.414 1.414Z" fill="#000" fill-opacity=".2"/>
            </svg>
        </div>
    )
}

const PAGE_WIDTH = 250

export const Carousel2 = ({children}) => {
    const [pages, setPages] = useState([])
    const [offset, setOffset] = useState(0)

    const handleLeftArrowClick = () => {

        setOffset((currentOffset) => {

            const newOffset = currentOffset + PAGE_WIDTH

            return Math.min(newOffset, 0)
        })
    }

    const handleRightArrowClick = () => {

        setOffset((currentOffset) => {

            const newOffset = currentOffset - PAGE_WIDTH

            const maxOffset = -(PAGE_WIDTH * (pages.length - 1))

            return Math.max(newOffset, maxOffset)
        })
    }

    useEffect(() => {
        setPages(
            Children.map(children, child => {
                return cloneElement(child, {
                    style: {
                        height: '100%',
                        minWidth: `${PAGE_WIDTH}px`,
                        maxWidth: `${PAGE_WIDTH}px`,
                    }
                })
            })
        )
    }, [])

    return (
        <div className="main-container">
            <ArrowLeft onClick={handleLeftArrowClick} />
            <div className="window">
                <div className="all-pages-container"
                     style={{
                         transform: `translateX(${offset}px)`
                     }}
                >
                    {pages}
                </div>
            </div>
            <ArrowRight onClick={handleRightArrowClick} />
        </div>
    )
}