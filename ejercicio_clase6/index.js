/*fetch("https://rickandmortyapi.com/api/character", {
    method: "GET",
    headers: {
        "Content-Type" : "application/json"
    }
}).then( async (response) => {
    const data = await response.json()
    //console.log(data)
    console.log(data.results[0])
    console.log(data.results[1])
    console.log(data.results[2])
    console.log(data.results[3])
    console.log(data.results[4]) 
}).catch((error) => {
    console.log(error)
}).finally(() => {
    console.log("proceso terminado")
})*/

async function ejercicio6 (){
    try{
        console.log("TEST2")
        const response = await fetch("https://rickandmortyapi.com/api/character",{"method": "GET"})
        //console.log(response)
        const data =  await response.json()
        console.log(data.results[0].name)
        console.log(data.results[1].name)
        console.log(data.results[2].name)
        console.log(data.results[3].name)
        console.log(data.results[4].name) 
    }catch(error){
        console.log(error)
    }
}

ejercicio6()
console.log("TEST1")