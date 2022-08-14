import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import SegmentIcon from '@mui/icons-material/Segment';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import TextFieldsIcon from '@mui/icons-material/TextFields';


export default function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
        >
        </Menu>
    );


    return (
        <Box component='header' sx={{ flexGrow: 1}}>
            <AppBar color='primary' position="static" className='extended'>
                <Toolbar>
                    <IconButton
                        size="large"
                        color="inherit"
                    >
                        <KeyboardArrowLeftIcon />
                    </IconButton>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton size="large"  color="inherit">
                                <SegmentIcon />
                        </IconButton>
                        <IconButton
                            size="large"
                            color="inherit"
                        >
                                <TurnedInNotIcon />
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="end"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <TextFieldsIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMenu}
        </Box>
    );
}
