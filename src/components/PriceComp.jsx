import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    typography: {
        body1: {
            fontFamily: "'Mulish', sans-serif",
            fontWeight: 500,
            fontSize: '1.0rem',
        }
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '25ch',
    },
}));

export default function PriceComp(props) {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        amount: '37.5'
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    return (
        <div className={classes.root}>
            <FormControl fullWidth className={classes.margin}>
                <InputLabel htmlFor="standard-adornment-amount">{props.mainText}</InputLabel>
                <Input
                    id="standard-adornment-amount"
                    value={values.amount}
                    onChange={handleChange('amount')}
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                />
                <FormHelperText id="outlined-weight-helper-text">{props.supportText}</FormHelperText>
            </FormControl>
        </div>
    );
}
