import { useParams } from "react-router-dom";

export const User = () => {
    const { userId } = useParams();
    console.log("userId: ", userId);

    return (
        <h1>User Page</h1>
    )
}