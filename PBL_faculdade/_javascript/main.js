function validar()
{
    var nome = document.getElementById("nome");
    var senha = document.getElementById("pass");

    if(nome.value.trim() == "" || senha.value.trim() == "")
    {
        alert("Preencha todos os campos!");
        return false;
    }
    else
    {
        true;
    }
}