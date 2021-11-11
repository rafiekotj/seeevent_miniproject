import './Attend.css'
import { Typography, Button } from '@mui/material';

function Attend () {

    return (
        <div className="attend">
            <Typography
                sx={{
                    fontFamily: 'Noto Sans',
                    color: 'Black',
                    textTransform: 'capitalize',
                    fontSize: '20px'
                }}
            >
                Attend an event starting soon
            </Typography>
        </div>
    )
}

export default Attend;