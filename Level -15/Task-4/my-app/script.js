document.getElementById("fetchBtn").addEventListener("click", async () => {
    const start = document.getElementById("startDate").value;
    const end = document.getElementById("endDate").value;
  
    if (!start || !end) {
      alert("Please select both start and end dates.");
      return;
    }
  
    const res = await fetch("http://localhost:5000/api/weather/average", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ startDate: start, endDate: end }),
    });
  
    const data = await res.json();
    document.getElementById("output").innerText = `Average Temp: ${data.average}°C`;
  
    drawChart(data.records);
  });
  
  function drawChart(records) {
    const ctx = document.getElementById("chart").getContext("2d");
    if (window.tempChart) window.tempChart.destroy();
  
    window.tempChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: records.map(r => r.date),
        datasets: [{
          label: 'Temperature (°C)',
          data: records.map(r => r.temp),
          borderColor: 'orange',
          fill: false,
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: false
          }
        }
      }
    });
  }
  