// Variável para armazenar informações da conta bancária //
let account = {
     owner: "",
     balance: 0,
     transactions:[]
    };

     // Função para criar conta bancária //
     function createAccount() {
         const ownerName = document.getElementById("ownerName").value;
          const initialBalance = parseFloat(document.getElementById("initialBalance").value);

          if (initialBalance < 0 || isNaN(initialBalance)) {
    alert("O saldo inicial deve ser um número positivo.");
    return;
}

account.owner = ownerName;
 account.balance = initialBalance;
  updateStatement("Conta criada com sucesso para " + ownerName + " com saldo inicial de R$ " + initialBalance.toFixed(2));
}

// Função para depositar dinheiro na conta //
function deposit() {
     const amount = parseFloat(prompt("Informe o valor a depositar:"));

     if (isNaN(amount) || amount <= 0) {
     alert("Por favor, insira um valor válido para depositar.");
     return;
     }

      account.balance += amount;
       account.transactions.push({ type: "Depósito", amount: amount });
        updateStatement("Depositado R$ " + amount.toFixed(2));
    }


// Função para sacar dinheiro da conta //

function withdraw() {
     const amount = parseFloat(prompt("Informe o valor a sacar:"));

if (isNaN(amount) || amount <= 0 || amount > account.balance) {
    alert("Valor inválido para saque ou saldo insuficiente.");
    return;
 }
 account.balance -= amount; 
 account.transactions.push({ type: "Saque", amount: amount });
  updateStatement("Sacado R$ " + amount.toFixed(2));
}
// Função para exibir o extrato da conta
function displayStatement() {
     let statement = "Extrato da Conta de " + account.owner + "<br>";
     statement += "Saldo Atual: R$ " + account.balance.toFixed(2) + "<br>";
      statement += "Transações:<br>";
  for (let i = 0; i < account.transactions.length; i++) {
 statement += "- " + account.transactions[i].type + ": R$ " + account.transactions[i].amount.toFixed(2) + "<br>";
 }

document.getElementById("statement").innerHTML = statement;}
// Função para atualizar o extrato da conta
function updateStatement(message) {
    document.getElementById("statement").innerHTML = message;}