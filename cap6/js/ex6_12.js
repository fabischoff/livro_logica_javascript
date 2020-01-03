function verificarPalindromo() {

    var inPalindromo = document.getElementById("inPalindromo");
    var outSaida = document.getElementById("outSaida");
    var palindroOriginal = inPalindromo.value;


    var palindromo = palindroOriginal.replace(/ /g, "").toLowerCase();;

    var copiaPalindromo = palindromo.slice();
    console.log("TCL: verificarPalindromo -> palindromo", palindromo)
    console.log("TCL: verificarPalindromo -> copiaPalindromo", copiaPalindromo)

    var i, j = 0;
    var pal = true;

    for (i = 0, j = palindromo.length - 1; i < palindromo.length; i++, j--) {
        if (palindromo.charAt(i) != copiaPalindromo.charAt(j)) {
            var pal = false;        
        } 
    }

    if(pal) outSaida.textContent = palindroOriginal + " é um Palíndromo.";





}

var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarPalindromo);