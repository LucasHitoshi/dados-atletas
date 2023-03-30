class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome
        this.idade = idade
        this.peso = peso
        this.altura = altura
        this.notas = notas
        this.categoria = undefined
        this.imc = undefined
        this.media = undefined
    }

    // Calcula a categoria do atleta
    calculaCategoria() {
        let idade = this.idade

        if (idade >= 9 && idade <= 11) {
            this.categoria = "Infantil"
        } else if (idade <= 13) {
            this.categoria = "Juvenil"
        } else if (idade <= 15) {
            this.categoria = "Intermediário"
        } else if (idade <= 30) {
            this.categoria = "Adulto"
        } else {
            this.categoria = "Sem categoria"
        }
    }

    // Calcula o IMC do atleta
    calculaIMC() {
        this.imc = this.peso / (this.altura * this.altura)
    }

    // Calcula a média válida do atleta
    calculaMediaValida() {
        this.media = this.notas.sort(
            function(a, b) {
                return a - b
            }
        ).slice(1, 4).reduce(
            function(somaNotas, notaAtual) {
                return somaNotas + notaAtual
            }, 0
        ) / 3;
    }

    // Retorna ao nome do atleta
    obtemNomeAtleta() {
        return this.nome
    }

    // Retorna a idade do atleta
    obtemIdadeAtleta() {
        return this.idade
    }

    // Retorna o peso do atleta
    obtemPesoAtleta() {
        return this.peso
    }

    // Retorna a altura do atleta
    obtemAlturaAtleta() {
        return this.altura
    }

    // Retorna as notas do atleta
    obtemNotasAtleta() {
        return this.notas
    }

    // Retorna a categoria do atleta
    obtemCategoria() {
        if (this.categoria !== undefined) {
            return this.categoria
        } else {
            console.log("A categoria do atleta não foi calculada ainda.")
            return undefined
        }
    }

    // Retorna o IMC do atleta
    obtemIMC() {
        if (this.imc !== undefined) {
            return this.imc
        } else {
            console.log("O IMC do atleta não foi calculado ainda.")
            return undefined
        }
    }

    // Retorna a média válida do atleta
    obtemMediaValida() {
        if (this.media !== undefined) {
            return this.media
        } else {
            console.log("A média válida do atleta não foi calculada ainda.")
            return undefined
        }
    }
}


// Criando uma instância da classe Atleta
const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]
);

// Calculando as informações do atleta
atleta.calculaCategoria()
atleta.calculaIMC()
atleta.calculaMediaValida()

// Exibindo os resultados através do log
console.log(`Nome: ${atleta.obtemNomeAtleta()}`)
console.log(`Idade: ${atleta.obtemIdadeAtleta()}`)
console.log(`Peso: ${atleta.obtemPesoAtleta()}`)
console.log(`Altura: ${atleta.obtemAlturaAtleta()}`)
console.log(`Notas: ${atleta.obtemNotasAtleta()}`)
console.log(`Categroria: ${atleta.obtemCategoria()}`)
console.log(`IMC: ${atleta.obtemIMC()}`)
console.log(`Média Válida: ${atleta.obtemMediaValida()}`)
