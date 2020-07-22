import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import PopOverComp from "./popoverComp.jsx";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    formControl: {
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    }
}));


function TopForm() {

    const classes = useStyles();

    const [plan, setPlan] = React.useState('Compute Savings Plans');
    const handleChangePlan = (event) => {
        setPlan(event.target.value);
    };

    const [term, setTerm] = React.useState('3-Year');
    const handleChangeTerm = (event) => {
        setTerm(event.target.value);
    };

    const [method, setMethod] = React.useState('No Upfront');
    const handleChangeMethod = (event) => {
        setMethod(event.target.value);
    };

    const [account, setAccount] = React.useState('');
    const handleChangeAccount = (event) => {
        setAccount(event.target.value);
    };

    const [checked, setChecked] = React.useState(false);

    const handleChangeChecked = (event) => {
        setChecked(event.target.checked);
    };

    return (

        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={3}>
                    <FormControl className={classes.formControl} style={{ minWidth: "200px" }}>
                        <FormLabel component="legend">Savings Plan Type</FormLabel>
                        <RadioGroup aria-label="plan" name="plan1" value={plan} onChange={handleChangePlan}>
                            <FormControlLabel value="Compute Savings Plans" control={<Radio color="primary" />} label={<span>Compute Savings Plans <PopOverComp ide={"one"} text={"Savings plans covers lambda, Fargate etc etc"} /></span>} />
                            <FormControlLabel value="EC2 Instance Savings Plans" control={<Radio color="primary" />} label={<span>EC2 Instance Savings Plans <PopOverComp ide={"two"} text={"Savings plans only for EC2 Instances"} /></span>} />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <FormLabel component="legend">Savings Plan Term</FormLabel>
                    <RadioGroup aria-label="term" name="term1" value={term} onChange={handleChangeTerm}>
                        <FormControlLabel value="1-Year" control={<Radio color="primary" />} label="1-Year" />
                        <FormControlLabel value="3-Year" control={<Radio color="primary" />} label="3-Year" />
                    </RadioGroup>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <FormLabel component="legend">Payment Option</FormLabel>
                    <RadioGroup aria-label="gender" name="gender1" value={method} onChange={handleChangeMethod}>
                        <FormControlLabel value="All Upfront" control={<Radio color="primary" />} label="All Upfront" />
                        <FormControlLabel value="Partial Upfront" control={<Radio color="primary" />} label="Partial Upfront" />
                        <FormControlLabel value="No Upfront" control={<Radio color="primary" />} label="No Upfront" />
                    </RadioGroup>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <FormLabel component="legend">Purchase in Account</FormLabel>
                    <Grid item xs={12}>
                        <FormControl className={classes.formControl} style={{ minWidth: "200px" }}>
                            <Select
                                labelId="demo-simple-select-placeholder-label-label"
                                id="demo-simple-select-placeholder-label"
                                value={account}
                                onChange={handleChangeAccount}
                                displayEmpty
                                className={classes.selectEmpty}
                            >
                                <MenuItem value="">
                                    <em>Select Account</em>
                                </MenuItem>
                                <MenuItem value={1}>Dummy 1</MenuItem>
                                <MenuItem value={2}>Dummy 2</MenuItem>
                                <MenuItem value={3}>Dummy 3</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <Checkbox
                            checked={checked}
                            onChange={handleChangeChecked}
                            defaultChecked
                            color="primary"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                            style={{paddingLeft : '0'}}
                        />
                        {"Account Purchase"}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default TopForm;