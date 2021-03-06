import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';

const Chart = ({ data : { confirmed, recovered, deaths }, country }) => {
    const [ dailyData, setDailyData ] = useState({});

    useEffect(() => {
        const fetchAPI = async () => {
            const initialDailyData = await fetchDailyData();
            setDailyData(initialDailyData);
        }

        fetchAPI();
    }, []);

    const LineChart = (
        dailyData.length 
        ? (
            <Line 
                data={{
                    labels: dailyData.map(({ date }) => date),
                    datasets: [{
                        data: dailyData.map(({ confirmed }) => confirmed),
                        label: 'Zainfekowani',
                        borderColor: '#8BB0EC',
                        fill: true
                    }, {
                        data: dailyData.map(({ deaths }) => deaths),
                        label: 'Zgony',
                        borderColor: '#EA9A90',
                        backgroundColor: '#EA9A90',
                        fill: true
                    }]
                }}
                options={{
                    title: { display: true, text: 'Zachorowania i zgony na całym świecie' }
                }}
            />
        ) : null
    );

    const barChart = (
        confirmed
        ? (
            <Bar 
                data={{
                    labels: ['Zachorowania', 'Wyzdrowienia', 'Zgony'],
                    datasets: [{
                        label: 'Ludzie',
                        backgroundColor: [
                            '#8BB0EC',
                            '#A3BA94',
                            '#EA9A90'
                        ],
                        data: [confirmed.value, recovered.value, deaths.value]
                    }]
                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: `Aktualny stan w ${country}` }
                }}
            />
        ) : null
    );

    return (
        <div className="row col-md-12">
            <div className="col-md-6">
                {barChart}
            </div>
            <div className="col-md-6">
                {LineChart}
            </div>
        </div>
    )
}

export default Chart;