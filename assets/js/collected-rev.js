Highcharts.chart('collected-rev', {
    chart: {
        type: 'column'
    },
    title: {
        text: null
    },
    subtitle: {
        text: null
    },
    xAxis: {
        type: 'category',
        labels: {
            autoRotation: [-45, -90],
            style: {
                fontSize: '10px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Amount (KES)'
        }
    },
    legend: {
        enabled: true
    },
    tooltip: {
        shared: true, // Enable shared tooltip
        headerFormat: '<span class="fw-semibold text-uppercase pb-3" style="font-size: 12px">{point.key}</span><br/>',
        pointFormat: '{series.name}: <b>KES {point.y:,.2f}</b> <br/>'
    },
    series: [
        {
            name: 'Collected Revenue',
            data: [
                {
                    name: 'Kenya Revenue Authority (KRA)',
                    y: 3733,
                    drilldown: 'trade'
                },
                {
                    name: 'Communication Authority of Kenya (CAK)',
                    y: 3118,
                    drilldown: 'housing'
                },
                {
                    name: ' Kenya Railways Corporation',
                    y: 2779,
                    drilldown: 'lands'
                },
                {
                    name: 'Kenya Ports Authority (KPA)',
                    y: 2223,
                    drilldown: 'agriculture'
                },
                {
                    name: ' Kenya Power and Lighting Company (KPLC)',
                    y: 2191,
                    drilldown: 'roads'
                },
                {
                    name: 'Kenya Airports Authority (KAA)	',
                    y: 2174,
                    drilldown: 'blue-economy'
                },
                {
                    name: ' Kenya National Highways Authority (KeNHA)',
                    y: 2132,
                    drilldown: 'water'
                },
                {
                    name: 'Kenya Airway Cargo',
                    y: 2089,
                    drilldown: 'governance'
                },
                {
                    name: 'Kenya Industrial Property Institute (KIPI)',
                    y: 2067,
                    drilldown: 'finance'
                },
                {
                    name: 'Kenya National Highways Authority (KeNHA)',
                    y: 1911,
                    drilldown: 'youth'
                },
                {
                    name: 'Communication Authority of Kenya (CAK)',
                    y: 1645,
                    drilldown: 'education'
                },
                {
                    name: 'National Environment Management Authority (NEMA)',
                    y: 1638,
                    drilldown: 'health'
                },
                // Add more data points with drilldowns as needed
            ],
            dataLabels: {
                enabled: true,
                rotation: -90,
                color: '#FFFFFF',
                align: 'right',
                format: '{point.y:,.0f}', // one decimal
                y: 10, // 10 pixels down from the top
                style: {
                    fontSize: '12px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        {
            name: 'Revenue Target',
            type: 'column',
            data: [
                ['Kenya Revenue Authority (KRA)', 4000],
                ['Communication Authority of Kenya (CAK)', 3500],
                [' Kenya Railways Corporation', 3000],
                ['Kenya Ports Authority (KPA)', 2500],
                [' Kenya Power and Lighting Company (KPLC)', 2400],
                ['Kenya Airports Authority (KAA)	', 2300],
                [' Kenya National Highways Authority (KeNHA)', 2200],
                ['Kenya Airway Cargo', 2100],
                ['Kenya Industrial Property Institute (KIPI)', 2000],
                ['Kenya National Highways Authority (KeNHA)', 1900],
                ['Communication Authority of Kenya (CAK)', 1800],
                ['National Environment Management Authority (NEMA)', 1700],
                // Add more target data as needed
            ],
            dataLabels: {
                enabled: true,
                color: '#FFFFFF',
                align: 'center',
                format: 'KES {point.y:,.2f}',
                style: {
                    fontSize: '10px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }
    ],
    drilldown: {
        series: [
            {
                id: 'trade',
                name: 'Kenya Revenue Authority (KRA)',
                data: [
                    {
                        name: 'Stream 1',
                        y: 1000,
                    },
                    {
                        name: 'Stream 2',
                        y: 1500,
                    },
                    // Add more revenue stream data as needed
                ]
            },
            {
                id: 'housing',
                name: 'Communication Authority of Kenya (CAK)',
                data: [
                    {
                        name: 'Stream 1',
                        y: 800,
                    },
                    {
                        name: 'Stream 2',
                        y: 1500,
                    },
                    // Add more revenue stream data as needed
                ]
            },
            {
                id: 'lands',
                name: ' Kenya Railways Corporation',
                data: [
                    {
                        name: 'Stream 1',
                        y: 1200,
                    },
                    {
                        name: 'Stream 2',
                        y: 900,
                    },
                    // Add more revenue stream data as needed
                ]
            },
            {
                id: 'agriculture',
                name: 'Kenya Ports Authority (KPA)',
                data: [
                    {
                        name: 'Stream 1',
                        y: 1100,
                    },
                    {
                        name: 'Stream 2',
                        y: 1300,
                    },
                    // Add more revenue stream data as needed
                ]
            },
            {
                id: 'roads',
                name: ' Kenya Power and Lighting Company (KPLC)',
                data: [
                    {
                        name: 'Daily Parking',
                        y: 900,
                    },
                    {
                        name: 'Weely Parking',
                        y: 1200,
                    },
                    {
                        name: 'Bus Park',
                        y: 1200,
                    },
                    {
                        name: 'Monthly Parking',
                        y: 1200,
                    },
                    // Add more revenue stream data as needed
                ]
            },
            {
                id: 'blue-economy',
                name: 'Kenya Airports Authority (KAA)	',
                data: [
                    {
                        name: 'Stream 1',
                        y: 800,
                    },
                    {
                        name: 'Stream 2',
                        y: 1100,
                    },
                    // Add more revenue stream data as needed
                ]
            },
            {
                id: 'water',
                name: ' Kenya National Highways Authority (KeNHA)',
                data: [
                    {
                        name: 'Stream 1',
                        y: 750,
                    },
                    {
                        name: 'Stream 2',
                        y: 1350,
                    },
                    // Add more revenue stream data as needed
                ]
            },
            {
                id: 'governance',
                name: 'Kenya Airway Cargo',
                data: [
                    {
                        name: 'Stream 1',
                        y: 950,
                    },
                    {
                        name: 'Stream 2',
                        y: 1150,
                    },
                    // Add more revenue stream data as needed
                ]
            },
            {
                id: 'finance',
                name: 'Kenya Industrial Property Institute (KIPI)',
                data: [
                    {
                        name: 'Stream 1',
                        y: 1050,
                    },
                    {
                        name: 'Stream 2',
                        y: 1250,
                    },
                    // Add more revenue stream data as needed
                ]
            },
            {
                id: 'youth',
                name: 'Kenya National Highways Authority (KeNHA)',
                data: [
                    {
                        name: 'Stream 1',
                        y: 900,
                    },
                    {
                        name: 'Stream 2',
                        y: 1400,
                    },
                    // Add more revenue stream data as needed
                ]
            },
            {
                id: 'education',
                name: 'Communication Authority of Kenya (CAK)',
                data: [
                    {
                        name: 'Stream 1',
                        y: 950,
                    },
                    {
                        name: 'Stream 2',
                        y: 1100,
                    },
                    // Add more revenue stream data as needed
                ]
            },
            {
                id: 'health',
                name: 'National Environment Management Authority (NEMA)',
                data: [
                    {
                        name: 'Stream 1',
                        y: 1000,
                    },
                    {
                        name: 'Stream 2',
                        y: 1300,
                    },
                    // Add more revenue stream data as needed
                ]
            },
            // Add more drilldown series as needed for other departments
        ]
    }
});
