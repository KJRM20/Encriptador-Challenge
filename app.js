let codificados = {
    'a' : 'ai',
    'e' : 'enter',
    'i' : 'imes',
    'o' : 'ober',
    'u' : 'ufat'
}

function cifrarMensaje(mensaje){
    let msjEncriptado = '';
    for(caracter of mensaje){        
        if(codificados.hasOwnProperty(caracter)){
            msjEncriptado += codificados[caracter];
        }else{
            msjEncriptado += caracter;
        }
    }
    return msjEncriptado;
}

function descifrarMensaje(mensaje){
    let msjDesencriptado = mensaje;
    for(codigo in codificados){
        console.log(codigo);
        if(msjDesencriptado.includes(codificados[codigo])){
            msjDesencriptado = msjDesencriptado.replaceAll(codificados[codigo], codigo);
        }
    }
    return msjDesencriptado;
}

let mensajePrueba = "hola esto es un cifrado";
let mensajeCifrado = cifrarMensaje(mensajePrueba);
let mensajeDescifrado = descifrarMensaje(mensajeCifrado);
console.log(mensajeCifrado);
console.log(mensajeDescifrado);