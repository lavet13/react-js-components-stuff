import React from 'react';
import './ChartBar.css';

const ChartBar = ({ value, label, maxValue }) => {
    const getFillHeight = () => {
        if (maxValue > 0) return `${Math.round((value / maxValue) * 100)}%`;

        return `0%`;
    };

    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div
                    className="chart-bar__fill"
                    style={{ height: getFillHeight() }}
                ></div>
            </div>
            <div className="chart-bar__label">{label}</div>
        </div>
    );
};

export default ChartBar;
