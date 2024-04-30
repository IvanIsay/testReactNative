





const ul= document.createElement('ul')

async function cargarDatos(){
    const response= await fetch('https://jsonplaceholder.typicode.com/posts')
    const datos= await response.json()
    console.log(datos)
    datos.forEach(function (post){
        const li = document.createElement('li')
        li.innerText= post.id
        ul.append(li)
    })
    document.body.append(ul)

}
cargarDatos()
console.log('tarea 2')
console.log('tarea 3')












/*
const ul= document.createElement('ul')

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function (response) {
        console.log('Carga de post completada!!')
        return response.json()
    }).then(function (data){
        console.log(data)
        data.forEach(function (post){
            const li = document.createElement('li')
            li.innerText= post.id
            ul.append(li)
        })
        document.body.append(ul)
    })

console.log('carga html...')
console.log('Carga de imagenes...')



import * as calc from './calculadora.js'

console.log(calc.suma(10,55))
console.log(calc.resta(10,55))


const names = ['ivan','naomi','isay','reyna']


for(let i=0; i <names.length; i++){
    const elem= names[i];
    console.log(elem)
}


//ForEach

names.forEach(function (name){
    console.log(name)
})


// Map: genera un nuevo arreglo, se utiliza para manipular el nuevo sin alterar el original

const array2= names.map(function (name){
    //console.log(name)
    //return name
    return `Hola ${name}`
})

console.log(names)
console.log(array2)



// FIND

const encontrado = names.find(function (name){
    if(name === 'isay'){
        return name
    }    
})

console.log(encontrado)



// Filter: recorre el arreglo filtrando resultado a un nuevo
   //name === 'isay'

const encontrado = names.filter(function (name){
    if(name !== 'isay'){
        return name
    }    
})

console.log(names)
console.log(encontrado)


//CONCAT
const edades = [5,9,70,34]
console.log(names.concat(edades))

//Spread Operator propagar,desparramar
console.log([...names,...edades])



*/













/* 
boton.innerText= 'Ejecuta Alert'
document.body.append(boton)

boton.addEventListener('dblclick',()=>{
    alert('doble click ejecutado')
})

const usuario= {
    nombre:'ivan',
    edad: 36,
}

function printInfo(usuario){
    const {nombre,edad}= usuario
    console.log(nombre,edad)
    return '<h1>Hola usuario: '+ nombre + '</h1>'

}

console.log(printInfo(usuario))
document.body.innerHTML= printInfo(usuario)


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