import React from "react";
import { Line } from "react-chartjs-2";
import { useState, useEffect, useContext } from "react";
import { UserContext } from 'App.js';

const TransitionChart = (props) => {
    var ans = {}
    const [showNotification, setShowNotification] = useState(false);
    const context = useContext(UserContext)
    const [datas, setDatas] = useState({})
    const [data, setData] = useState({})
    const [options, setOptions] = useState({})

    const handleSend = (props) => {
        setShowNotification(true);
    };

    const fetchData = () => {
        const url = "http://main.itigo.jp/main.itigo.jp/muscle_api/index.cgi/graph/piechart/parts";

        ans["user_id"] = context.user_id;
        ans["start_date"] = props.startDate;
        ans["end_date"] = props.endDate;
        ans["muscle_part_id"] = props.musclePartId;
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(ans),
        };

        console.log(ans);
        fetch(url, requestOptions)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Request failed with status: " + response.status);
                }
            })
            .then(d => {
                setDatas(d);
                console.log(d);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const ChartCraft = (datas) => {
        setData({
            labels: datas["dates"],
            datasets: [
                {
                    label: '体重 (kg)',
                    data: datas["time"],
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1,
                    spanGaps: true,
                },
            ],
        })

        setOptions({
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: 'day',
                        parser: 'YYYY-MM-DD',
                        tooltipFormat: 'll',
                    },
                    title: {
                        display: true,
                        text: 'Date',
                    },
                },
                y: {
                    title: {
                        display: true,
                        text: 'Weight (kg)',
                    },
                },
            },
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        boxWidth: 10,
                        font: {
                            size: 12,
                        },
                    },
                },
            },
            elements: {
                point: {
                    radius: 0,
                },
            },
            responsive: true,
            maintainAspectRatio: false,
            backgroundColor: 'white',
        });

        useEffect(() => {
            if (props.startDate !== "") {
                fetchData();
            }
        }, [props.startDate]);

        useEffect(() => {
            ChartCraft(datas)
            handleSend()
        }, [datas])

        return (
            <div style={{ background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                <Line data={data} options={options} />
            </div>
        );
    };
};

export default TransitionChart;
