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

async function ejemploAsyncAwait(){
    try{
        const data = await ejemploPromise()
        const data2 = await ejemploPromise()
        const data3 = await ejemploPromise()
        console.log(`La informacion devuelta por la promesa es: ${data}`)
    }catch(error){
        console.log(error)
    }
    
}

ejemploAsyncAwait()