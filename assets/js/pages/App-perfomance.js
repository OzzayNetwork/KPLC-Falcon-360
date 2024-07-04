// Data retrieved from https://fas.org/issues/nuclear-weapons/status-world-nuclear-forces/
Highcharts.chart('appPerfomance', {
    chart: {
        type: 'areaspline',
        style: {
            fontFamily: '"Poppins",sans-serif'
        }
    },
    accessibility: {
        description: null
    },
    title: {
        text: null
    },
    subtitle: {
        text: 'App Installations and Unistalations'
    },
    xAxis: {
        allowDecimals: false,
        accessibility: {
            rangeDescription: 'Range: 1940 to 2017.'
        },
        categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ],
        crosshair: true
    },
    yAxis: {
        title: {
            text: 'Nuclear weapon states'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:14px">{point.key}</span><table>',
        pointFormat: '<tr><td style="black;padding:0;padding-right:5px">{series.name}:  </td> ' +
            '<td style="padding:0"><b class="fw-semibold"> KES {point.y:.,2f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        area: {
            pointStart: 1,
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 20,
                states: {
                    hover: {
                        enabled: true
                    }
                }
            }
        }
    },
    series: [{
        name: 'Intallation Rate',
        data: [
            0, 10457, 10027, 850, 8360, 7853, 5709, 5273,
            5113, 5066, 4897, 481
        ],

    }, {
        name: 'Uninstallation Rate',
        data: [0, 0, 10114, 976, 838, 4700, 6643, 6286, 5929,
            5527, 515, 458
        ]
    }]
});