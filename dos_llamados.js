function primerllamado(){
    dato1 = "dato1"
    return dato1
}

function segundollamado(){
    dato2 = "dato2"
    return dato2
}

async function realizarunaoperacion () {
    const dato1 = await primerllamado()
    const dato2 = await segundollamado(dato1)
}
