import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
    },
    container: {
        flexGrow: 1,
        marginRight: theme.spacing(2),
        textAlign: 'left',
    },
    buttonText: {
        color: 'white'
    },
}));

export default function Header() {
    const classes = useStyles();
    const [alignment, setAlignment] = React.useState('left');

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    return (
        <AppBar className={classes.no} position="sticky">
            <Toolbar>
                <Typography className={classes.container} variant="h6" noWrap>
                    WeatherApp
          </Typography>
                <ToggleButtonGroup
                    value={alignment}
                    exclusive
                    onChange={handleAlignment}
                    aria-label="text alignment"
                >
                    <ToggleButton className='buttonText' value="left" aria-label="left aligned">
                        <Typography className={classes.buttonText} variant="h6" noWrap>
                            Home
                        </Typography>
                    </ToggleButton>
                    <ToggleButton className='buttonText' value="right" aria-label="right aligned">
                    <Typography className={classes.buttonText} variant="h6" noWrap>
                            Favorites
                        </Typography>
                    </ToggleButton>

                </ToggleButtonGroup>
            </Toolbar>
        </AppBar>
    )
}

