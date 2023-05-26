function validarFormulario() {

    // Obter os valores
    var nome = document.getElementById("nome-input").value;
    var sexoFeminino = document.getElementById("sexo-input-feminino").checked;
    var sexoMasculino = document.getElementById("sexo-input-masculino").checked;
    var email = document.getElementById("email-input").value;
    var senha = document.getElementById("senha-input").value;

    // Verificação
    if (nome !== "" && (sexoFeminino || sexoMasculino) && email !== "" && senha !== "") {
        // Sucesso
        alert("Seu cadastro foi concluído com sucesso!");
        
        location.href = "../login/login.html";
    } else {
        //Erro
        alert("Por favor, preencha todos os campos do formulário.");
    }
}