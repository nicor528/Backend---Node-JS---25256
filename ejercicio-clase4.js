class Vehiculo {
  constructor(marca, modelo, año, color, km) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.color = color;
    this.km = km;
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

const vehiculos_after = [
  { marca: "Toyota", modelo: "Corolla", año: 2019, color: "Gris", km: 45000 },
  { marca: "Ford", modelo: "Focus", año: 2017, color: "Azul", km: 72000 },
  { marca: "Chevrolet", modelo: "Cruze", año: 2020, color: "Rojo", km: 31000 },
  { marca: "Volkswagen", modelo: "Golf", año: 2018, color: "Blanco", km: 58000 },
  { marca: "Honda", modelo: "Civic", año: 2021, color: "Negro", km: 15000 },
  { marca: "Nissan", modelo: "Sentra", año: 2016, color: "Plata", km: 89000 },
  { marca: "BMW", modelo: "Serie 3", año: 2019, color: "Azul Marino", km: 40000 },
  { marca: "Audi", modelo: "A4", año: 2022, color: "Gris Oscuro", km: 12000 },
  { marca: "Peugeot", modelo: "208", año: 2018, color: "Rojo Vino", km: 65000 },
  { marca: "Renault", modelo: "Kangoo", año: 2020, color: "Blanco", km: 27000 }
];

class Vehiculo2 {
  constructor(vehiculo) {
    this.marca = vehiculo.marca;
    this.modelo = vehiculo.modelo;
    this.año = vehiculo.año;
    this.color = vehiculo.color;
    this.km = vehiculo.km;
  }

  mostrarInfo(){
    console.log(`Marca: ${this.marca} | Modelo: ${this.modelo} | Año: ${this.año} | Color: ${this.color}`)
  }

}

class Autos extends Vehiculo2{
  constructor(vehiculo){
    super(vehiculo)
    this.tipo = "auto"
  }
}

class Motos extends Vehiculo2{
  constructor(vehiculo){
    super(vehiculo)
    this.tipo = "moto"
  }
}

const instancias_vehiculos_after = vehiculos_after.map(vehiculo => new Vehiculo2(vehiculo))

console.log(instancias_vehiculos_after)

const autos = vehiculos_after.map(vehiculo => new Autos(vehiculo))

console.log(autos)

