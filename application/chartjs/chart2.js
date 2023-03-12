// setup 
const data = {
    labels: ['20-59', '>60'],
    datasets: [{
        label: '# Rentan Usia Yang Terkena Diabetes Tipe 2',
        data: [26.781, 1.721],
        backgroundColor: [
            'rgba(255, 26, 104, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 158, 0, 0.2)',
            'rgba(0, 0, 0, 0.2)'
            // 'rgba(153, 102, 255, 0.2)'
        ],
        borderColor: [
            'rgba(255, 26, 104, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 158, 0, 1)',
            'rgba(0, 0, 0, 1)'
            // 'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
    }]
};

// config 
const config = {
    type: 'doughnut',
    data,
    options: {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

// render init block
const doughnut = new Chart(
    document.getElementById('doughnut'),
    config
);

// Instantly assign Chart.js version
const chartVersion = document.getElementById('chartVersion');
chartVersion.innerText = Chart.version;