document.addEventListener('DOMContentLoaded', () => {
    // Fetch chart data
    fetch('/api/chart')
        .then(response => response.json())
        .then(data => {
            const ctx = document.getElementById('myChart').getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: data.labels,
                    datasets: [{
                        label: 'Sample Data',
                        data: data.values,
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        });

    // Fetch grid data
    fetch('/api/grid')
        .then(response => response.json())
        .then(data => {
            const tbody = document.querySelector('#dataGrid tbody');
            data.forEach(row => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${row.id}</td>
                    <td>${row.name}</td>
                    <td>${row.value}</td>
                `;
                tbody.appendChild(tr);
            });
        });
});
