class Vehiculo {
  constructor(marca, modelo, año, color) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.color = color;
  }

  mostrarInfo(){
    console.log(`Marca: ${this.marca} | Modelo: ${this.modelo} | Año: ${this.año} | Color: ${this.color}`)
  }
}

const vehiculos = [
  new Vehiculo("Toyota", "Corolla", 2020, "Azul"),
  new Vehiculo("Honda", "Civic", 2019, "Azul"),
  new Vehiculo("Ford", "Focus", 2018, "Negro"),
  new Vehiculo("Chevrolet", "Malibu", 2021, "Amarillo"),
  new Vehiculo("Nissan", "Sentra", 2017, "Gris"),
  new Vehiculo("Volkswagen", "Jetta", 2022, "Verde"),
  new Vehiculo("Hyundai", "Elantra", 2020, "Amarillo"),
  new Vehiculo("Kia", "Forte", 2019, "Naranja"),
  new Vehiculo("Mazda", "3", 2018, "Morado"),
  new Vehiculo("Subaru", "Impreza", 2021, "Rosa"),  
];

console.log(vehiculos)

vehiculos.forEach((vehiculo) => {
    if(vehiculo.año > 2018){
        vehiculo.mostrarInfo()
    }
})

function contarColores(colorComparado, lista){
    let contador = 0
    lista.forEach((vehiculo) => {
        const {color} = vehiculo
        if(color.toLowerCase() == colorComparado){
            contador ++
        }
    })
    console.log(contador)
}

contarColores("amarillo", vehiculos)