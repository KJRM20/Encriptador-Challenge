let codificados = {
    'a' : 'ai',
    'e' : 'enter',
    'i' : 'imes',
    'o' : 'ober',
    'u' : 'ufat'
}

function validarCampoTexto(mensaje){
    //const regex = /[^a-z0-9\s]/g;
    const regex = /[^a-z0-9\s!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
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
    if(texto ==''){
        document.getElementsByClassName('main__resultado_lleno')[0].classList.add('inactivo');
        document.getElementsByClassName('main__resultado_vacio')[0].classList.remove('inactivo');
    }else if(validarCampoTexto(texto)){
        let txtEncriptado = cifrarMensaje(texto);
        resultado.innerHTML = txtEncriptado;
        document.getElementsByClassName('main__resultado_vacio')[0].classList.add('inactivo');
        document.getElementsByClassName('main__resultado_lleno')[0].classList.remove('inactivo');
        input.value = '';
    }else{
        let advertencia = document.getElementById("main-advertencia");
        animarAdvertencia(advertencia);
    }
}

function desencriptar(){
    let input = document.getElementById('entrada-texto');   
    let resultado = document.getElementById ('texto-resultado');
    let texto = input.value;
    if(texto ==''){
        document.getElementsByClassName('main__resultado_lleno')[0].classList.add('inactivo');
        document.getElementsByClassName('main__resultado_vacio')[0].classList.remove('inactivo');
    }else if(validarCampoTexto(texto)){
        let txtDesencriptado = descifrarMensaje(texto);
        resultado.innerHTML = txtDesencriptado;
        document.getElementsByClassName('main__resultado_vacio')[0].classList.add('inactivo');
        document.getElementsByClassName('main__resultado_lleno')[0].classList.remove('inactivo');
        input.value = '';
    }else{
        let advertencia = document.getElementById("main-advertencia");
        animarAdvertencia(advertencia);
    }
}

function copiarTexto(){
    var textarea = document.getElementById('texto-resultado');
    textarea.select();
    textarea.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(textarea.value).then(function() {
        let mensaje = document.getElementById('popup');
        mensaje.classList.remove('inactivo');
        setTimeout(()=>{
            mensaje.classList.add('inactivo');
        },2500)
    }).catch(function(error) {
        console.error("Error al copiar el texto: ", error);
    });
}

function animarAdvertencia(elemento){
    elemento.classList.add('animate-border');
    setTimeout(()=>{
        elemento.classList.remove('animate-border');
    },2500);
}
