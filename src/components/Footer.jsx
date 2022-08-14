import React from 'react';
import {BottomNavigation, Paper} from '@mui/material';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

const Footer = () => {
    return (
        <>
            <Box component='footer' sx={{ flexGrow: 1}}>
                <AppBar color='primary' position="static" className='extended'>
                    <Toolbar>
            <BottomNavigation>
                <Button style={{borderRadius: 30, backgroundColor: '#A7A7A7', color: '#F5F5F5'}} variant='outlined'>написать комментарий</Button>
            </BottomNavigation>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
};

export default Footer;