$(document).ready(function() {
    // start: Charts
    const labels = [
        'Apples',
        'Bananas',
        'Grapes',
        'Mangoes',
        'Oranges',
        'Strawberry',
    ];

    const salesChart = new Chart($('#sales-chart'), {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                backgroundColor: '#6610f2',
                data: [170, 150, 110, 120, 190, 90],
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    })

    const visitorsChart = new Chart($('#visitors-chart'), {
        type: 'doughnut',
        data: {
            labels: ['Cabbage', 'Carrot', 'Cauliflower','Green Capsicum','Onion','Potato','Tomato','Brocoli'],
            datasets: [{
                backgroundColor: ['#6610f2', '#198754', '#ffc107','#D258F1','#866DE9','#0096F7','#FF76D8','#55EB63'],
                data: [200, 120, 150, 120, 260, 350, 260, 128],
            }]
        }
    })
    // end: Charts
})