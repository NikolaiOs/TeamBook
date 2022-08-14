import React from 'react';
import Button from "@mui/material/Button";
import {Link} from "@mui/material";

const NotFoundPage = () => {
    return (
        <div>
            <h1>Page Not Found. Try Again Later.</h1>
            <hr/>
            <Link to={'/'}><Button variant="contained">Home</Button></Link>
        </div>
    );
};

export default NotFoundPage;