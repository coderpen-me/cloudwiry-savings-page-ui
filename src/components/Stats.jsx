import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PriceComp from './PriceComp.jsx';
import { Box } from '@material-ui/core';
import AssessmentIcon from '@material-ui/icons/Assessment';
import GraphView from './graphView.jsx';
import './stats.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingLeft: '8px',
    paddingRight: '8px',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  const [val1, setVal1] = React.useState('37.8');
  const [val2, setVal2] = React.useState('0.00');
  const [val3, setVal3] = React.useState('3.65');

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={6}>
          <GraphView />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Grid item xs={12}>
            <PriceComp mainText={"Hourly Commitment:"} supportText={"Default value is highest savings from graph"} />
          </Grid>
          <Grid classes={{ root: classes.root }} item xs={12}>
            <Box className="bg-gray pl-10">
              <Grid className="mainHead pt-8" item xs={12}>
                AWS Recommendation: ${val1}
              </Grid>
              <Grid className="subHead pb-8" item xs={12}>
                7 Day Analysis by AWS
              </Grid>
            </Box>
          </Grid>
          <Grid classes={{ root: classes.root }} item xs={12}>
            <Box className="">
              <Grid className="mainHead pt-8" item xs={12}>
                Expected Target Coverage
              </Grid>
              <Grid className="subHead pt-8 pb-8" item xs={12}>
                {val2}
              </Grid>
              <Grid className="pb-8" item xs={12} style={{ textDecoration: 'underline' }}>
                <AssessmentIcon style={{ verticalAlign: 'middle' }}></AssessmentIcon> {'View Your Current Coverage'}
              </Grid>
            </Box>
          </Grid>
          <Grid classes={{ root: classes.root }} item xs={12}>
            <Box className="">
              <Grid className="mainHead pt-8" item xs={12}>
                Estimated Net Additional Monthly Savings
              </Grid>
              <Grid className="midHead pt-8 pb-8" item xs={12}>
                {val3}
              </Grid>
              <Grid className="subHead pb-8" item xs={12}>
                Estimated savings produced by savings plan purchase
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
