// Create the chart
Highcharts.chart('shift-requests', {
    chart: {
        type: 'pie'
    },
    title: {
        text: null,
        align: 'left'
    },
    subtitle: {
        text: 'Shifting Requests',
        align: 'center'
    },

    accessibility: {
        announceNewData: {
            enabled: true
        },
        point: {
            valueSuffix: '%'
        }
    },

    // Add a legend option
    legend: {
        enabled: true, // enable the legend
        align: 'right', // align the legend to the right
        verticalAlign: 'middle', // vertically align the legend to the middle
        layout: 'vertical', // arrange the legend items vertically
        symbolRadius: 0 // make the legend symbols square
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b><br/>'
    },

    series: [
        {
            name: 'Countries',
            colorByPoint: true,
            data: [
                {
                    name: 'Kenya',
                    y: Math.random() * 1000,
                    drilldown: 'Kenya'
                },
                {
                    name: 'Uganda',
                    y: Math.random() * 1000,
                    drilldown: 'Uganda'
                },
                {
                    name: 'Tanzania',
                    y: Math.random() * 1000,
                    drilldown: 'Tanzania'
                },
                {
                    name: 'Malawi',
                    y: Math.random() * 1000,
                    drilldown: 'Malawi'
                },
                {
                    name: 'Zambia',
                    y: Math.random() * 1000,
                    drilldown: 'Zambia'
                }
            ]
        }
    ],
    drilldown: {
        series: [
            {
                name: 'Malawi',
                id: 'Malawi',
                data: [
                    [
                        'Zuku Fiber Malawi',
                        Math.random() * 1000
                    ],
                    [
                        'Satelite TV Malawi',
                        Math.random() * 1000
                    ],

                ]
            },
            {
                name: 'Zambia',
                id: 'Zambia',
                data: [
                    [
                        'Zuku Fiber Zambia',
                        Math.random() * 1000
                    ],
                    [
                        'Satelite TV Zambia',
                        Math.random() * 1000
                    ],

                ]
            },
            {
                name: 'Kenya',
                id: 'Kenya',
                data: [
                    [
                        'Zuku Fiber Kenya',
                        Math.random() * 1000
                    ],
                    [
                        'Satelite TV Uganda',
                        Math.random() * 1000
                    ],
                ]
            },
            {
                name: 'Uganda',
                id: 'Uganda',
                data: [
                    [
                        'Zuku Fiber Zambia',
                        Math.random() * 1000
                    ],
                    [
                        'Satelite TV Zambia',
                        Math.random() * 1000
                    ],
                ]
            },
            {
                name: 'Tanzania',
                id: 'Tanzania',
                data: [
                    [
                        'Zuku Fiber Zambia',
                        Math.random() * 1000
                    ],
                    [
                        'Satelite TV Zambia',
                        Math.random() * 1000
                    ],
                ]
            }
        ]
    },

    // Add a plotOptions.pie.dataLabels option
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: false // disable the data labels
            }
        }
    }
});