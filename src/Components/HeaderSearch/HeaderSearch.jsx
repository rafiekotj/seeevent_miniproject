import React from 'react';
import { styled } from '@mui/material/styles';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import { InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton';
import Male from '../../Assets/male.png'

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '99px',
    backgroundColor: '#F0F0F1',
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#787885'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: '#787885',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '38ch',
        },
    },
}));

function HeaderSearch() {
    return (
        <Box sx={{ flexGrow: 2 }}>
            <AppBar sx={{ background: '#214457' }} position='static'>
                <Toolbar>
                    <Box sx={{ flexGrow: 0.1 }} />
                    <div className="logoSearch">
                        <img className="iconSearch" src="Pictures/SeeEventLogo(3).svg" alt="Logo" />
                    </div>
                    <Typography sx={{
                        fontFamily: 'Helvetica',
                        fontStyle: 'italic',
                        fontWeight: 'bold',
                        fontSize: "32px",
                        lineHeight: "48px",
                        letterSpacing: "0.05em",
                        color: "white",
                        display: { xs: 'none', sm: 'block' }
                    }}>SeeEvent</Typography>
                    <Box sx={{ flexGrow: 0.1 }} />
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search Event"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ xs: 'none', sm: 'flex' }}>
                        <Button
                            variant='contained'
                            sx={{
                                background: 'linear-gradient(45deg, #F2D555 30%, #F2D555 90%)',
                                borderRadius: 99,
                                height: '40px',
                                width: '164px',
                                color: '#373737',
                                fontWeight: 'bold',
                                marginRight: '30px',
                                marginLeft: '10px',
                            }}
                        >
                            Create Events
                        </Button>
                        <IconButton
                            sx={{ color: 'white' }}>
                            <Avatar alt="pratur" src={Male} sx={{width: 32, height: 32}} />
                            <Typography
                                sx={{
                                    margin: '10px',
                                    fontFamily: 'Noto Sans',
                                    fontStyle: 'normal',
                                    fontWeight: 'bold',
                                    fontSize: '16px',
                                    lineHeight: '25.5px',
                                    color: 'white'
                                }}>My Account</Typography>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default HeaderSearch

