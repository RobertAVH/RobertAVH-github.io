function encriptar(){
    var frase = document.getElementById("mensaje").value;
    
    if (frase.length <= 0){
        alert("No hay mensaje para encriptar");
        return 0;
    }else if(frase.length >= 0 && tiene_mayusculas(frase) == 1){
        alert("Recuerda que solo se reciben minusculas");
        document.getElementById("mensaje").value ="";
        return 0;
    }else{
        frase = frase.replace("e", "enter").replace("i", "imes").replace("a" ,"ai").replace("o", "ober").replace("u" , "ufat");
    
        document.getElementById("imagen").style.display = "none";
        document.getElementById("mensajeEncriptado").style.display = "block";
        document.getElementById("mensajeEncriptado").style.disabled = "false";
        document.getElementById("mensajeEncriptado").value = frase;
    }
 
}

function desencriptar(){
    var frase = document.getElementById("mensaje").value

    if (frase.length <= 0){
        alert("No hay mensaje para desencriptar");
        return 0;
    }else if(frase.length >= 0 && tiene_mayusculas(frase) == 1){
        alert("Recuerda que solo se reciben minusculas");
        document.getElementById("mensaje").value ="";
        return 0;
    }else{
        frase = frase.replace("enter", "e").replace("imes", "i").replace("ai" ,"a").replace("ober", "o").replace("ufat" , "u");
    
        document.getElementById("imagen").style.display = "none";
        document.getElementById("mensajeEncriptado").style.display = "block";
        document.getElementById("mensajeEncriptado").value = frase;
    }
}

function copyToClickBoard(){
    var content = document.getElementById('mensajeEncriptado').value;

    if (content.length <= 0){
        alert("sin datos que copiar")
    }else{
        navigator.clipboard.writeText(content)
            .then(() => {
            document.getElementById("mensajeEncriptado").style.display = "none";
            document.getElementById("imagen").style.display = "block";
            document.getElementById("mensaje").value ="";
            alert("Mensaje copiado")
        })
            .catch(err => {
            console.log('Something went wrong', err);
        })
    }
 
}

function tiene_mayusculas(texto){
    var letras_mayusculas="ABCDEFGHYJKLMNÑOPQRSTUVWXYZ";

    for(i=0; i<texto.length; i++){
        console.log(texto.indexOf(texto.charAt(i),0))
       if (letras_mayusculas.indexOf(texto.charAt(i),0)!=-1){
          return 1;
       }
    }
    return 0;
}