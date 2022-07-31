let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement;
let soma = document.getElementById('soma')! as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo')as HTMLInputElement;
let saldoTotal = 0;
limparSaldo();
function somarAoSaldo(soma: number){
    if(campoSaldo){
        saldoTotal += soma
        campoSaldo.innerHTML = saldoTotal.toString();
        limparSaldo()
    }
    
}
function limparCampoSoma(){
    soma.value = "";
}
function limparSaldo() {
    if(campoSaldo){
        saldoTotal = 0;
        campoSaldo.innerHTML = saldoTotal.toString();
    }
    
}
if(botaoAtualizar){
    botaoAtualizar.addEventListener('click', () => {
        somarAoSaldo(Number(soma.value));
        
    });
}
botaoLimpar.addEventListener('click', () => {
    limparSaldo();
});
*/
/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */
