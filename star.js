/*
definir um item que represente uma estrela, que preencha o fundo da tela dinamicamente, seja definido como o item com a maior profundidade no documento html,

estilo: brl
*/
/*
background0 = document.createElement("div");
background0.style = "
    background-color: rgba(255, 255, 255, 0);"
star = document.createElement("div");
*/

/*
definir um item que represente uma estrela, que preencha o fundo da tela dinamicamente, seja definido como o item com a maior profundidade no documento html,

estilo: brl
*/
// Criação da animação CSS para pulsar
let pusar = document.createElement("style");
pusar.type = "text/css";
pusar.innerText = `
  @keyframes pusar {
      0%, 100% {
        transform: scale(1);
        opacity: 0.8;
        box-shadow: 0 0 10px 5px rgba(255, 255, 255, 0.4),
                    0 0 20px 10px rgba(255, 255, 255, 0.2),
                    0 0 30px 15px rgba(255, 255, 255, 0.1);
      }
      50% {
        transform: scale(1.3);
        opacity: 1;
        box-shadow: 0 0 15px 7px rgba(255, 255, 255, 0.6),
                    0 0 25px 12px rgba(255, 255, 255, 0.4),
                    0 0 35px 17px rgba(255, 255, 255, 0.2);
      }
  }
`;
document.body.appendChild(pusar);

// Criação do fundo
const backgrnd = document.createElement("div");
backgrnd.style.position = "relative"; // Adiciona posição relativa ao fundo
backgrnd.style.backgroundColor = "rgba(255, 255, 255, 0)";

// Configuração da estrela
let star_size = 3;
let star = document.createElement("div");
star.style.width = `${star_size}px`;
star.style.height = `${star_size}px`;
star.style.background = "radial-gradient(circle, #fff 40%, rgba(255, 255, 255, 0.3) 60%, transparent 100%)";
star.style.borderRadius = "50%";
star.style.boxShadow = "0 0 10px 5px rgba(255, 255, 255, 0.4), 0 0 20px 10px rgba(255, 255, 255, 0.2), 0 0 30px 15px rgba(255, 255, 255, 0.1)";
star.style.animation = "pusar 4s infinite ease-in-out";
backgrnd.appendChild(star); // Adiciona a primeira estrela

// Cálculo da altura e largura para obter a quantidade de linhas
const largura = window.innerWidth;
const altura = window.innerHeight;
let linhas = Math.floor(altura / (star_size * 2.1)); // Calcula o número de linhas
for (let i = 1; i < linhas; i++) {
  let star_relev = star.cloneNode(true); // Clona a estrela
  
  // Define a posição da estrela
  star_relev.style.position = "absolute"; // Define posição absoluta para as estrelas clonadas
  star_relev.style.top = `${i * star_size * 2.1}px`; // Define o espaçamento vertical
  star_relev.style.left = `${Math.random() * (largura - star_size)}px`; // Define a posição horizontal aleatória
  
  backgrnd.appendChild(star_relev); // Adiciona a estrela clonada ao fundo
}

// Adiciona o fundo ao corpo do documento
document.body.appendChild(backgrnd);
document.body.style.backgroundColor = "black"; // Define a cor de fundo
