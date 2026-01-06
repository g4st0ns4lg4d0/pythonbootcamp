const cambiarColor = color => {
    document.getElementsByTagName('body')[0].style.backgroundColor = color;
    document.getElementById("colorSeleccionado").textContent = color;
}
const previsualizarColor = color =>{
    document.getElementsByTagName('body')[0].style.backgroundColor = color;
}
const restablecerColor = () =>{
    document.getElementsByTagName('body')[0].style.backgroundColor = document.getElementById("colorSeleccionado").textContent;
}
const cambiarSize = size => {
    document.getElementById("parrafo").style.fontSize = size * 12 + "px";
}
const cambiarFamily = family => {
    document.getElementById("parrafo").style.fontFamily = family;
}
const cambiarColorParrafo = color =>{
    document.getElementById("parrafo").style.color = color;
}
const agregarTexto = () => {
    let textoUsuario = document.getElementById("textoUsuario").value
    let codigo = "<p id='parrafoCreado'>" + textoUsuario + "</p>";
    document.getElementById("contenedor").innerHTML += codigo;
}
const eliminarTexto = () => {
    document.getElementById("parrafoCreado").remove();
}
const validar = () =>{
    let mensajeError = "";
    let f = document;
    if (f.getElementById("nombre").value.trim() == ""){
        mensajeError += "Ingrese un texto en el campo nombre.\n";
    }
    if (f.getElementById("apellido").value.trim() == ""){
        mensajeError += "Ingrese un texto en el campo apellido.\n";
    }
    if (f.getElementById("pais").value == "Seleccione"){
        mensajeError += "Seleccione un país.\n";
    }
    if (isNaN(parseInt(f.getElementById("edad").value))){
        mensajeError += "Ingrese una edad válida. \n";
    }
    if (parseInt(f.getElementById("edad").value)<1 || parseInt(f.getElementById("edad").value)>100){
        mensajeError += "Ingrese una edad entre 1 y 100 años. \n";
    }
    if (!mensajeError==""){
        alert(mensajeError);
    }
}