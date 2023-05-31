/* Animações desenvolvidas por: Eduardo Zang */

function buscarCEP() {
  var cepInput = document.getElementById("cepInput").value;
  var url = "https://viacep.com.br/ws/" + cepInput + "/json/";

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.erro) {
        // Exibe o modal de erro com a mensagem adequada
        exibirModalErro("CEP não encontrado.");
      } else {
        var resultDiv = document.getElementById("result");

        // Obtém o último número do CEP
        var ultimoNumero = parseInt(cepInput.charAt(cepInput.length - 1));

        // Calcula o valor do frete
        var frete;
        if (ultimoNumero === 0) {
          frete = 10.00; // Valor fixo para o último número 0
        } else {
          frete = ultimoNumero * 2;
        }

        resultDiv.innerHTML = "<strong>Endereço:</strong><br>" +
          data.logradouro + ", " +
          data.bairro + "<br>" +
          data.localidade + " - " +
          data.uf + "<br>" +
          "CEP: " + data.cep +
          "<br><b>Valor do frete: R$ " + frete.toFixed(2) + "</b>";
      }
    })
    .catch(error => {
      console.log("Erro ao buscar o CEP:", error);
      // Exibe o modal de erro genérico
      exibirModalErro("Erro ao buscar o CEP.");
    });
}

function exibirModalErro(message) {
  var errorMessageElement = document.getElementById("errorMessage");
  errorMessageElement.innerText = message;
  $('#errorModal').modal('show'); // Exibe o modal de erro usando o jQuery
}

function checkCEPInput() {
      var cepInput = document.getElementById("cepInput");
      var buscarButton = document.getElementById("buscarButton");

      if (cepInput.value.length >= 8) {
        buscarButton.disabled = false;
      } else {
        buscarButton.disabled = true;
      }
    }
