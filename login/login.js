function validarLogin() {

    // Obter os valores
    var email = document.getElementById("email-input").value;
    var senha = document.getElementById("senha-input").value;

    // Verificação
    if (email !== "" && senha !== "") {
        // Sucesso
        alert("Seu Login foi concluído com sucesso!");
        
        location.href = "../index.html";
    } else {
        //Erro
        alert("Por favor, preencha todos os campos do formulário.");
    }
}