import galeria from "./imagenes.js"

const imagenes_galeria = document.getElementById ("contenido-imagenes")
let contenido = "";
galeria.nft.forEach((cuerpo)=>{
    contenido += ` <div class="imagen-contenedor">
    <h3>${cuerpo.nombre}</h3>
    <p>#${cuerpo.id}</p>
    <img src="${cuerpo.imagen}" class="imagen-contenedor-imagen" alt="" srcset="">
</div> `
})
imagenes_galeria.innerHTML = contenido