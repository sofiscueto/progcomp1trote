function calcular(){
    // vamos criar duasvariáveis
    // JS as variáveis não possuem tipo
    let mascote, homenagem
    // recupera o valo do mascote digitado pelo usuário
    mascote = document.getElementById("mascote").value
    alert(mascote)
    // recupera o valo da homenagem digitado pelo usuário
    homenagem = document.getElementById("homenagem").value
    alert(homenagem)
    // calcular a soma
    let soma = Number(mascote) + Number(homenagem)
    alert(soma)
}

