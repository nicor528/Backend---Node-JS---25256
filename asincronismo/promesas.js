function ejemploPromise (){
    return(
        new Promise((res, rej) => {
            setTimeout(() => {
                const numero = Math.random()
                console.log(numero)
                if (numero < 0.5){
                    res("Tarea asincronica resuelta")
                }else{
                    rej(new Error ("Tarea asincronica fallida"))
                }
            }, 3000);
        })
    )
}

const data = ejemploPromise()
console.log(data)

ejemploPromise().then((data) => {
    console.log(data)
}).catch((error) => {
    console.log(error)
})
.finally(() => {
    console.log("Promesa terminada")
})

