import React from 'react';
import './Chart.css';

import ChartBar from './ChartBar';

const Chart = ({ dataPoints }) => {
    // const totalMaximum = dataPoints.reduce((acc, { value }) => acc + value, 0);
    const totalMaximum = Math.max(...dataPoints.map(({ value }) => value));

    return (
        <div className="chart">
            {dataPoints.map(({ value, label }) => (
                <ChartBar
                    key={label}
                    value={value}
                    label={label}
                    maxValue={totalMaximum}
                />
            ))}
        </div>
    );
};

export default Chart;
