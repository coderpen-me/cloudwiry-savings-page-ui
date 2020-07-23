import React, { useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import CircularUnderLoad from './loader.jsx';

/*

This component will render graph view based on labels and values sent to this comp as props. 

*/

const data = {
    labels: [],
    datasets: [
        {
            label: '',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: []
        }
    ]
};

function GraphComp(props) {

    // ComponenDidMount -> As soon component is mounted, data would be fead using props. 
    // If data is not available, loader will be shown.
    useEffect(() => {
        data.labels = props.labels;
        data.datasets[0].data = props.values;
    }, []);

    return (
        <div>
            <h4>Monthly Savings Vs Hourly Commitment</h4>
            {
                (data.labels.length === 0) ? <CircularUnderLoad /> : <Line data={data} />
            }
        </div>
    );
}

export default GraphComp;