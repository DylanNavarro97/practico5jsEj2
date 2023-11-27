const nombre = document.querySelectorAll('input')[0]
const edad = document.querySelectorAll('input')[1]
const dni = document.querySelectorAll('input')[2]
const sexo = document.querySelectorAll('select')[0]
const peso = document.querySelectorAll('input')[3]
const altura = document.querySelectorAll('input')[4]
const anioDeNacimiento = document.querySelectorAll('input')[5]
const botonCrear = document.querySelectorAll('button')[0]
const botonGeneracion = document.querySelectorAll('button')[1]
const botonEdad = document.querySelectorAll('button')[2]
const botonInfo = document.querySelectorAll('button')[3]
const form = document.querySelector('form')
let persona = ''



class Persona {
    constructor (nombre, edad, dni, sexo, peso, altura, anioNacimiento){
        this.nombre = nombre
        this.edad = edad
        this.dni = dni
        if (typeof sexo === 'string'){
            if (sexo.toLowerCase() === 'h'){
                this.sexo = 'hombre'
            } else if (sexo.toLowerCase() === 'm'){
                this.sexo = 'mujer'
            }
        } else {
            this.sexo = `No se especificó`
        }
        
        this.peso = peso
        this.altura = altura
        this.anioNacimiento = anioNacimiento
    }

    mostrarGeneracion() {
        let anio = parseInt(this.anioNacimiento)
        if (anio >= 1930 && anio <= 1948){
            alert(`Pertenece a "Silent Generation" y su rasgo característico es: Austeridad`)
        } else if (anio >= 1949 && anio <= 1968){
            alert(`Pertenece a "Baby Boom" y su rasgo característico es: Ambición`)
        } else if (anio >= 1969 && anio <= 1980){
            alert(`Pertenece a "Generacion X" y su rasgo característico es: Obsesión por el éxito`)
        } else if (anio >= 1981 && anio <= 1993){
            alert(`Pertenece a "Generacion Y" y su rasgo característico es: Frustración`)
        } else if(anio >= 1994 && anio <= 2010){
            alert(`Pertenece a "Generacion Z" y su rasgo característico es: Irreverencia`)
        }
    }

    esMayorDeEdad() {
        const edadIn = parseInt(this.edad)
        if (edadIn > 18){
            alert(`Es mayor de edad`)
        } else {
            alert(`Es menor de edad`)
        }
    }

    mostrarDatos() {
        alert(`Nombre: ${this.nombre}, edad: ${this.edad}, DNI: ${this.dni}, sexo: ${this.sexo}, peso: ${this.peso}kg, altura: ${this.altura}cm, año de nacimiento: ${this.anioNacimiento}`)
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    if (nombre.value.trim() !== ''){
        persona = new Persona(nombre.value, edad.value, dni.value, sexo.value, peso.value, altura.value, anioDeNacimiento.value)
        botonGeneracion.className = 'btn btn-success my-2'
        botonEdad.className ='btn btn-success my-2'
        botonInfo.className = 'btn btn-success my-2'
    } else {
        alert("Ingresa datos válidos en el nombre")
    }
})

botonGeneracion.addEventListener('click', () => {
    persona.mostrarGeneracion()
})

botonEdad.addEventListener('click', () => {
    persona.esMayorDeEdad()
})

botonInfo.addEventListener('click', () => {
    persona.mostrarDatos()
})







