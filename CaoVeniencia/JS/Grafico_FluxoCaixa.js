/* Animações desenvolvidas por: Eduardo Zang */

// Obtém os dados da tabela
  var labels = [
    'ALUGUEL', 'INTERNET', 'IPTU', 'ÁGUA', 'LUZ', 'MANUTENÇÃO', 'FUNCIONÁRIOS',
    'MODA CANINA', 'ACESSÓRIOS', 'BRINQUEDOS', 'PRODUTOS DE BANHO', 'SAÚDE ANIMAL',
    'RAÇÃO', 'MÓVEIS/EQUIPAMENTOS'
  ];
  
  var values = [
    8000, 100, 250, 800, 600, 200, 13791, 1900, 3150, 3150, 2000, 2000, 1200, 2009.10
  ];

  // Cria o gráfico de barras
  var ctx = document.getElementById('chart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Valor',
        data: values,
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // Cor das barras
        borderColor: 'rgba(75, 192, 192, 1)', // Cor da borda das barras
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function (value) {
              return 'R$' + value; // Adiciona o prefixo 'R$' aos valores do eixo Y
            }
          }
        }
      }
    }
  });

