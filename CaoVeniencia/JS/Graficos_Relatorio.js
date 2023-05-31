/* Animações desenvolvidas por: Eduardo Zang */

// Seleciona o elemento do formulário
var form = document.getElementById("form");

// Seleciona os elementos dos gráficos
var pieChart = document.getElementById('myChart').getContext('2d');
var barChart = document.getElementById('ctxBar').getContext('2d');

// Define os dados iniciais dos gráficos
var initialDespesas = 1500;
var initialReceitas = 2400;

// Cria os gráficos
var myChart = new Chart(pieChart, {
  type: 'pie',
  data: {
    labels: ['Despesas', 'Receitas'],
    datasets: [{
      label: 'Fluxo de Caixa',
      data: [initialDespesas, initialReceitas],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: 'Fluxo de Caixa'
    }
  }
});

var ctxBar = new Chart(barChart, {
  type: 'bar',
  data: {
    labels: ['Despesas', 'Receitas', 'Lucro/Prejuízo'],
    datasets: [{
      label: 'Fluxo de Caixa',
      data: [initialDespesas, initialReceitas, initialReceitas - initialDespesas],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(75, 192, 192, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(75, 192, 192, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: 'Fluxo de Caixa'
    }
  }
});

// Adiciona um evento "submit" para atualizar o gráfico de pizza e de barras
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Previne a página de recarregar ao enviar o formulário

  // Obtém os valores do formulário
  var despesas = parseFloat(document.getElementById("despesas").value);
  var receitas = parseFloat(document.getElementById("receitas").value);

  // Atualiza os dados dos gráficos de pizza e de barras
  myChart.data.datasets[0].data = [despesas, receitas];
  ctxBar.data.datasets[0].data = [despesas, receitas, receitas - despesas];
  myChart.update();
  ctxBar.update();
});