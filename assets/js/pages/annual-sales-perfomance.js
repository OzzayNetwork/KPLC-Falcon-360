Highcharts.chart('annual-sales', {
    chart: {
    type: 'column',
    style: {
    fontFamily: '"Poppins",sans-serif'
    }
    },
    title: {
    text: "Annual SalesPer Country", // changed this line
    style: {
    fontSize: '14px'
    }
    },
    subtitle: {
    text: null // added this line
    },
    xAxis: {
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
    min: 0,
    title: {
    text: 'Amount (KES)',
    text:null
    },
    gridLineColor: '#c2c2c2',
    gridLineWidth: 0.2
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
    column: {
    stacking: 'normal', // added this line
    pointPadding: 0.2,
    borderWidth: 0
    }
    },
    series: [{
    color:'#ff8a80', // changed this line
    name: 'Kenya', // changed this line
    data: [484559, 385668, 397873, 123414, 456770, 487893, 123590, 124596, 534524, 612352, 523493,
    123512] // changed this line
    
    }, {
    name: 'Uganda', // changed this line
    color:'#ffd180', // changed this line
    data: [124284, 312332, 343455, 345697, 534526, 745655, 571234, 604564, 471236, 312391, 434568,
    556711] // changed this line
    
    }, {
    name: 'Tanzania', // added this line
    color:'#ffab91', // added this line
    data: [234567, 456789, 345678, 567890, 456789, 678901, 789012, 890123, 901234, 567890, 678901,
    789012] // added this line
    
    }, {
    name: 'Malawi', // added this line
    color:'#aae5d3', // added this line
    data: [345678, 567890, 456789, 678901, 789012, 890123, 901234, 567890, 678901,
    789012,234567 ,456789] // added this line
    
    }, {
    name: 'Zambia', // added this line
    color:'#00c399', // added this line
    data: [456789 ,678901 ,789012 ,890123 ,901234 ,567890 ,678901 ,789012 ,234567 ,
    456789 ,345678 ,567890] // added this line
    
    }]
    });