const form = document.getElementById("form");

function validacao(a, b){
    return parseInt(a) > parseInt(b)
};

form.addEventListener ("submit", function(e){
    e.preventDefault();

    const campoA = document.getElementById("campoA");
    const campoB = document.getElementById("campoB");
    const mensagemSucesso = "O formulário foi enviado com sucesso!"
    const mensagemErro = "O valor do campo B precisa ser maior que do campo A!"

    if (validacao (campoB.value, campoA.value) === true){
        const containerSucessMessage = document.querySelector(".mensagemDeSucesso");
        containerSucessMessage.innerHTML = mensagemSucesso;
        containerSucessMessage.style.display = "block";
        campoA.value = ""
        campoB.value = ""
        const containerErrorMessage = document.querySelector(".mensagemDeErro");
        containerErrorMessage.innerHTML = mensagemErro;
        containerErrorMessage.style.display = "none";
        campoA.style.border = "";

    } else {
        const containerErrorMessage = document.querySelector(".mensagemDeErro");
        containerErrorMessage.innerHTML = mensagemErro;
        containerErrorMessage.style.display = "block";
        campoA.style.border = "1px solid red";

    }
})

console.log(form);
