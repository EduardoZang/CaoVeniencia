/* Animações desenvolvidas por: Eduardo Zang */

// Aguarda o carregamento completo da página
window.addEventListener('DOMContentLoaded', function() {
  // Obtém o formulário de pagamento pelo ID
  var paymentForm = document.getElementById('payment-form');

  // Adiciona um ouvinte de evento para o envio do formulário
  paymentForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtém o valor selecionado do método de pagamento
    var paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;

    // Verifica o método de pagamento selecionado
    if (paymentMethod === 'pix') {
      // Lógica para gerar o QR Code do PIX
      var qrcodeContainer = document.getElementById('qrcode');
      qrcodeContainer.style.display = 'block';
    } else if (paymentMethod === 'creditCard') {
      // Lógica para o pagamento com cartão de crédito
      var qrcodeContainer = document.getElementById('qrcode');
      qrcodeContainer.style.display = 'none';
      qrcodeContainer.innerHTML = '';
      alert('Pagamento com cartão de crédito selecionado!');
    }
  });
});

// Aguarda o carregamento completo da página
window.addEventListener('DOMContentLoaded', function() {
  // Obtém o formulário de pagamento pelo ID
  var paymentForm = document.getElementById('payment-form');

  // Adiciona um ouvinte de evento para o envio do formulário
  paymentForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtém o valor selecionado do método de pagamento
    var paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;

    // Verifica o método de pagamento selecionado
    if (paymentMethod === 'pix') {
      // Gera um número aleatório para o QR Code
      var randomCode = Math.floor(Math.random() * 1000000000);
      
      // Obtém o elemento de exibição do QR Code
      var qrcodeElement = document.getElementById('qrcode');
      
      // Cria o QR Code usando a biblioteca qrcode.js
      new QRCode(qrcodeElement, {
        text: randomCode.toString(),
        width: 128,
        height: 128
      });
      
      // Exibe o QR Code na tela
      qrcodeElement.style.display = 'block';
      
      // Remove campos de entrada de cartão de crédito, se existirem
      removeCreditCardFields();
    } else if (paymentMethod === 'creditCard') {
      // Remove campos de entrada de cartão de crédito, se já existirem
      removeCreditCardFields();

      // Cria os campos de entrada para os dados do cartão de crédito
      createCreditCardFields();
    } else {
      // Oculta o QR Code se outro método de pagamento for selecionado
      var qrcodeElement = document.getElementById('qrcode');
      qrcodeElement.style.display = 'none';

      // Remove campos de entrada de cartão de crédito, se existirem
      removeCreditCardFields();
    }
  });

  // Função para remover campos de entrada de cartão de crédito
  function removeCreditCardFields() {
    var creditCardFields = document.getElementsByClassName('credit-card-field');

    // Remove os campos de entrada de cartão de crédito
    while (creditCardFields.length > 0) {
      creditCardFields[0].parentNode.removeChild(creditCardFields[0]);
    }
  }

  // Função para criar campos de entrada de cartão de crédito
  function createCreditCardFields() {
    var creditCardContainer = document.getElementById('credit-card-container');

    // Cria os campos de entrada para número do cartão, validade e código de segurança
    var cardNumberInput = document.createElement('input');
    cardNumberInput.type = 'text';
    cardNumberInput.className = 'credit-card-field';
    cardNumberInput.placeholder = 'Número do cartão';

    var expirationInput = document.createElement('input');
    expirationInput.type = 'text';
    expirationInput.className = 'credit-card-field';
    expirationInput.placeholder = 'Validade (MM/AA)';

    var cvvInput = document.createElement('input');
    cvvInput.type = 'text';
    cvvInput.className = 'credit-card-field';
    cvvInput.placeholder = 'Código de segurança';

       // Adiciona os campos de entrada ao contêiner
    creditCardContainer.appendChild(cardNumberInput);
    creditCardContainer.appendChild(expirationInput);
    creditCardContainer.appendChild(cvvInput);
  }
});

