const nomeElement = document.getElementById('nome');
const senhaElement = document.getElementById('senha');
const loginForm = document.getElementById('login_form');
const caixaEletronico = document.getElementById('caixa_eletronico');
const usuarioNomeElement = document.getElementById('usuario_nome');
const saldoElement = document.getElementById('saldo');
const extratoElement = document.getElementById('extrato');
const botaoSaldo = document.getElementById('botao_saldo');
const botaoExtrato = document.getElementById('botao_extrato');
const botaoSaque = document.getElementById('botao_saque');
const botaoDeposito = document.getElementById('botao_deposito');
const botaoTransferencia = document.getElementById('botao_transferencia');
const botaoSair = document.getElementById('botao_sair');

let saldo = 1000; 
const senhaCorreta = '3589';

function mostrarCaixaEletronico(nomeUsuario) {
    usuarioNomeElement.textContent = nomeUsuario;
    loginForm.classList.add('hidden');
    caixaEletronico.classList.remove('hidden');
}

function erro(mensagem) {
    alert(mensagem);
}

function validarSenha() {
    return senhaElement.value === senhaCorreta;
}

function exibirSaldo() {
    saldoElement.textContent = saldo.toFixed(2);
}

function exibirExtrato() {
    extratoElement.textContent = 'Transações fictícias';
}

function sacar() {
    const valorSaque = parseFloat(prompt('Digite o valor para sacar:'));
    if (isNaN(valorSaque) || valorSaque <= 0) {
        erro('Operação não autorizada. Valor de saque inválido.');
    } else if (valorSaque > saldo) {
        erro('Operação não autorizada. Saldo insuficiente.');
    } else {
        saldo -= valorSaque;
        exibirSaldo();
        alert(`Saque de R$${valorSaque.toFixed(2)} realizado com sucesso.`);
    }
}

function depositar() {
    const valorDeposito = parseFloat(prompt('Digite o valor para depositar:'));
    if (isNaN(valorDeposito) || valorDeposito <= 0) {
        erro('Operação não autorizada. Valor de depósito inválido.');
    } else {
        saldo += valorDeposito;
        exibirSaldo();
        alert(`Depósito de R$${valorDeposito.toFixed(2)} realizado com sucesso.`);
    }
}

function transferir() {
    const numeroConta = prompt('Digite o número da conta de destino:');
    const valorTransferencia = parseFloat(prompt('Digite o valor a ser transferido:'));
    if (isNaN(valorTransferencia) || valorTransferencia <= 0) {
        erro('Operação não autorizada. Valor de transferência inválido.');
    } else if (valorTransferencia > saldo) {
        erro('Operação não autorizada. Saldo insuficiente.');
    } else {
        saldo -= valorTransferencia;
        exibirSaldo();
        alert(`Transferência de R$${valorTransferencia.toFixed(2)} para a conta ${numeroConta} realizada com sucesso.`);
    }
}

function sair() {
    const nomeUsuario = nomeElement.value;
    alert(`${nomeUsuario}, foi um prazer ter você por aqui!`);
    window.location.reload(); 
}

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    if (validarSenha()) {
        const nomeUsuario = nomeElement.value;
        mostrarCaixaEletronico(nomeUsuario);
    } else {
        erro('Senha incorreta. Tente novamente.');
    }
});

botaoSaldo.addEventListener('click', exibirSaldo);
botaoExtrato.addEventListener('click', exibirExtrato);
botaoSaque.addEventListener('click', sacar);
botaoDeposito.addEventListener('click', depositar);
botaoTransferencia.addEventListener('click', transferir);
botaoSair.addEventListener('click', sair);
