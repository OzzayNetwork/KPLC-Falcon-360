const colors = Highcharts.getOptions().colors,
    categories = [
        'Kenya',
        'Tanzania',
        'Uganda',
        'Malawi',
        'Zambia'
    ],
    data = [
        {
            y: 60,
            color: colors[2],
            drilldown: {
                name: 'Kenya',
                categories: [
                    'Zuku Fiber Kenya',
                    'Satelite TV Kenya'
                    
                ],
                data: [
                    36,
                    64,
                   
                ]
            }
        },
        {
            y: 60,
            color: colors[3],
            drilldown: {
                name: 'Tanzania',
                categories: [
                    'Zuku Fiber Tanzania',
                    'Satelite TV Tanzania'
                ],
                data: [
                    54,
                    46
                ]
            }
        },
        {
            y: 45,
            color: colors[5],
            drilldown: {
                name: 'Uganda',
                categories: [
                   'Zuku Fiber Uganda',
                    'Satelite TV Uganda'
                ],
                data: [
                    46,54
                ]
            }
        },
        {
            y: 34,
            color: colors[1],
            drilldown: {
                name: 'Malawi',
                categories: [
                    'Zuku Fiber Malawi',
                    'Satelite TV Malawi',
                ],
                data: [
                   90,10
                ]
            }
        },
        {
            y: 33,
            color: colors[6],
            drilldown: {
                name: 'Zambia',
                categories: [
                    'Zuku Fiber Zambia',
                    'Satelite TV Zambia',
                ],
                data: [
                    78,
                    22
                ]
            }
        }
    ],
    browserData = [],
    versionsData = [],
    dataLen = data.length;

let i,
    j,
    drillDataLen,
    brightness;


// Build the data arrays
for (i = 0; i < dataLen; i += 1) {

    // add browser data
    browserData.push({
        name: categories[i],
        y: data[i].y,
        color: data[i].color
    });

    // add version data
    drillDataLen = data[i].drilldown.data.length;
    for (j = 0; j < drillDataLen; j += 1) {
        brightness = 0.2 - (j / drillDataLen) / 5;
        versionsData.push({
            name: data[i].drilldown.categories[j],
            y: data[i].drilldown.data[j],
            color: Highcharts.color(data[i].color).brighten(brightness).get()
        });
    }
}

// Create the chart
Highcharts.chart('bizunit-country', {
    chart: {
        type: 'pie',
        style: {
            fontFamily: '"Poppins",sans-serif'
        }
    },
    title: {
        text: null,
        align: 'left'
    },
    subtitle: {
        text:'Upgrade Requests',
        align: 'center'
    },
    plotOptions: {
        pie: {
            shadow: false,
            center: ['50%', '50%']
        }
    },
    tooltip: {
        valueSuffix: '%'
    },
    series: [{
        name: 'Requests By Country',
        data: browserData,
        size: '60%',
        dataLabels: {
            color: '#ffffff',
            distance: -30
        }
    }, {
        name: 'Requests By Business Unit',
        data: versionsData,
        size: '80%',
        innerSize: '60%',
        dataLabels: {
            format: '<b>{point.name}:</b> <span style="opacity: 0.5">{y}%</span>',
            filter: {
                property: 'y',
                operator: '>',
                value: 1
            },
            style: {
                fontWeight: 'normal'
            }
        },
        id: 'versions'
    }],
    responsive: {
        rules: [{
            condition: {
                maxWidth: 400
            },
            chartOptions: {
                series: [{
                }, {
                    id: 'versions',
                    dataLabels: {
                        enabled: false
                    }
                }]
            }
        }]
    }
});
