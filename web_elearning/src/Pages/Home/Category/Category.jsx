import { Typography, Stack, Chip } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import './Category.css';

function Category() {
    // const design = (createTheme()) => {
    //     sx={
    //         fontSize: '24px',
    //         fontWeight: 'bold',
    //         fontSize: '24px',
    //         borderRadius: '99px',
    //         width: 248,
    //         height: 68,
    //         border: '1px solid #214457',
    //         color: '#214457'
    //     },
    // };

    const handleClick = () => {
        console.info('You clicked the Chip.');
      };
    return(
        <div className="category">
            <div className="title_category">
                <Typography variant="h2"
                    sx={{
                        width: 517,
                        height: 44,
                        fontFamily: 'Noto Sans',
                        fontWeight: 'bold',
                        fontSize: '40px',
                        lineHeight: '44px',
                        color: '#373737',
                        textAlign: 'center'
                    }}
                >
                    Explore event by category
                </Typography>
            </div>
            <div className="content_category">
            <Stack direction="row" spacing={1}>
                <div className="content_top">
                    <Chip label="Photography" variant="outlined" onClick={handleClick}
                        sx={{
                            fontSize: '24px',
                            fontWeight: 'bold',
                            fontSize: '24px',
                            borderRadius: '99px',
                            width: 248,
                            height: 68,
                            border: '1px solid #214457',
                            color: '#214457'
                        }}
                    />
                    <Chip label="Design" variant="outlined" onClick={handleClick}
                        sx={{
                            fontSize: '24px',
                            fontWeight: 'bold',
                            fontSize: '24px',
                            borderRadius: '99px',
                            width: 248,
                            height: 68,
                            border: '1px solid #214457',
                            color: '#214457'
                        }}
                    />
                    <Chip label="Development" variant="outlined" onClick={handleClick}
                        sx={{
                            fontSize: '24px',
                            fontWeight: 'bold',
                            fontSize: '24px',
                            borderRadius: '99px',
                            width: 248,
                            height: 68,
                            border: '1px solid #214457',
                            color: '#214457'
                        }}
                    />
                    <Chip label="Marketing" variant="outlined" onClick={handleClick}
                        sx={{
                            fontSize: '24px',
                            fontWeight: 'bold',
                            fontSize: '24px',
                            borderRadius: '99px',
                            width: 248,
                            height: 68,
                            border: '1px solid #214457',
                            color: '#214457'
                        }}
                    />
                </div>
                <div className="content_bottom">
                    <Chip label="Business" variant="outlined" onClick={handleClick}
                        sx={{
                            fontSize: '24px',
                            fontWeight: 'bold',
                            fontSize: '24px',
                            borderRadius: '99px',
                            width: 248,
                            height: 68,
                            border: '1px solid #214457',
                            color: '#214457'
                        }}
                    />
                    <Chip label="Lifestyle" variant="outlined" onClick={handleClick}
                        sx={{
                            fontSize: '24px',
                            fontWeight: 'bold',
                            fontSize: '24px',
                            borderRadius: '99px',
                            width: 248,
                            height: 68,
                            border: '1px solid #214457',
                            color: '#214457'
                        }}
                    />
                    <Chip label="Music" variant="outlined" onClick={handleClick}
                        sx={{
                            fontSize: '24px',
                            fontWeight: 'bold',
                            fontSize: '24px',
                            borderRadius: '99px',
                            width: 248,
                            height: 68,
                            border: '1px solid #214457',
                            color: '#214457'
                        }}
                    />
                </div>
            </Stack>
            </div>
            
        </div>
    )
}

export default Category;