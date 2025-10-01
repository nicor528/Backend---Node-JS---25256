export async function obtenerProductos () {
    try{  
        const response = await fetch("https://fakestoreapi.com/products",{
            method: "GET"
        })

        const data = await response.json()
        console.log(`Los productos son: `)
        data.map((producto) => {
            console.log(producto)
        })
        
    }catch(error){
        console.log(error)
    }
}

export async function obtenerProducto(id) {
    try{
        const response = await fetch(`https://fakestoreapi.com/${id}`,{
            method: "GET"
        })

        const data = await response.json()
        console.log(`La informacion del producto es: `, data)
    }catch(error){
        console.log(error)
    }
}

export async function agregarProducto(producto) {
    try{
        const response = await fetch("https://fakestoreapi.com/products", {
            method: "POST",
            headers: {
               "Content-Type" : "application/json "
            },
            body: JSON.stringify(producto)
        })

        const data = await response.json()
        console.log("Producto agregado de manera exitosa", data)
    }catch(error){
        console.log(error)
    }
}

export async function eliminarProducto(id) {
    try{
        const response = await fetch(`https://fakestoreapi.com/${id}`,{
            method: "DELETE"
        })
        const data = await response.json()
        console.log("Producto eliminado con exito", data)
    }catch(error){
        console.log(error)
    }
}

export async function actualizarProducto(producto) {
    try{
        const response = await fetch(`https://fakestoreapi.com/products/${producto.id}`,{
            method: "PUT",
            headers: {
               "Content-Type" : "application/json "
            },
            body: JSON.stringify(producto)
        })
        const data = await response.json()
        console.log("Producto eliminado con exito", data)
    }catch(error){
        console.log(error)
    }

}


//obtenerProductos()
//console.log("")
//obtenerProducto("products/2")

/*
agregarProducto({
//"id": 21,
"title": "Prueba",
"price": 100,
//"description": "producto de prueba"
"category": "prueba",
//"image": "http://example.com"
})*/

//eliminarProducto("products/2")
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