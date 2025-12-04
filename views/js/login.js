function login() {
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();

    // Checa se o email não está vazio e senha fixa
    if (email !== "" && senha === "12345678") {
        window.location.href = "inicioCliente.html"; // Redireciona para o painel
    } else {
        document.getElementById("erro").style.display = "block";
    }
}