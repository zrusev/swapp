import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { withTheme } from 'styled-components';
import { ResponsiveRadar } from '@nivo/radar';

const RadarChart = ({theme: {primaryHeadingFontColor}, data}) => {
    const [metrics, setMetrics] = useState([]);

    useEffect(() => {
        setMetrics(data);
    }, [data]);
    
    const theme = {
        tooltip: {
            container: {
                background: '#FFF',
                color: '#000',
                boxShadow: '0 3px 9px rgba(0, 0, 0, 0.5)',
                fontFamily: 'sf-distant-galaxy',
                fontSize: 10,
            }
        },
        gridLabel: {
            color: '#000',
        }
    };

    return (
        <ResponsiveRadar
            data={metrics}
            keys={[ 'value' ]}
            indexBy="metric"
            maxValue="auto"
            margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
            curve="linearClosed"
            borderWidth={2}
            borderColor={{ from: 'color' }}
            gridLevels={5}
            gridShape="circular"
            gridLabelOffset={36}
            enableDots={false}
            dotSize={10}
            dotColor={{ theme: 'background' }}
            dotBorderWidth={2}
            dotBorderColor={{ from: 'color' }}
            enableDotLabel={true}
            dotLabel="value"
            dotLabelYOffset={-12}
            colors={primaryHeadingFontColor}
            fillOpacity={0.25}
            blendMode="multiply"
            animate={true}
            motionStiffness={90}
            motionDamping={15}
            isInteractive={true}
            theme={theme}
        />
    );
};

RadarChart.propTypes = {
    theme: PropTypes.object.isRequired,
    primaryHeadingFontColor: PropTypes.string,
    data: PropTypes.any,
}

export const Radar = withTheme(RadarChart);