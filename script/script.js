const inputs = document.querySelectorAll("input")
const spans = document.querySelectorAll("span")
const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


const campoTelefone = document.getElementById('input-tel');
campoTelefone.addEventListener('input', function () {
    mascaraTelefone(campoTelefone.value);
});

inputs.addEventListener('submit', (event) => {
    event.preventDefault()
    validar_nome()
    validar_email()
    mascaraTelefone()

})


function set_erro(index){
    inputs[index].style.border = '4px solid #f00'
    spans[index].style.display = 'block'
}

function remover_erro (index){
    inputs[index].style.border = ''
    spans[index].style.display = 'none'
}


function validar_nome(){

    if(inputs[0].value.length < 3){
        set_erro(0)
    }
    else{
        remover_erro(0)
    }
}

function validar_email(){

    if(validRegex.test(inputs[1].value)){
        remover_erro(1)
    }
    else{
        set_erro(1)
    }
}

function mascaraTelefone(textoInputTelefone) {
    //const texto = inputs[2].value;
    const textoApenasNumeros = textoInputTelefone.replace(/\D/g, '').substring(0, 11);

    let telefoneFormatado = textoApenasNumeros.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');

    if (textoApenasNumeros.length < 11) {
        telefoneFormatado = textoApenasNumeros.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    }

    inputs[2].value = telefoneFormatado;
}

function enviarParaWhatsApp() {
    const nome = document.getElementById('input-nome').value;
    const email = document.getElementById('input-email').value;
    const telefone = document.getElementById('input-tel').value;
    const mensagem = document.getElementById('input-msg').value;

    const texto = `Nome: ${nome}\nE-mail: ${email}\nTelefone: ${telefone}\nMensagem: ${mensagem}`;
    const textoCodificado = encodeURIComponent(texto);
    const numeroWhatsApp = '8196272039'; // Insira o número de telefone do WhatsApp aqui (apenas números)
    const url = `https://wa.me/${numeroWhatsApp}?text=${textoCodificado}`;

    window.open(url, '_blank');
}

