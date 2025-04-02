var saldo = 1000;

function Saque(valor) {
    if(valor > saldo) {
        console.log("Valor do saque é superior ao saldo")
    }
    else if(valor > 700) {
        console.log("Valor do saque ultrapassa o limite!")
    }
    else {
        saldo = saldo - valor
    }
}

Saque(1001);
console.log(saldo)