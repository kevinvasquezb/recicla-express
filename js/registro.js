const nombre= document.getElementById("name");
const email= document.getElementById("email");
const password= document.getElementById("password");
const form= document.getElementById("form");
const parrafo= document.getElementById("warnings");

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings=""
    let entrar=false
    parrafo.innerHTML=""
    if(nombre.value.length <6){
        warnings += `El nombre no es valido <br>`
        entrar=true
    }
    if(!email.value.includes("@")){
        warnings += `El email no es valido <br>`
        entrar=true
    }
    if(password.value.length <8){
        warnings += `La contraseña no es valida <br>`
        entrar=true
    }
    if(entrar){
        parrafo.innerHTML=warnings
    }else{
        parrafo.innerHTML="Enviado"
    }
})


        
