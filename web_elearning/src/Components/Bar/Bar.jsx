import './Bar.css'
import { Typography, Button, Input, InputAdornment, FormControl } from '@mui/material';
import Search from '@mui/icons-material/Search';

function Bar () {

    return (
        <div className="bar">
            <img className="image-bar" src="Pictures/BG.png" alt="Bar" />
            <div className="search">
                <FormControl sx={{
                    border: '1px solid white',
                    background: 'white',
                    borderRadius: '99px',
                    padding: '0 17px',
                    width: '673px',
                    height: '56px'
                }}>
                    <Input
                    id="input-with-icon-adornment"
                    placeholder="Search"
                    sx={{
                        height: '55px'
                    }}
                    startAdornment={
                        <InputAdornment position="start">
                            <Search />
                        </InputAdornment>
                    }
                    endAdornment={
                        <Button
                            variant='contained'
                            sx={{
                                background: 'linear-gradient(45deg, #214457 30%, #214457 90%)',
                                borderRadius: 99,
                                height: '40px',
                                width: '112px',
                            }}
                        >
                            Search
                        </Button>
                    }
                    />
                </FormControl>
            </div>
            <Typography
                sx={{
                    position: 'absolute',
                    width: '496px',
                    height: '247px',
                    left: '0px',
                    top: '0px',
                    marginTop: '276px',
                    marginLeft: '108px',
                    fontFamily: 'Noto Sans',
                    color: '#F2D555',
                    lineHeight: '61.6px',
                    fontWeight: 'bold',
                    fontSize: '56px'
                }}
            >
                Create <span>or</span> Find <span>interesting</span> Events <span>around The world</span>
            </Typography>
            
        </div>
    )
}

export default Bar;