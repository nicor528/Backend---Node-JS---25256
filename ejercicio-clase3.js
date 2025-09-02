const precios = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
const IVA = 1.21

const IVAs = precios.map(precio => precio*IVA)

console.log(IVAs)

IVAs.forEach((precio) => {
    console.log(`El precio es: ${precio.toFixed(2)}.- IVA incluido.`)
})

