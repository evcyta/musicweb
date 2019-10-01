
function valida(e,form){
    e.preventDefault();
    let usuario = document.getElementById('usuario');
    let pass = document.getElementById("password");
            
    if((usuario.value == "duoc")||(pass.value == "123")){
        envia();
    }else{
        window.alert("Los campos usuario y contraseña no pueden estar vacíos");
    }
}

function envia(){
    window.location.href="/muestrate.html";
}