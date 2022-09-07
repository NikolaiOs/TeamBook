import { useParams } from "react-router-dom";

export const Book = () => {
    const { bookId } = useParams();

    return (
        <>
            <h1>Book page</h1>
        </>
    )
}