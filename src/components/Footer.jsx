import React from 'react';
import {BottomNavigation, Card, Container, Grid, Paper, TableFooter, TableRow} from '@mui/material';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import InputSlider from "./Slider";


const Footer = () => {
    return (
        <>
            <Box component='footer' sx={{flexGrow: 1, display: 'flex', justifyContent: 'center'}}>
                <Button style={{borderRadius: 30, backgroundColor: '#A7A7A7', color: 'black'}}>написать комментарий</Button>
            </Box>
        </>
    );
};

export default Footer;