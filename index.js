const readline = require('readline');

async function getInput(prompt) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve, reject) => {
        rl.question(prompt, (input) => {
            resolve(input);
            rl.close();
        });
    });
}

function rank(vitorias, derrotas) {
    let pontos = vitorias - derrotas;
    switch (true) {
      case pontos <= 10:
        return "Ferro";
      case pontos >= 11 && pontos <= 20:
        return "Bronze";
      case pontos >= 21 && pontos <= 50:
        return "Prata";
      case pontos >= 51 && pontos <= 80:
        return "Ouro";
      case pontos >= 81 && pontos <= 90:
        return "Diamante";
      case pontos >= 91 && pontos <= 100:
        return "Lendário";
      case pontos >= 101:
        return "Imortal";
      default:
        return "Nível não determinado";
    }
  }

  async function calcularNivelHeroi() {
    try {
        const entradaVitorias = await getInput("Quantas vitórias o Heroi possui ? : ");
        const entradaDerrotas = await getInput("Quantas derrotas ? : ");

        const vitorias = parseInt(entradaVitorias);
        const derrotas = parseInt(entradaDerrotas);

        console.log("O Herói tem de saldo de "+(vitorias - derrotas)+" está no nível de "+rank(vitorias, derrotas)) ;

        const repetir = await getInput("Deseja calcular o nível de outro Herói? (s/n): ");
        if (repetir.toLowerCase() === 's') {
            // Chamada recursiva
            await calcularNivelHeroi();
        } else {
            console.log("Programa encerrado.");
        }

    } catch (error) {
        console.error("Ocorreu um erro:", error);
    }
};

calcularNivelHeroi();
//let item = inventario.find(item => item.nome === nome);
