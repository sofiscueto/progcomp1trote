function calcular(){
        // vamos criar duasvariáveis
        // JS as variáveis não possuem tipo
    let mascote, homenagem, leite, kitAvulso, suplementoAvulso
        // recupera o valo do mascote digitado pelo usuário
    mascote = document.getElementById("mascote").value
        // recupera o valo da homenagem digitado pelo usuário
    homenagem = document.getElementById("homenagem").value
        // recupera o valo da homenagem digitado pelo usuário
    leite = document.getElementById("leite").value
        // recupera o valo avulso de kits digitado pelo usuário
    kitAvulso = document.getElementById("kitAvulso").value
        // recupera o valo avulso de suplemento digitado pelo usuário
    suplementoAvulso = document.getElementById("suplementoAvulso").value
        // calcular a soma
    let soma = Number(mascote) + Number(homenagem) + (2* Number(leite)) + (30* Number(kitAvulso)) + (15 * Number(suplementoAvulso))
        //retorna o valor ao html
        //template string
    document.getElementById("soma").innerHTML = `A soma é ${soma}`
}

