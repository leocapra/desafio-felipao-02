let jogador = vitorias(101, 3)
let nivel;

if (saldoVitorias <= 10 && saldoVitorias >= 0) {
    nivel = "Ferro"
} else if (saldoVitorias <= 20 && saldoVitorias >= 11) {
    nivel = "Bronze"
} else if (saldoVitorias <= 50 && saldoVitorias >= 21) {
    nivel = "Prata"
} else if (saldoVitorias <= 80 && saldoVitorias >= 51) {
    nivel = "Ouro"
} else if (saldoVitorias <= 90 && saldoVitorias >= 81) {
    nivel = "Diamante"
} else if (saldoVitorias <= 100 && saldoVitorias >= 91) {
    nivel = "Lendário"
} else if (saldoVitorias >= 101) {
    nivel = "Imortal"
}

console.log(`O Herói tem de saldo de vitórias ${saldoVitorias} está no nível ${nivel}`)


function vitorias(vitorias, derrotas) {
    saldoVitorias = vitorias - derrotas
    return saldoVitorias
}