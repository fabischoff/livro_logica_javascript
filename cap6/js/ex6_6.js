function validarSenha(arguments) {
    var inSenha = document.getElementById("inSenha");
    var outErro = document.getElementById("outErro");

    var senha = inSenha.value;

    var erros = [];
    console.log(senha.lenght);

    if (senha.length < 8 || senha.length > 15) {
        erros.push("possuir entre 8 e 15 caracteres\n");
    }

    if (senha.match(/[0-9]/g) == null) {
        erros.push("possuir números (no mínimo 1)\n");
    }

    if (!senha.match(/[a-z]/g)) {
        erros.push("possuir letras minusculas (no mínimo 1)\n");
    }

    if (!senha.match(/[A-Z]/g) || !senha.match(/[A-Z]/g) == 1) {
        erros.push("possuir letras maiúsculas (no mínimo 2)\n");
    }

    if (!senha.match(/[\W|_]/g)) {
        erros.push("possuir símbolos (no mínimo 1)\n");
    }
    
    if(erros.length == 0){
        outErro.textContent = "Ok!, senha válida!";
    }else {
        outErro.textContent = "Erro! A senha deve : \n" + erros.join("");
    }
   // console.log(outErro.textContent = "Erro... A senha deve " + erros.join(","));

}

var btGerar = document.getElementById("btGerar");
btGerar.addEventListener("click", validarSenha);