import React, { useEffect } from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import GraphComp from './GraphComp.jsx';
import { fade, makeStyles } from '@material-ui/core/styles';
var localData = require('../graphdata.json');

const labels = [];
const values = [];

export default function GraphView() {
    const [alignment, setAlignment] = React.useState('3');

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const [update, setUpdate] = React.useState(0);

    useEffect(() => {
        fetch('https://cors-anywhere.herokuapp.com/https://bit.ly/2OO7uWU')
            .then(response => response.json())
            .then(resp => {
                Object.keys(resp).forEach(function (key) {
                    //console.log(resp[key].commitment);
                    labels.push(resp[key].commitment);
                    values.push(resp[key].savings);
                });
                //console.log("data.labels");
                setUpdate(!{ update });
            })
            .catch(error => {
                Object.keys(localData).forEach(function (key) {
                    console.log(localData[key].commitment);
                    labels.push(localData[key].commitment);
                    values.push(localData[key].savings);
                });
                setUpdate(!{ update });
            });
    }, []);


    const useStyles = makeStyles({
        root: {
            boxSizing: 'border-box',
            textTransform: 'none',
            padding: '5px 10px',
            border: `1px solid ${fade('#000000A6', 0.5)}`,
            color: fade('#000', 1),
            backgroundColor: fade('#fff', 1),
            '@media (min-width : 768px)': {
                padding: '5px 20px',
            },
            "&.Mui-selected": {
                color: '#fff',
                border: `1px solid ${fade('#1890ff', 1)}`,
                backgroundColor: fade('#1890ff', 1),
                '&:hover': {
                    border: `1px solid ${fade('#1890ff', 1)}`,
                    backgroundColor: fade('#1890ff', 1),
                },
            },
            '&.Mui-disabled': {
                color: '#000',
                backgroundColor: fade('#1890ff', 1),
                border: `1px solid ${fade('#1890ff', 0)}`,
                '&:hover': {
                    backgroundColor: fade('#1890ff', 0),
                    border: `1px solid ${fade('#1890ff', 1)}`,
                },
            },
            "&:hover": {
                textDecoration: 'none',
                // Reset on mouse devices
                backgroundColor: fade('#1890ff', 0),
                border: `1px solid ${fade('#000', 0.5)}`,
                '@media (hover: none)': {
                    backgroundColor: 'transparent',
                },
                '&$disabled': {
                    backgroundColor: 'transparent',
                },
            },
            "&:focus": {
                outline: '0px',
                border: '0px',
            },
        },
        disabled: false,
        selected: true,
    });

    const classes = useStyles();

    return (
        <>
            <GraphComp labels={labels} values={values} />
            <div style={{textAlign : 'center'}}>
                {"Filters By Recent Days :  "}
                <ToggleButtonGroup
                    value={alignment}
                    exclusive
                    onChange={handleAlignment}
                    aria-label="text alignment"
                    size="small"
                >
                    <ToggleButton value="3"
                        classes={{
                            root: classes.root,
                            disabled: classes.disabled,
                        }}
                    >
                        3-Days
                </ToggleButton>
                    <ToggleButton value="7"
                        classes={{
                            root: classes.root,
                            disabled: classes.disabled,
                        }}
                    >
                        7-Days
                </ToggleButton>
                    <ToggleButton value="30"
                        classes={{
                            root: classes.root,
                            disabled: classes.disabled,
                        }}
                    >
                        1-Month
                </ToggleButton>
                </ToggleButtonGroup>
            </div>
        </>
    );
}
