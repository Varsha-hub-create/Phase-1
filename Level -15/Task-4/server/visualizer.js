import Weather from './weatherModel.js';
import Chart from 'cli-chart';
import './db.js';

export async function showTempChart() {
    const data = await Weather.find().sort({ timestamp: -1 }).limit(10);
    const chart = new Chart({ xlabel: 'Date', ylabel: '°C', width: 60, height: 20 });

    data.reverse().forEach(d => {
        chart.addBar(d.temperature, 'green');
    });

    chart.draw();
}
