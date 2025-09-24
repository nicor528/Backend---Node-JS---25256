async function obtenerProductos () {
    try{   
        const response = await fetch("https://fakestoreapi.com/products",{
            method: "GET"
        })

        const data = await response.json()
        console.log("dentro de obtener", data)

    }catch(error){
        console.log(error)
    }
}

async function obtenerProducto(id) {
    try{
        const response = await fetch(`https://fakestoreapi.com/products/${id}`,{
            method: "GET"
        })

        const data = await response.json()
        console.log("dentro de obtener", data)
    }catch(error){
        console.log(error)
    }
}

async function agregarProducto(producto) {
    try{
        const response = await fetch("https://fakestoreapi.com/products", {
            method: "POST",
            headers: {
               "Content-Type" : "application/json "
            },
            body: JSON.stringify(producto)
        })

        const data = await response.json()
        console.log("dentro de agregar", data)
    }catch(error){
        console.log(error)
    }
}

async function eliminarProducto(id) {
    try{
        const response = await fetch(`https://fakestoreapi.com/products/${id}`,{
            method: "DELETE"
        })
        const data = await response.json()
        console.log("dentro de eliminar", data)
    }catch(error){
        console.log(error)
    }
}

async function actualizarProducto(producto) {
    try{
        const response = await fetch(`https://fakestoreapi.com/products/${producto.id}`,{
            method: "PUT",
            headers: {
               "Content-Type" : "application/json "
            },
            body: JSON.stringify(producto)
        })
        const data = await response.json()
        console.log("desde actualizar producto", data)
    }catch(error){
        console.log(error)
    }

}


//obtenerProductos()
//obtenerProducto(1)

agregarProducto({
//"id": 21,
"title": "Prueba",
"price": 100,
"description": "producto de prueba"
//"category": "prueba",
//"image": "http://example.com"
})

//eliminarProducto(1)
//obtenerProducto(1)
/*
actualizarProducto({
"id": 1,
"title": "Prueba",
"price": 100,
"description": "producto de prueba",
"category": "prueba",
"image": "http://example.com"
})*/