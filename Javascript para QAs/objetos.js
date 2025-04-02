var carro = {
    nome: "BMW X6",
    valor: "R$ 1.000.000.00",
    ano: "2025",
    mostraAno: function() {
        console.log(`O ano da ${this.nome} é ${this.ano}!`)
    }
}


carro.mostraAno()
