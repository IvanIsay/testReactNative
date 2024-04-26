
const titulo= document.createElement('h1')
titulo.innerText='Soy titulo desde JS'
document.body.append(titulo)


const boton= document.createElement('button')
boton.innerText='Presioname'
document.body.append(boton)

boton.addEventListener('click',function (){
    //console.log('evento click ejecutado')
    titulo.innerText= "Evento click Ejecutado"
    alert('Exito') 
})


/* 
const usuario={
    nombre:'ana',
    apellido: 'lopez',
    edad: 30,
    direccion:{
        pais:'Mexico',
        cuidad:'Qro',
        calle: 'Las misma 123'
    },
    amigos:['juan','bety'],
    estatus: true,
    enviaCorreo: enviarCorreo = () => 'enviando ...' ,

}

//Propiedades
//console.log(usuario)
//console.log(usuario.nombre)
//console.log(usuario.direccion)
//console.log(usuario.direccion.calle)
//console.log(usuario.amigos)
//console.log(usuario.estatus)

//Metodos
console.log(usuario.enviaCorreo())






//Funcion tradicional
function suma(a,b){ 
    return a + b 
} 


//Funcion anonima FatArrow

const suma= (a,b) =>{ 
    return a + b 
} 

//Funcion anonima FatArrow simplificada

const suma= (a,b) => a + b  

console.log( suma(12,10))
console.log( suma(13,1))
console.log( suma(2,102))

*/