let codificados = {
    'a' : 'ai',
    'e' : 'enter',
    'i' : 'imes',
    'o' : 'ober',
    'u' : 'ufat'
}

function validarCampoTexto(mensaje){
    const regex = /[^a-z0-9\s]/g;
    if (regex.test(mensaje)) {
        return false;
    } else {
        return true;
    }
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

function encriptar(){
    let input = document.getElementById('entrada-texto'); 
    let resultado = document.getElementById ('texto-resultado');
    let texto = input.value;
    if(validarCampoTexto(texto)){
        let txtEncriptado = cifrarMensaje(texto);
        resultado.innerHTML = txtEncriptado;
        document.getElementsByClassName('main__resultado_vacio')[0].classList.add('inactivo');
        document.getElementsByClassName('main__resultado_lleno')[0].classList.remove('inactivo');
        input.value = '';
    }else{
        alert("Error encriptar");
    }
}

function desencriptar(){
    let input = document.getElementById('entrada-texto');   
    let resultado = document.getElementById ('texto-resultado');
    let texto = input.value;
    if(validarCampoTexto(texto)){
        let txtDesencriptado = descifrarMensaje(texto);
        resultado.innerHTML = txtDesencriptado;
        input.value = '';
    }else{
        alert("Error desencriptar");
    }
}

function copiarTexto(){
    var textarea = document.getElementById('texto-resultado');
    textarea.select();
    textarea.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(textarea.value).then(function() {
        let mensaje = document.getElementById('popup');
        popup.classList.remove('inactivo');
        setTimeout(()=>{
            popup.classList.add('inactivo');
        },1500)
    }).catch(function(error) {
        console.error("Error al copiar el texto: ", error);
    });
}