
// Función para actualizar el gráfico con nuevas series de datos aleatorios
function actualizarGrafico(data1, data2) {

    myChart.data.datasets[0].data = data1;
    myChart.data.datasets[1].data = data2;
    myChart.update();
}


// Función para actualizar el gráfico con nuevas series de datos aleatorios
function actualizarGrafico3(data1, data2) {
    myChart3.data.datasets[0].data = data1;
    myChart3.data.datasets[1].data = data2;
    myChart3.update();
}


// Configurar el gráfico inicial
var ctx = document.getElementById('line-chart2').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Ene.', 'Feb.', 'Mar.', 'Abr.', 'May.', 'Jun.', 'Jul.', 'Ago.', 'Sep.', 'Oct', 'Nov.', 'Dic.'],

        datasets: [{
            label: 'Inflación mensual',
            data: [],
            backgroundColor: 'rgba(255, 99, 132, 0.2)', // Color de fondo de las barras
            borderColor: 'rgba(255, 99, 132, 1)', // Color del borde de las barras
            borderWidth: 1,
            fill: false
        },
        {
            label: 'Sueldo ',
            data: [],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            fill: false
        }]
    },
    options: {
        responsive: true,
        // maintainAspectRatio: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    },
},
);

// Configurar el gráfico inicial
var ctx = document.getElementById('line-chart3').getContext('2d');
var myChart3 = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Ene.', 'Feb.', 'Mar.', 'Abr.', 'May.', 'Jun.', 'Jul.', 'Ago.', 'Sep.', 'Oct', 'Nov.', 'Dic.'],

        datasets: [{
            label: 'Inflación acumulada',
            data: [],
            backgroundColor: 'rgba(255, 99, 132, 0.2)', // Color de fondo de las barras
            borderColor: 'rgba(255, 99, 132, 1)', // Color del borde de las barras
            borderWidth: 1,
            fill: false
        },
        {
            label: 'Sueldo acumulado',
            data: [],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            fill: false
        }]
    },
    options: {
        responsive: true,
        // maintainAspectRatio: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }

    }
});


