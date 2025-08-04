let gerarNumero;
let tentativas;
//const maximoPalpite = 4;
let palpiteRepetido = [];

function iniciarJogo() {
    gerarNumero = Math.floor(Math.random() * 10) + 1;
    console.log(gerarNumero)
    tentativas = 0;
    //maximoPalpite = 0;
    document.getElementById("campoImagem").innerHTML ="";
    document.getElementById("textoDivImagem").innerText = "Iniciando o Jogo ....";
    const input = document.getElementById("palpite");
    input.value = "";
    //input.placeholder = "Palpite: ";
}


function verificarPalpite() {
    let numeroUsuario = parseInt(document.getElementById("palpite").value);

    //palpiteRepetido.push(numeroUsuario);
    //console.log(palpiteRepetido)

    console.log(numeroUsuario)

        tentativas++

            if(palpiteRepetido.includes(numeroUsuario)) {
                document.getElementById("textoDivImagem").innerText = `Palpite Repetido, tente novamente`;
                document.getElementById("campoImagem").innerHTML = '<iframe src="https://giphy.com/embed/WDpgbGctTnxuw" width="480" height="250" style="border-radius: 12px" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';
            } else if (numeroUsuario < 0 || numeroUsuario > 10) {
                document.getElementById("textoDivImagem").innerText = "Palpite invalido, o Palpite deve ser entre 0 e 10"
                document.getElementById("campoImagem").innerHTML = '<iframe src="https://giphy.com/embed/spfi6nabVuq5y" width="480" height="389" style="border-radius: 12px" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>'
            } else if (tentativas === 4) {
                document.getElementById("textoDivImagem").innerText = "Quantidade de Palpites Excedidos. Reinicie seu jogo"
                document.getElementById("campoImagem").innerHTML = '<iframe src="https://giphy.com/embed/ehOWm8vxKMcZeEvveE" width="480" height="480" style="border-radius: 12px" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>'
                //iniciarJogo();
            } else {
                palpiteRepetido.push(numeroUsuario)

                if (gerarNumero === numeroUsuario) {
                    document.getElementById("textoDivImagem").innerText = `ACERTO! ✅ Quantidade palpites: ${tentativas}`;
                    document.getElementById("campoImagem").innerHTML = '<iframe src="https://giphy.com/embed/1jY41jR11D3xhZxGUv" width="480" height="322" style="border-radius: 12px" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';
                } else if (gerarNumero > numeroUsuario) {
                    document.getElementById("textoDivImagem").innerText = `O numero é maior ⬆️`
                    document.getElementById("campoImagem").innerHTML = '<iframe src="https://giphy.com/embed/iFsqrn1bRhAv2tMA85" width="480" height="360" style="border-radius: 12px" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';
                } else {
                    document.getElementById("textoDivImagem").innerText = `É menor ⬇️`
                    document.getElementById("campoImagem").innerHTML = '<iframe src="https://giphy.com/embed/NV3uocgM6trznuD2jD" width="480" height="480" style="border-radius: 12px" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';
            }
        }
}

window.onload = iniciarJogo;