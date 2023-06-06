const texArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");


function botonEncriptar(){
    const textoEncriptado = encriptar(texArea.value);
    mensaje.value =textoEncriptado;
    texArea.value ="";
    mensaje.style.backgroundImage ="none";
}

function encriptar(stringEncriptada) {
    let matrixCodigo = [
     ["e", "enter"],
     ["i", "imes"],
     ["a", "ai"],
     ["o", "ober"], 
     ["u", "ufat"]
    ];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i= 0; i < matrixCodigo.length; i++){
        if(stringEncriptada.includes(matrixCodigo[i][0])){ 
            stringEncriptada = stringEncriptada.replace(matrixCodigo[i][0], matrixCodigo[i][1])
         }

    }
    return stringEncriptada
}

function botonDesencriptar(){
    const textoEncriptado = desencriptar(texArea.value)
    mensaje.value =textoEncriptado
    texArea.value ="";

}


function desencriptar(stringDesencriptada){
    let matrixCodigo = [["e", "enter"], ["i","imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i= 0; i < matrixCodigo.length; i++){
        if(stringDesencriptada.includes(matrixCodigo[i][1])){ 
            stringDesencriptada = stringDesencriptada.replaceAll(matrixCodigo[i][1], matrixCodigo[i][0])
         }

    }
    return stringDesencriptada
}

function copiarTexto() {
    const textoCopiado = mensaje.value;
    navigator.clipboard.writeText(textoCopiado).then(function() {
        alert("Texto copiado al portapapeles: " + textoCopiado);
    }, function() {
        console.error("No se pudo copiar el texto al portapapeles.");
    });
}

const textoInput = document.getElementById("texto-input");

textoInput.addEventListener("input", function() {
  const texto = textoInput.value;

  if (/[A-ZÁÉÍÓÚÜ-áéíóú]/.test(texto)) {
    alert("Solo minúsculas y sin acentos");
    errorMostrado = true;
} else if (!/[A-ZÁÉÍÓÚÜ-áéíóú]/.test(texto) && errorMostrado) {
  errorMostrado = false;
}
});


  