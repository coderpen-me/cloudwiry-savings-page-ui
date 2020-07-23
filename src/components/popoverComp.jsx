import React from "react";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import InfoIcon from '@material-ui/icons/Info';
import { makeStyles } from '@material-ui/core/styles';

/*

This component is used for popover on hover {data is being sent as props to this comp}

*/

// Styling of the popovers
const useStyles = makeStyles((theme) => ({
    popover: {
        pointerEvents: "none"
    },
    paper: {
        backgroundColor: '#000',
        color: '#fff',
        fontSize: '8px',
        padding: theme.spacing(0.5)
    }
}));

function PopOverComp(props) {

    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    // States to handle the position of hover detected
    const [posX, setPosX] = React.useState(null);
    const [posY, setPosY] = React.useState(null);

    // If hover happens, position of x and y coordinates will be updates and popover will be shown at 40 px above detected point.
    const handlePopoverOpen = event => {
        setAnchorEl(event.currentTarget);
        setPosX(event.clientX);
        setPosY(event.clientY);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <>
            <InfoIcon aria-owns={open ? props.ide : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
                style={{ verticalAlign: "middle" }}>
            </InfoIcon>
            <Popover
                id={props.ide}
                className={classes.popover}
                classes={{
                    paper: classes.paper
                }}
                open={open}
                anchorReference="anchorPosition"
                anchorPosition={{ top: String(posY - 40), left: String(posX) }}
                anchorOrigin={{
                    vertical: 'center',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'center',
                    horizontal: 'center',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
            >
                <Typography>{props.text}</Typography>
            </Popover>
        </>
    )
}

export default PopOverComp;