const ctx = document.getElementById('myChart');

const data = {
  labels: [
    'Jogos',
    'Livros',
    'Contas'
  ],
  datasets: [{
    label: 'Gastos no mês',
    data: [300, 50, 100],
    backgroundColor: [
      '#5C62FA',
      '#FCC735',
      '#0C7C59'
    ],
    borderWidth: 0,
    hoverOffset: 4
  }]
};

const plugin = {
  id: 'customCanvasBackgroundColor',
  beforeDraw: (chart, args, options) => {
    const {ctx} = chart;
    ctx.save();
    ctx.globalCompositeOperation = 'destination-over';
    ctx.fillStyle = options.color || '#99ffff';
    ctx.fillRect(0, 0, chart.width, chart.height);
    ctx.restore();
  }
};

  
new Chart(ctx, {  
  type: 'doughnut',
  data: data,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
          display: true,
          ticks: {
              min:0,
              max:100
          },
      }]
  },
    plugins:  {
      legend: {
        display: true,
        position: 'bottom',
      labels: {
          color: 'rgb(255, 255, 255)',
          fontSize: 20
      },
    },
      customCanvasBackgroundColor: {
        color: 'lightGreen',
      }
      [plugin]
    }
  },

});
